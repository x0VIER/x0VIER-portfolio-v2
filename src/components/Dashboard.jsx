import { Link } from 'react-router-dom'
import { Home as HomeIcon, TrendingUp, Shield, Newspaper } from 'lucide-react'
import CryptoTracker from './CryptoTracker'
import CyberNews from './CyberNews'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="text-[#a78bfa] hover:text-white transition-colors font-mono text-sm mb-8 inline-flex items-center gap-2">
          <HomeIcon className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mt-8">
          <h1 className="text-5xl font-bold text-white font-mono mb-4">IT Dashboard</h1>
          <p className="text-[#808080] font-mono mb-12">Live crypto prices, cybersecurity news, and IT trends</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Crypto Tracker */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-[#a78bfa]" />
                <h2 className="text-2xl font-bold text-white font-mono">Crypto Tracker</h2>
              </div>
              <CryptoTracker />
              <div className="mt-4 text-xs text-[#606060] font-mono text-center">
                Powered by CoinGecko API • Updates every minute
              </div>
            </div>

            {/* Cybersecurity News */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-[#a78bfa]" />
                <h2 className="text-2xl font-bold text-white font-mono">Security News</h2>
              </div>
              <CyberNews />
              <div className="mt-4 text-xs text-[#606060] font-mono text-center">
                Latest cybersecurity threats and vulnerabilities
              </div>
            </div>
          </div>

          {/* IT Trends Section */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="h-6 w-6 text-[#a78bfa]" />
              <h2 className="text-2xl font-bold text-white font-mono">Trending in IT</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
                <div className="text-3xl font-bold text-[#a78bfa] font-mono mb-2">AI/ML</div>
                <div className="text-sm text-[#808080] font-mono">
                  Artificial Intelligence and Machine Learning continue to dominate IT infrastructure
                </div>
              </div>
              <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
                <div className="text-3xl font-bold text-[#a78bfa] font-mono mb-2">Cloud</div>
                <div className="text-sm text-[#808080] font-mono">
                  Multi-cloud and hybrid cloud strategies are becoming the standard
                </div>
              </div>
              <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
                <div className="text-3xl font-bold text-[#a78bfa] font-mono mb-2">Zero Trust</div>
                <div className="text-sm text-[#808080] font-mono">
                  Zero Trust security architecture is rapidly being adopted across enterprises
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
