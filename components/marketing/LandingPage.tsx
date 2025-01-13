import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, TrendingUp, DollarSign, Sparkles, Target, Zap } from 'lucide-react'

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-purple-50 to-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">MyMerch.ai</h1>
          <Link href="/dashboard">
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
        </div>
      </header>

      {/* How it helps you */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How it helps you</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Save Time</h3>
              <p className="text-gray-600">AI generates merch ideas based on your game's style and audience preferences.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Stay Ahead of Trends</h3>
              <p className="text-gray-600">Our system monitors social media to suggest timely, on-brand products (imagine the right merch for a viral moment in your game!).</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Boost Revenue</h3>
              <p className="text-gray-600">Approved designs go straight to production and can be sold on custom marketplaces with built-in revenue-sharing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What It Does</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">AI-Powered Design</h3>
              </div>
              <p className="text-gray-600">Upload your game assets, and we turn them into merch-ready designs instantly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Trend Monitoring</h3>
              </div>
              <p className="text-gray-600">Get product suggestions based on what's hot right now.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Easy Approvals</h3>
              </div>
              <p className="text-gray-600">Swipe left or right to approve or tweak ideas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <ArrowRight className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Seamless Integration</h3>
              </div>
              <p className="text-gray-600">Connect directly to print-on-demand services or our marketplace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why It Works</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Tailored for Developers</h3>
              <p className="text-gray-600">Built for creators like you, who know your audience but don't have time for merch logistics.</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Automated & Intuitive</h3>
              <p className="text-gray-600">No hassle, just results.</p>
            </div>
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