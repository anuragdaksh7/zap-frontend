"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-between h-16">
          <div className="flex items-center space-x-2">
            <Link href={"/"} className="flex-start gap-2">
              <div className="bg-cta text-white w-[35px] h-[35px] flex-center ml-3 rounded-sm text-2xl font-semibold">
                Z
              </div>
              <h1 className="font-bold text-2xl text-foreground">ZapMail</h1>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="header-elements">
              Features
            </a>
            <a href="#how-it-works" className="header-elements">
              How It Works
            </a>
            <a href="#testimonials" className="header-elements">
              Testimonials
            </a>
            <a href="#faq" className="header-elements">
              FAQ
            </a>
          </nav>
          <Button className="btn-1 hover:bg-ctaHover">Start Free Trial</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
