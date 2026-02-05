'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import FeedSidebar from '@/components/feed/FeedSidebar'
import PostCard from '@/components/feed/PostCard'
import CreatePost from '@/components/feed/CreatePost'
import StoriesCarousel from '@/components/feed/StoriesCarousel'
import { FiFilter, FiGrid, FiList, FiMenu } from 'react-icons/fi'

export default function FeedPage() {
  const { isLoaded, user, isSignedIn } = useUser()
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('list') // Default to list for mobile
  const [activeFilter, setActiveFilter] = useState('following')
  const [showSidebar, setShowSidebar] = useState(false) // For mobile sidebar toggle

  // Mock posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        id: 'user1',
        name: 'Alex Johnson',
        username: '@alexj',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        isVerified: true
      },
      content: 'Just launched my new photography project! Check out the stunning landscapes from my trip to Iceland. 📸✨ #photography #travel #nature',
      images: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w-800&auto=format&fit=crop'
      ],
      likes: 245,
      comments: 42,
      shares: 18,
      timestamp: '2 hours ago',
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 2,
      user: {
        id: 'user2',
        name: 'Sarah Miller',
        username: '@sarahm',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        isVerified: false
      },
      content: 'Working on some exciting UI/UX designs for our new app. The dark mode toggle is my favorite feature! 🎨 #design #uiux #darkmode',
      images: [], // No images for this post
      likes: 189,
      comments: 31,
      shares: 7,
      timestamp: '4 hours ago',
      isLiked: true,
      isBookmarked: true
    },
    {
      id: 3,
      user: {
        id: 'user3',
        name: 'David Chen',
        username: '@davidc',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        isVerified: true
      },
      content: 'Morning coding session with a fresh cup of coffee. Building something special with Next.js 15! ☕️ #coding #webdev #nextjs',
      images: [
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&auto=format&fit=crop'
      ],
      likes: 312,
      comments: 56,
      shares: 24,
      timestamp: '6 hours ago',
      isLiked: false,
      isBookmarked: false
    },
  ])

  useEffect(() => {
    if (isLoaded) {
      setLoading(false)
    }
  }, [isLoaded])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your feed...</p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🔒</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign in to view your feed</h2>
          <p className="text-gray-600 mb-8">
            Connect with friends and see what's happening in your ByteBond community.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Sign In to ByteBond
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <FiMenu className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">ByteBond</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>

      <div className="container mx-auto px-4 py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Left Sidebar - Hidden on mobile, shown on desktop */}
          <div className={`lg:w-1/4 ${showSidebar ? 'block' : 'hidden lg:block'}`}>
            <FeedSidebar onClose={() => setShowSidebar(false)} />
          </div>

          {/* Main Feed Content - Full width on mobile, 50% on desktop */}
          <div className="lg:w-2/4">
            {/* Welcome Header - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Welcome back, <span className="text-blue-500">{user.firstName || user.username}!</span>
                  </h1>
                  <p className="text-gray-600">Here's what's happening in your network</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    {posts.length} new posts
                  </span>
                </div>
              </div>

              {/* Stories Carousel */}
              <StoriesCarousel />
            </div>

            {/* Create Post */}
            <div className="mb-6">
              <CreatePost />
            </div>

            {/* Feed Controls */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                  <button
                    onClick={() => setActiveFilter('following')}
                    className={`px-4 py-2 rounded-lg transition text-sm ${
                      activeFilter === 'following'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Following
                  </button>
                  <button
                    onClick={() => setActiveFilter('trending')}
                    className={`px-4 py-2 rounded-lg transition text-sm ${
                      activeFilter === 'trending'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Trending
                  </button>
                  <button
                    onClick={() => setActiveFilter('latest')}
                    className={`px-4 py-2 rounded-lg transition text-sm ${
                      activeFilter === 'latest'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Latest
                  </button>
                </div>

                {/* View Toggle - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:flex items-center space-x-2">
                  <span className="text-gray-600 text-sm">View:</span>
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition ${
                        viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'
                      }`}
                    >
                      <FiGrid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition ${
                        viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'
                      }`}
                    >
                      <FiList className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts - Always single column on mobile */}
           <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : 'space-y-6'}`}>
              {posts.map((post) => (
                <PostCard 
                  key={post.id} 
                  post={post}
                  onLike={(postId) => {
                    setPosts(posts.map(p => 
                      p.id === postId 
                        ? { ...p, likes: p.isLiked ? p.likes - 1 : p.likes + 1, isLiked: !p.isLiked }
                        : p
                    ))
                  }}
                  onBookmark={(postId) => {
                    setPosts(posts.map(p => 
                      p.id === postId 
                        ? { ...p, isBookmarked: !p.isBookmarked }
                        : p
                    ))
                  }}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Load More Posts
              </button>
            </div>
          </div>

          {/* Right Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-24 space-y-6">
              {/* Trending Topics */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Topics</h3>
                <div className="space-y-3">
                  {['#WebDevelopment', '#UIUX', '#Photography', '#Fitness', '#Travel'].map((topic, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition group"
                    >
                      <span className="text-blue-500 font-medium group-hover:text-blue-600">
                        {topic}
                      </span>
                      <span className="text-gray-500 text-sm">2.5k posts</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Who to Follow */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Who to Follow</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
                        <div>
                          <div className="font-medium">New User {i}</div>
                          <div className="text-gray-500 text-sm">@newuser{i}</div>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}