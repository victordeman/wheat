import React from "react";
import Link from "next/link";
import { Logo } from "@/components/SVG/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white border-t border-brand-dark pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          {/* Main Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Federal Republic of Nigeria
            </div>
            <Logo variant="light" showTagline className="h-10 md:h-12" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-md mt-4">
              Project WHEAT-NESS is the national programme dedicated to optimising the wheat-based consumer foods value chain, raising milling capacity utilisation, and endowing a self-renewing development fund for sustainable industrial growth.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">
                  About the Programme
                </a>
              </li>
              <li>
                <a href="#programme" className="hover:text-brand-gold transition-colors">
                  Objectives & Pillars
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-brand-gold transition-colors">
                  Impact & Numbers
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-brand-gold transition-colors">
                  Governance & Leadership
                </a>
              </li>
              <li>
                <a href="#campaign" className="hover:text-brand-gold transition-colors">
                  Made-in-Nigeria Campaign
                </a>
              </li>
            </ul>
          </div>

          {/* Stakeholder Links */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Participate
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#involved" className="hover:text-brand-gold transition-colors">
                  Millers & Processing Partners
                </a>
              </li>
              <li>
                <a href="#involved" className="hover:text-brand-gold transition-colors">
                  MSME Bakery Enterprises
                </a>
              </li>
              <li>
                <a href="#involved" className="hover:text-brand-gold transition-colors">
                  Investors & Organised Private Sector
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-gold transition-colors">
                  Programme Delivery Unit Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Alt switcher */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Project WHEAT-NESS. Federal Republic of Nigeria. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/alt"
              className="text-brand-gold hover:underline font-medium"
            >
              View Alternate UI →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
