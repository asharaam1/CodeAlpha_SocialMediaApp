import { 
  FiZap, 
  FiShield, 
  FiMessageCircle, 
  FiSmartphone, 
  FiStar,
  FiTrendingUp
} from 'react-icons/fi'

export default function FeaturesSection() {
  const features = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Built with Next.js 16 for instant page loads and smooth interactions.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with Clerk authentication and end-to-end encryption.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FiMessageCircle className="w-8 h-8" />,
      title: 'Real-time Chat',
      description: 'Instant messaging with Socket.io for seamless communication.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: 'Mobile First',
      description: 'Optimized for mobile with Instagram-style navigation.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: 'Beautiful UI',
      description: 'Modern, responsive design that works perfectly on all devices.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Smart Feed',
      description: 'AI-powered feed that shows you what matters most.',
      color: 'from-blue-500 to-blue-600'
    }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose <span className="text-blue-500">ByteBond</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Packed with features designed to enhance your social experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}