"use client";

import {
  UserButton,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiHome,
  FiSearch,
  FiPlusCircle,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
  FiMessageCircle,
} from "react-icons/fi";

export default function Navbar() {
  const { isLoaded, user } = useUser();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);

  // Navigation items for mobile bottom bar
  const navItems = [
    {
      name: "Home",
      href: "/feed",
      icon: (
        <FiHome
          className={`w-6 h-6 ${pathname === "/feed" ? "text-blue-500" : "text-gray-600"}`}
        />
      ),
      show: "signedIn",
    },
    {
      name: "Search",
      href: "/explore",
      icon: (
        <FiSearch
          className={`w-6 h-6 ${pathname === "/explore" ? "text-blue-500" : "text-gray-600"}`}
        />
      ),
      show: "signedIn",
    },
    {
      name: "Create",
      href: "#",
      icon: <FiPlusCircle className="w-7 h-7 text-gray-600" />,
      show: "signedIn",
      action: () => setShowCreateMenu(!showCreateMenu),
    },
    {
      name: "Notifications",
      href: "/notifications",
      icon: (
        <FiHeart
          className={`w-6 h-6 ${pathname === "/notifications" ? "text-red-500" : "text-gray-600"}`}
        />
      ),
      show: "signedIn",
    },
    {
      name: "Profile",
      href: "/profile",
      icon: (
        <FiUser
          className={`w-6 h-6 ${pathname === "/profile" ? "text-blue-500" : "text-gray-600"}`}
        />
      ),
      show: "signedIn",
    },
  ];

  return (
    <>
      {/* Desktop & Tablet Navbar (Top) */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"
            >
              <Image
                src="/byteBond.png"
                alt="ByteBond Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <SignedIn>
              <div className="flex items-center space-x-8">
                <Link
                  href="/feed"
                  className={`flex items-center space-x-2 ${pathname === "/feed" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}`}
                >
                  <FiHome className="w-5 h-5" />
                  <span className="font-medium">Feed</span>
                </Link>
                <Link
                  href="/explore"
                  className={`flex items-center space-x-2 ${pathname === "/explore" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}`}
                >
                  <FiSearch className="w-5 h-5" />
                  <span className="font-medium">Explore</span>
                </Link>
                <Link
                  href="/profile"
                  className={`flex items-center space-x-2 ${pathname === "/explore" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}`}
                >
                  <FiUser className="w-5 h-5" />
                  <span className="font-medium">Profile</span>
                </Link>

                {/* Create Post Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowCreateMenu(!showCreateMenu)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                  >
                    <FiPlusCircle className="w-5 h-5" />
                    <span className="font-medium">Create</span>
                  </button>

                  {/* Create Menu Dropdown */}
                  {showCreateMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      <Link
                        href="/create/post"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowCreateMenu(false)}
                      >
                        📝 Create Post
                      </Link>
                      <Link
                        href="/create/story"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowCreateMenu(false)}
                      >
                        🎬 Create Story
                      </Link>
                      <Link
                        href="/create/reel"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowCreateMenu(false)}
                      >
                        🎥 Create Reel
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SignedIn>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <SignedOut>
                {/* Sign In Button with Clerk */}
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition cursor-pointer">
                    Sign In
                  </button>
                </SignInButton>

                {/* Sign Up Button with Clerk */}
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center space-x-4">
                  {/* Notifications */}
                  <Link href="/notifications" className="relative">
                    <FiHeart
                      className={`w-6 h-6 ${pathname === "/notifications" ? "text-red-500" : "text-gray-600"}`}
                    />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </Link>

                  {/* Messages */}
                  <Link href="/messages" className="relative">
                    <FiMessageCircle
                      className={`w-6 h-6 ${pathname === "/messages" ? "text-blue-500" : "text-gray-600"}`}
                    />
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      5
                    </span>
                  </Link>

                  {/* User Menu */}
                  <div className="relative">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Hamburger Menu) */}
      <SignedOut>
        <nav className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/byteBond.png"
                  alt="ByteBond Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </Link>
              {/* Hamburger Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </SignedOut>
      {/* Mobile Bottom Navigation */}
      <SignedIn>
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
          <div className="flex justify-around items-center h-16">
            {navItems.map((item) =>
              item.action ? (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="flex flex-col items-center justify-center p-2"
                >
                  <div className="text-2xl">{item.icon}</div>
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center justify-center p-2 ${pathname === item.href ? "text-blue-500" : "text-gray-600"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="text-2xl">{item.icon}</div>
                </Link>
              ),
            )}
          </div>
        </nav>
      </SignedIn>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-200">
          <div className="flex flex-col p-4 space-y-4">
            {/* Signed In Links */}
            <SignedIn>
              <Link
                href="/feed"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700"
              >
                Feed
              </Link>
              <Link
                href="/explore"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700"
              >
                Explore
              </Link>
              <Link
                href="/profile"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700"
              >
                Profile
              </Link>
            </SignedIn>

            {/* Signed Out Buttons */}
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-lg"
                >
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      )}

      {/* Create Post Modal for Mobile */}
      {showCreateMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Create New</h3>
              <button
                onClick={() => setShowCreateMenu(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <Link
                href="/create/post"
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 border border-gray-200"
                onClick={() => setShowCreateMenu(false)}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <h4 className="font-semibold">Post</h4>
                  <p className="text-sm text-gray-600">
                    Share a photo or video
                  </p>
                </div>
              </Link>
              <Link
                href="/create/story"
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 border border-gray-200"
                onClick={() => setShowCreateMenu(false)}
              >
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <div>
                  <h4 className="font-semibold">Story</h4>
                  <p className="text-sm text-gray-600">
                    Share a moment that disappears
                  </p>
                </div>
              </Link>
              <Link
                href="/create/reel"
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 border border-gray-200"
                onClick={() => setShowCreateMenu(false)}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎥</span>
                </div>
                <div>
                  <h4 className="font-semibold">Reel</h4>
                  <p className="text-sm text-gray-600">Create a short video</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
