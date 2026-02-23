import api from '../api'

export const userService = {
  // Get user profile by ID
  async getProfile(userId) {
    try {
      const response = await api.get(`/users/${userId}`)
      return response.data
    } catch (error) {
      console.error('Error fetching profile:', error)
      throw error
    }
  },

  // Get user by Clerk ID
  async getUserByClerkId(clerkId) {
    try {
      const response = await api.get(`/users/clerk/${clerkId}`)
      return response.data
    } catch (error) {
      console.error('Error fetching user by clerk ID:', error)
      throw error
    }
  },

  // Update user profile
  async updateProfile(userId, userData) {
    try {
      const response = await api.put(`/users/${userId}`, userData)
      return response.data
    } catch (error) {
      console.error('Error updating profile:', error)
      throw error
    }
  },

  // Follow user
  async followUser(userId, followerId) {
    try {
      const response = await api.post(`/users/${userId}/follow`, { followerId })
      return response.data
    } catch (error) {
      console.error('Error following user:', error)
      throw error
    }
  },

  // Unfollow user
  async unfollowUser(userId, followerId) {
    try {
      const response = await api.post(`/users/${userId}/unfollow`, { followerId })
      return response.data
    } catch (error) {
      console.error('Error unfollowing user:', error)
      throw error
    }
  },

  // Get user's followers
  async getFollowers(userId) {
    try {
      const response = await api.get(`/users/${userId}/followers`)
      return response.data
    } catch (error) {
      console.error('Error fetching followers:', error)
      throw error
    }
  },

  // Get user's following
  async getFollowing(userId) {
    try {
      const response = await api.get(`/users/${userId}/following`)
      return response.data
    } catch (error) {
      console.error('Error fetching following:', error)
      throw error
    }
  },

  // Search users
  async searchUsers(query) {
    try {
      const response = await api.get(`/users/search/${query}`)
      return response.data
    } catch (error) {
      console.error('Error searching users:', error)
      throw error
    }
  }
}