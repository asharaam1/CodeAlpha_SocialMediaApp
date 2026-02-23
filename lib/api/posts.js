import api from '../api'

// Post API service
export const postService = {
  // Get feed posts
  async getFeed(feedType = 'following', page = 1, limit = 10) {
    try {
      const response = await api.get(`/posts/feed`, {
        params: { type: feedType, page, limit }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching feed:', error)
      throw error
    }
  },

  // Get single post
  async getPost(postId) {
    try {
      const response = await api.get(`/posts/${postId}`)
      return response.data
    } catch (error) {
      console.error('Error fetching post:', error)
      throw error
    }
  },

  // Create new post
  async createPost(postData) {
    try {
      const formData = new FormData()
      
      // Add text content
      if (postData.content) {
        formData.append('content', postData.content)
      }
      
      // Add images
      if (postData.images && postData.images.length > 0) {
        postData.images.forEach((image, index) => {
          formData.append(`images`, image)
        })
      }
      
      // Add privacy setting
      if (postData.privacy) {
        formData.append('privacy', postData.privacy)
      }
      
      // Add hashtags
      if (postData.hashtags && postData.hashtags.length > 0) {
        formData.append('hashtags', JSON.stringify(postData.hashtags))
      }
      
      const response = await api.post('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    } catch (error) {
      console.error('Error creating post:', error)
      throw error
    }
  },

  // Like/unlike post
  async likePost(postId) {
    try {
      const response = await api.post(`/posts/${postId}/like`)
      return response.data
    } catch (error) {
      console.error('Error liking post:', error)
      throw error
    }
  },

  // Bookmark post
  async bookmarkPost(postId) {
    try {
      const response = await api.post(`/posts/${postId}/bookmark`)
      return response.data
    } catch (error) {
      console.error('Error bookmarking post:', error)
      throw error
    }
  },

  // Add comment
  async addComment(postId, commentData) {
    try {
      const response = await api.post(`/posts/${postId}/comments`, commentData)
      return response.data
    } catch (error) {
      console.error('Error adding comment:', error)
      throw error
    }
  },

  // Get post comments
  async getComments(postId, page = 1, limit = 20) {
    try {
      const response = await api.get(`/posts/${postId}/comments`, {
        params: { page, limit }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching comments:', error)
      throw error
    }
  },

  // Delete post
  async deletePost(postId) {
    try {
      const response = await api.delete(`/posts/${postId}`)
      return response.data
    } catch (error) {
      console.error('Error deleting post:', error)
      throw error
    }
  }
}