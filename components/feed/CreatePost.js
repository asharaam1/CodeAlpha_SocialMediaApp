'use client'

import { useState } from 'react'
import { 
  FiImage, 
  FiVideo, 
  FiSmile, 
  FiMapPin,
  FiX
} from 'react-icons/fi'

export default function CreatePost() {
  const [postContent, setPostContent] = useState('')
  const [selectedImages, setSelectedImages] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (postContent.trim() || selectedImages.length > 0) {
      console.log('Post created:', { content: postContent, images: selectedImages })
      setPostContent('')
      setSelectedImages([])
      setIsExpanded(false)
    }
  }

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files)
    // In real app, you would upload these to Cloudinary
    setSelectedImages([...selectedImages, ...files.slice(0, 4)])
  }

  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-start space-x-4">
        {/* User Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
        
        {/* Post Input Area */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              placeholder="What's on your mind?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={isExpanded ? 4 : 2}
            />

            {/* Selected Images Preview */}
            {selectedImages.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {selectedImages.map((file, index) => (
                  <div key={index} className="relative">
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Image {index + 1}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <label className="cursor-pointer p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-blue-50">
                  <FiImage className="w-5 h-5" />
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </label>
                <button type="button" className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-blue-50">
                  <FiVideo className="w-5 h-5" />
                </button>
                <button type="button" className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-blue-50">
                  <FiSmile className="w-5 h-5" />
                </button>
                <button type="button" className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-blue-50">
                  <FiMapPin className="w-5 h-5" />
                </button>
              </div>

              <button
                type="submit"
                disabled={!postContent.trim() && selectedImages.length === 0}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  postContent.trim() || selectedImages.length > 0
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}