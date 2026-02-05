'use client'

import { useState } from 'react'

export default function StoriesCarousel() {
  const [stories] = useState([
    { id: 1, user: 'You', type: 'add', color: 'from-blue-400 to-blue-500' },
    { id: 2, user: 'Alex', color: 'from-purple-400 to-pink-500' },
    { id: 3, user: 'Sarah', color: 'from-green-400 to-teal-500' },
    { id: 4, user: 'David', color: 'from-orange-400 to-red-500' },
    { id: 5, user: 'Maria', color: 'from-indigo-400 to-purple-500' },
    { id: 6, user: 'John', color: 'from-yellow-400 to-orange-500' },
  ])

  return (
    <div className="py-4">
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 w-20 text-center">
            <div className={`w-16 h-16 rounded-full mx-auto p-0.5 ${
              story.type === 'add' 
                ? 'border-2 border-dashed border-gray-300'
                : `bg-gradient-to-r ${story.color}`
            }`}>
              <div className={`w-full h-full rounded-full flex items-center justify-center ${
                story.type === 'add' ? 'bg-gray-100' : 'bg-white'
              }`}>
                {story.type === 'add' ? (
                  <span className="text-2xl text-gray-400">+</span>
                ) : (
                  <span className="text-lg font-bold text-gray-800">
                    {story.user.charAt(0)}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600 truncate">
              {story.type === 'add' ? 'Add Story' : story.user}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}