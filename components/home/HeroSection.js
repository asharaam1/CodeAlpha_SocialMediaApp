"use client";

import {
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { FiGlobe, FiMessageSquare, FiUsers } from "react-icons/fi";

export default function HeroSection() {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Where{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                connections
              </span>{" "}
              become{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                bonds
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Welcome to{" "}
              <span className="font-semibold text-blue-500">ByteBond</span> -
              where meaningful connections are made. Share your story, discover
              amazing content, and build lasting relationships in a space
              designed for real conversations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition text-center text-lg shadow-lg">
                    Join ByteBond
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="px-8 py-3 bg-white text-gray-800 border-2 border-gray-300 font-semibold rounded-xl hover:border-blue-500 transition text-center text-lg">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/feed"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition text-center text-lg shadow-lg"
                  >
                    Go to Feed
                  </Link>
                  <Link
                    href="/explore"
                    className="px-8 py-3 bg-white text-gray-800 border-2 border-gray-300 font-semibold rounded-xl hover:border-blue-500 transition text-center text-lg"
                  >
                    Explore Content
                  </Link>
                </div>
              </SignedIn>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                  <FiUsers className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600 text-sm">Active Users</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                  <FiMessageSquare className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600 text-sm">Daily Posts</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                  <FiGlobe className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600 text-sm">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Image/Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Phone Mockup */}
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[40px] p-6 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-10" />

                {/* Screen Content */}
                <div className="bg-gray-900 rounded-3xl overflow-hidden">
                  {/* Stories */}
                  <div className="p-4">
                    <div className="flex space-x-4 overflow-x-auto pb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                            <div className="w-full h-full rounded-full bg-gray-900" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Posts */}
                  <div className="space-y-4 p-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-gray-800 rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                          <div>
                            <div className="h-3 w-24 bg-gray-700 rounded" />
                            <div className="h-2 w-16 bg-gray-700 rounded mt-1" />
                          </div>
                        </div>
                        <div className="h-48 bg-gray-700 rounded-xl mb-3" />
                        <div className="flex justify-between">
                          <div className="flex space-x-4">
                            <div className="h-6 w-6 bg-gray-700 rounded" />
                            <div className="h-6 w-6 bg-gray-700 rounded" />
                            <div className="h-6 w-6 bg-gray-700 rounded" />
                          </div>
                          <div className="h-6 w-6 bg-gray-700 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
