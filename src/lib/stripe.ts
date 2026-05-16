import 'server-only';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2025-03-31.basil',
    })
  : null;

export const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const planPriceMap: Record<string, string | undefined> = {
  doc_starter: process.env.STRIPE_PRICE_STARTER,
  doc_pro: process.env.STRIPE_PRICE_PRO,
  comp_basic: process.env.STRIPE_PRICE_BASIC,
  comp_global: process.env.STRIPE_PRICE_GLOBAL,
};
