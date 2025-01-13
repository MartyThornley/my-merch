import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-purple-50 to-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">MyMerch.ai</h1>
          <Link href="/app">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Enter App <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Turn Your Content Into
            <span className="text-purple-600"> Merchandise</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered merchandise creation platform for content creators
          </p>
          <Link href="/app">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* How it helps you */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How it helps you</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Section 1</h3>
              <p className="text-gray-600">Content to be added later</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Section 2</h3>
              <p className="text-gray-600">Content to be added later</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Section 3</h3>
              <p className="text-gray-600">Content to be added later</p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What It Does</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-center">Content to be added later</p>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why It Works</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-center">Content to be added later</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 MyMerch.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}