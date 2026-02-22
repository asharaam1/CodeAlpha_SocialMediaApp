import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Join ByteBond
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Create your account to start connecting
        </p>
        
        <SignUp 
          fallbackRedirectUrl="/feed"
          forceRedirectUrl="/feed"
        />
        
        <p className="text-xs text-gray-500 text-center mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}