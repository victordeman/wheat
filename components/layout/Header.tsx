"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRightLeft } from "lucide-react";
import { Logo } from "@/components/SVG/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "The Programme", href: "#programme" },
  { name: "Governance", href: "#governance" },
  { name: "Get Involved", href: "#involved" },
  { name: "Contact", href: "#contact" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAltPage = pathname === "/alt";

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-green-light/30 text-white">
      {/* Top Banner / Government Distinction */}
      <div className="bg-brand-charcoal px-4 py-1 text-center text-[10px] uppercase tracking-widest text-brand-gold border-b border-brand-dark">
        Federal Republic of Nigeria — Official National Programme Portal
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo showTagline variant="light" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isAltPage ? `/${link.href}` : link.href}
              className="text-xs uppercase tracking-wider font-medium text-gray-200 hover:text-brand-gold transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href={isAltPage ? "/" : "/alt"}>
            <Button
              variant="outline"
              size="sm"
              className="border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-colors flex items-center gap-1.5"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>{isAltPage ? "Primary UI" : "↹ Alternate UI"}</span>
            </Button>
          </Link>
          <a href="#involved">
            <Button variant="gold" size="sm">
              Get Involved
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-200 hover:text-brand-gold focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-b border-brand-green-light/40 px-4 pt-2 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isAltPage ? `/${link.href}` : link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-medium text-gray-200 hover:text-brand-gold py-1.5 border-b border-brand-green-light/20"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <Link href={isAltPage ? "/" : "/alt"}>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-center border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-dark flex items-center gap-1.5"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>{isAltPage ? "Primary UI" : "↹ Alternate UI"}</span>
              </Button>
            </Link>
            <a href="#involved" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="gold" size="sm" className="w-full justify-center">
                Get Involved
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
