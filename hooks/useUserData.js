import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { userService } from '@/lib/api/users'

export function useUserData() {
  const { isLoaded, isSignedIn, user: clerkUser } = useUser()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUserData() {
      if (!isLoaded) return
      
      if (!isSignedIn) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        // Clerk ID se MongoDB se user data fetch karo
        const data = await userService.getUserByClerkId(clerkUser.id)
        setUserData(data)
        console.log('✅ User data fetched:', data)
      } catch (err) {
        console.error('❌ Error fetching user data:', err)
        setError(err)
        
        // Agar user DB mein nahi hai (webhook delay), toh wait karo
        setTimeout(fetchUserData, 2000) // 2 sec baad retry
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [isLoaded, isSignedIn, clerkUser])

  return { userData, loading, error }
}