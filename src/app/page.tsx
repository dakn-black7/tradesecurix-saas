import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Security />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
