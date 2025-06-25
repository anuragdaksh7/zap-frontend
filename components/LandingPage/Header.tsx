"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-between h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <Image
                src="/icon.png"
                alt="ZapMail Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="text-xl font-bold text-primary pt-2 pb-1">ZapMail</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="header-elements">Features</a>
            <a href="#how-it-works" className="header-elements">How It Works</a>
            <a href="#testimonials" className="header-elements">Testimonials</a>
            <a href="#faq" className="header-elements">FAQ</a>
          </nav>
          <Button className="btn-1 hover:bg-ctaHover">Start Free Trial</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
