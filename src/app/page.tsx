import Hero from "@/components/Hero";
import DemoPreview from "@/components/DemoPreview";
import ReportProof from "@/components/ReportProof";
import TrustBlock from "@/components/TrustBlock";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Hero />
      <DemoPreview />
      <ReportProof />
      <TrustBlock />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Security />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
