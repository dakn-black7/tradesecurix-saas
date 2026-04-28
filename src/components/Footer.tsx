import Link from "next/link";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              <span className="text-white">Trade</span>
              <span className="text-blue-600">Securix</span>
            </h3>
            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
              Institutional-grade trade verification and counterparty risk assessment.
            </p>
            <div className="space-y-1 text-xs text-zinc-500">
              <p>
                <strong>Trade Securix LLC</strong>
              </p>
              <p>(In Formation)</p>
              <p>Randall Ave Ste 100</p>
              <p>WY 82001, USA</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/solutions" className="hover:text-white transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-white transition">
                  Security
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Risk Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-zinc-400 mb-6">
              <p>
                <a
                  href="mailto:contact@tradesecurix.com"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  contact@tradesecurix.com
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-white transition">
                  Request Demo
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-800 rounded-lg transition text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-800 rounded-lg transition text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-800 rounded-lg transition text-zinc-400 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-800 rounded-lg transition text-zinc-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-12">
          <h4 className="font-semibold text-sm mb-3 text-zinc-300">Risk Disclaimer</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            TradeSecurix provides tools to support due diligence and risk assessment in trade transactions. 
            Our analysis is not a guarantee of counterparty legitimacy. Users remain responsible for independent 
            verification and compliance with applicable laws and regulations. Past analysis accuracy does not guarantee 
            future results. Trade involves substantial risk of loss. Use TradeSecurix as one tool among many in your 
            risk management framework, not as the sole basis for trading decisions.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>&copy; 2026 Trade Securix LLC. All rights reserved.</p>
          <p>
            Designed for institutional-grade trade verification.{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Status
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
