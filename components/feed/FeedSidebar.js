'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FiHome,
  FiCompass,
  FiUsers,
  FiBookmark,
  FiBell,
  FiMessageCircle,
  FiSettings,
  FiHelpCircle,
  FiX
} from 'react-icons/fi'

export default function FeedSidebar({ onClose }) {
  const [activeItem, setActiveItem] = useState('feed')

  const menuItems = [
    { id: 'feed', label: 'My Feed', icon: <FiHome className="w-5 h-5" />, href: '/feed' },
    { id: 'explore', label: 'Explore', icon: <FiCompass className="w-5 h-5" />, href: '/explore' },
    { id: 'communities', label: 'Communities', icon: <FiUsers className="w-5 h-5" />, href: '/communities' },
    { id: 'bookmarks', label: 'Bookmarks', icon: <FiBookmark className="w-5 h-5" />, href: '/bookmarks' },
    { id: 'notifications', label: 'Notifications', icon: <FiBell className="w-5 h-5" />, href: '/notifications', badge: 3 },
    { id: 'messages', label: 'Messages', icon: <FiMessageCircle className="w-5 h-5" />, href: '/messages', badge: 5 },
  ]

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: <FiSettings className="w-5 h-5" />, href: '/settings' },
    { id: 'help', label: 'Help & Support', icon: <FiHelpCircle className="w-5 h-5" />, href: '/help' },
  ]

  return (
    <div className="bg-white rounded-xl lg:rounded-xl p-6 shadow-sm border border-gray-200 lg:sticky lg:top-24">
      {/* Mobile Close Button */}
      {onClose && (
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiX className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      )}

      {/* Profile Summary */}
      <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-200">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
        <div>
          <div className="font-bold text-gray-900">Your Profile</div>
          <div className="text-gray-500 text-sm">@yourusername</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="space-y-1 mb-8">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => {
              setActiveItem(item.id)
              if (onClose) onClose()
            }}
            className={`flex items-center justify-between p-3 rounded-lg transition ${
              activeItem === item.id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`${activeItem === item.id ? 'text-blue-500' : 'text-gray-500'}`}>
                {item.icon}
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge && (
              <span className={`px-2 py-1 text-xs rounded-full ${
                activeItem === item.id ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'
              }`}>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Bottom Menu */}
      <div className="space-y-1 pt-6 border-t border-gray-200">
        {bottomItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => onClose && onClose()}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <div className="text-gray-500">{item.icon}</div>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">245</div>
            <div className="text-gray-500 text-sm">Following</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">189</div>
            <div className="text-gray-500 text-sm">Followers</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">42</div>
            <div className="text-gray-500 text-sm">Posts</div>
          </div>
        </div>
      </div>
    </div>
  )
}