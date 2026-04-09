"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userType: "trader",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with actual form submission logic
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", email: "", userType: "trader", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Request a Demo
          </h2>
          <p className="text-xl text-zinc-400">
            See TradeSecurix in action. Our team will contact you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
              <p className="text-zinc-400">
                We've received your request. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 transition text-white placeholder-zinc-500"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 transition text-white placeholder-zinc-500"
                  placeholder="john@example.com"
                />
              </div>

              {/* User Type */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  I am a...
                </label>
                <select
                  value={formData.userType}
                  onChange={(e) =>
                    setFormData({ ...formData, userType: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 transition text-white"
                >
                  <option value="trader">Independent Trader</option>
                  <option value="firm">Trading Firm</option>
                  <option value="institution">Financial Institution</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message (optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 transition text-white placeholder-zinc-500 resize-none"
                  placeholder="Tell us about your specific needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105"
              >
                Request Demo <ArrowRight className="h-5 w-5" />
              </button>

              {/* Privacy Notice */}
              <p className="text-xs text-zinc-500 text-center">
                We'll never share your information. Check our{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  privacy policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
