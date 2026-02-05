'use client'

import { useState } from 'react'
import { 
  FiHeart, 
  FiMessageCircle, 
  FiShare2, 
  FiBookmark,
  FiMoreHorizontal,
  FiSend,
  FiImage
} from 'react-icons/fi'

export default function PostCard({ post, onLike, onBookmark }) {
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      console.log('Comment submitted:', comment)
      setComment('')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Post Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white font-bold">
              {post.user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-gray-900">{post.user.name}</span>
                {post.user.isVerified && (
                  <span className="text-blue-500 text-sm">✓</span>
                )}
              </div>
              <div className="text-gray-500 text-sm">{post.user.username} • {post.timestamp}</div>
            </div>
          </div>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <FiMoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-4">
        <p className="text-gray-800 mb-4">{post.content}</p>
        
        {/* Images Grid - Only show if there are images */}
        {post.images.length > 0 && (
          <div className={`mb-4 rounded-xl overflow-hidden ${
            post.images.length === 1 ? 'h-64' : 'h-48'
          }`}>
            <div className={`w-full h-full bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center`}>
              <div className="text-center">
                <FiImage className="w-12 h-12 text-blue-300 mx-auto mb-2" />
                <span className="text-blue-400 font-medium">
                  {post.images.length} image{post.images.length > 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Post Stats */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onLike(post.id)}
              className="flex items-center space-x-1 hover:text-blue-500 transition"
            >
              <FiHeart className={`w-5 h-5 transition ${post.isLiked ? 'fill-current text-red-500' : ''}`} />
              <span>{post.likes}</span>
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-1 hover:text-blue-500 transition"
            >
              <FiMessageCircle className="w-5 h-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500 transition">
              <FiShare2 className="w-5 h-5" />
              <span>{post.shares}</span>
            </button>
          </div>
          <button 
            onClick={() => onBookmark(post.id)}
            className="hover:text-blue-500 transition"
          >
            <FiBookmark className={`w-5 h-5 transition ${post.isBookmarked ? 'fill-current text-blue-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 pb-4 border-t border-gray-200 pt-4">
          <form onSubmit={handleSubmitComment} className="flex items-center space-x-2 mb-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button 
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              <FiSend className="w-5 h-5" />
            </button>
          </form>
          
          {/* Sample Comments */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                U
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">User Comment</div>
                <p className="text-gray-600 text-sm">Great post! Thanks for sharing.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}