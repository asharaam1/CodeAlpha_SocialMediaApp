'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/nextjs'
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone
} from 'react-icons/fi'

export default function Footer() {
  const pathname = usePathname()
  
  // Don't show footer on auth pages
  const isAuthPage = pathname.includes('sign-in') || pathname.includes('sign-up')
  if (isAuthPage) return null

  return (
    <SignedOut>
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  ByteBond
                </h2>
              </Link>
              <p className="text-gray-400 text-sm">
                Connect with friends, share your moments, and discover amazing content from around the world.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://www.facebook.com/lohanaasharaam1/" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/_ar_official__/" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/asharaam1/" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-400 hover:text-blue-400 transition text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/features" 
                    className="text-gray-400 hover:text-blue-400 transition text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                    Features
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-gray-400 hover:text-blue-400 transition text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-gray-400 hover:text-blue-400 transition text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/help" 
                    className="text-gray-400 hover:text-blue-400 transition text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Features</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Stories & Reels
                </li>
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Real-time Messaging
                </li>
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Group Chats
                </li>
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Photo & Video Sharing
                </li>
                <li className="text-gray-400 text-sm flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Live Streaming
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and features.
              </p>
              
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                  <FiMail className="absolute right-3 top-3.5 text-gray-500 w-5 h-5" />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-gray-400 text-sm">
                  <FiMapPin className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Karachi, Sindh, Pakistan</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <FiPhone className="w-4 h-4 mr-2 text-blue-400" />
                  <span>+92 300 0000000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} ByteBond. All rights reserved.</p>
              </div>

              {/* Additional Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition">
                  Cookie Policy
                </Link>
                <Link href="/community" className="text-gray-400 hover:text-blue-400 transition">
                  Community Guidelines
                </Link>
                <Link href="/careers" className="text-gray-400 hover:text-blue-400 transition">
                  Careers
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </div>

              {/* App Store Badges - Mobile Only */}
              <div className="flex space-x-3 mt-4 md:hidden">
                <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition">
                  App Store
                </button>
                <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition">
                  Google Play
                </button>
              </div>
            </div>

            {/* App Store Badges - Desktop Only */}
            <div className="hidden md:flex justify-center space-x-4 mt-6">
              <button className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center">
                <span className="text-2xl mr-2">📱</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
              <button className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center">
                <span className="text-2xl mr-2">🤖</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Mobile App Notice */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                Available on iOS and Android. Join millions of users worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SignedOut>
  )
}