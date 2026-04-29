import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

export const runtime = "nodejs";

// Stripe sends raw body — we must disable body parsing
export async function POST(request: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 500 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 }
    );
  }

  // Handle Stripe events
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;

      // TODO: store { userId, customerId, subscriptionId, plan } in your database
      console.log("[Stripe] Checkout completed:", { userId, customerId, subscriptionId });
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const userId = subscription.metadata?.userId;

      // TODO: update subscription status in your database
      console.log("[Stripe] Subscription updated:", { userId, status: subscription.status });
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const userId = subscription.metadata?.userId;

      // TODO: downgrade / revoke access in your database
      console.log("[Stripe] Subscription cancelled:", { userId });
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      // TODO: notify user of failed payment
      console.log("[Stripe] Payment failed:", { customer: invoice.customer });
      break;
    }

    default:
      // Ignore unhandled event types
      break;
  }

  return NextResponse.json({ received: true });
}
