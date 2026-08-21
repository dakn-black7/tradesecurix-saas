import Hero from "@/components/Hero";
import ReportProof from "@/components/ReportProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <ReportProof />
      <Features />
      <HowItWorks />
      <Pricing />
      <Security />
      <ContactForm />
      <Footer />
    </main>
  );
}
