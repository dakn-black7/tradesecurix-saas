"use client";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userType: "trader",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to submit request.");
      setSubmitted(true);
      setFormData({ fullName: "", email: "", userType: "trader", message: "" });
      setStatus("idle");
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="border-b border-gray-800 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
            Contact
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Get in Touch</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Request a demo, ask a question, or talk to our team about how TradeSecurix can
            fit your workflow.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact information</h2>
              <p className="text-zinc-400 leading-relaxed">
                Our team typically responds within 2 business hours. For enterprise or
                partnership inquiries, please include details about your use case.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Email</p>
                  <a
                    href="mailto:contact@tradesecurix.com"
                    className="text-white hover:text-blue-400 transition font-medium"
                  >
                    contact@tradesecurix.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Address</p>
                  <p className="text-white font-medium">Trade Securix LLC (in formation)</p>
                  <p className="text-zinc-400 text-sm">Randall Ave Ste 100</p>
                  <p className="text-zinc-400 text-sm">Cheyenne, WY 82001, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-gray-800 bg-gray-900/50 p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                <p className="text-zinc-400">We've received your request and will follow up shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition"
                    placeholder="jane@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">I am a…</label>
                  <select
                    value={formData.userType}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-600 transition"
                  >
                    <option value="trader">Independent Trader</option>
                    <option value="firm">Trading Firm</option>
                    <option value="institution">Financial Institution</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Message (optional)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-blue-600 transition resize-none"
                    placeholder="Tell us about your specific needs…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-xl font-semibold flex items-center justify-center gap-2 transition text-white"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                  <ArrowRight className="h-5 w-5" />
                </button>
                {status === "error" && errorMessage && (
                  <p className="text-sm text-red-400 text-center">{errorMessage}</p>
                )}
                <p className="text-xs text-zinc-500 text-center">
                  We respect your privacy.{" "}
                  <a href="mailto:privacy@tradesecurix.com" className="text-blue-400 hover:text-blue-300">Contact us for privacy inquiries</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
