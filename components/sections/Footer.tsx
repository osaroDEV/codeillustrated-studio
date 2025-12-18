'use client';

import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold anton-sc mb-6">Code Illustrated Studio</h3>
            <p className="text-gray-400 mb-6">
              Crafting Digital Products to impact the Future Today
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/447405786279"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                data-cursor-hover
              >
                <Phone size={18} />
                <span>+44 7405 786 279</span>
              </a>
              <a
                href="mailto:hello@hatypo.studio"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                data-cursor-hover
              >
                <Mail size={18} />
                <span>admin@codeillustrated.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Pages</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#works" className="text-gray-400 hover:text-white transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#partnership" className="text-gray-400 hover:text-white transition-colors">
                  Partnership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Branding Identity
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Visual Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <ul className="flex flex-col gap-3">
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-cursor-hover
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-cursor-hover
                >
                  Behance
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-cursor-hover
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-cursor-hover
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-cursor-hover
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Code Illustrated Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
