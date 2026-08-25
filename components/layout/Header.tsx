"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRightLeft } from "lucide-react";
import { Logo } from "@/components/SVG/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "The Programme", href: "/programme" },
  { name: "Governance", href: "/governance" },
  { name: "Get Involved", href: "/involved" },
  { name: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAltPage = pathname === "/alt";
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on Escape key press & prevent body scrolling when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-green-light/30 text-white">
      {/* Top Banner / Government Distinction */}
      <div className="bg-brand-charcoal px-4 py-1 text-center text-[10px] uppercase tracking-widest text-brand-gold border-b border-brand-dark">
        Federal Republic of Nigeria — Official National Programme Portal
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xs"
          aria-label="Project WHEAT-NESS Home"
        >
          <Logo showTagline variant="light" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-xs uppercase tracking-wider font-medium transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xs ${
                  isActive
                    ? "text-brand-gold font-semibold border-b-2 border-brand-gold"
                    : "text-gray-200 hover:text-brand-gold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href={isAltPage ? "/" : "/alt"} aria-label={isAltPage ? "Switch to Primary UI" : "Switch to Alternate UI"}>
            <Button
              variant="outline"
              size="sm"
              className="border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-colors flex items-center gap-1.5"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{isAltPage ? "Primary UI" : "↹ Alternate UI"}</span>
            </Button>
          </Link>
          <Link href="/involved">
            <Button variant="gold" size="sm">
              Get Involved
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-200 hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xs"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={drawerRef}
          className="lg:hidden bg-brand-dark border-b border-brand-green-light/40 px-4 pt-2 pb-6 space-y-4 animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-wider font-medium py-1.5 border-b border-brand-green-light/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                    isActive ? "text-brand-gold font-semibold" : "text-gray-200 hover:text-brand-gold"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-2 pt-2">
            <Link href={isAltPage ? "/" : "/alt"} onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-center border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-dark flex items-center gap-1.5"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{isAltPage ? "Primary UI" : "↹ Alternate UI"}</span>
              </Button>
            </Link>
            <Link href="/involved" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="gold" size="sm" className="w-full justify-center">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
