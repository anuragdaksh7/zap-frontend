"use client";

import { Mail, Send, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-16 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center hover:scale-105 transition">
                <Image
                                src="/icon.png"
                                alt="ZapMail Logo"
                                width={24}
                                height={24}
                              />
              </div>
              <h2 className="text-xl font-bold text-primary pt-2 pb-1">ZapMail</h2>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              AI-powered email automation helping teams scale outreach without
              hitting spam folders.
            </p>
            <a
              href="mailto:hello@zapmail.ai"
              className="text-primary hover:text-cta font-medium transition"
            >
              hello@zapmail.ai
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-3">
              Get updates, tips & deals in your inbox.
            </p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="you@domain.com"
                className="bg-background border px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-cta transition"
              />
              <button
                type="submit"
                className="bg-cta p-2 rounded-md text-white hover:bg-ctaHover transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-6">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="font-medium text-primary">ZapMail</span>.
            Built for founders, by founders.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-block font-medium text-muted-foreground hover:text-cta hover:translate-x-1 transition-transform duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top"
          aria-label="Back to Top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
