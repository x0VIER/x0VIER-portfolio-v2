import { useState, useEffect } from 'react'
import { Shield, ExternalLink, Clock } from 'lucide-react'
import axios from 'axios'

export default function CyberNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Using a CORS proxy to fetch RSS feeds
        const feeds = [
          'https://feeds.feedburner.com/TheHackersNews',
          'https://www.bleepingcomputer.com/feed/',
          'https://krebsonsecurity.com/feed/'
        ]

        // For demo, we'll use mock data since RSS requires backend
        const mockNews = [
          {
            title: "Critical Zero-Day Vulnerability Discovered in Windows Defender",
            source: "The Hacker News",
            date: "2 hours ago",
            excerpt: "Security researchers have uncovered a critical zero-day vulnerability affecting Windows Defender that could allow attackers to bypass security measures...",
            url: "#"
          },
          {
            title: "Major Ransomware Attack Targets Healthcare Sector",
            source: "Bleeping Computer",
            date: "5 hours ago",
            excerpt: "A sophisticated ransomware campaign has been detected targeting healthcare organizations across North America, encrypting critical patient data...",
            url: "#"
          },
          {
            title: "New Phishing Campaign Exploits Microsoft Teams",
            source: "Krebs on Security",
            date: "8 hours ago",
            excerpt: "Cybercriminals are leveraging Microsoft Teams to deliver malicious payloads, bypassing traditional email security filters...",
            url: "#"
          },
          {
            title: "Supply Chain Attack Compromises Popular NPM Package",
            source: "The Hacker News",
            date: "12 hours ago",
            excerpt: "A widely-used NPM package has been compromised in a supply chain attack, potentially affecting thousands of web applications...",
            url: "#"
          },
          {
            title: "Critical Patch Released for Apache Log4j Vulnerability",
            source: "Bleeping Computer",
            date: "1 day ago",
            excerpt: "Apache has released an emergency patch for a critical vulnerability in Log4j that could lead to remote code execution...",
            url: "#"
          }
        ]

        setNews(mockNews)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return (
      <div className="text-center text-[#808080] font-mono">Loading security news...</div>
    )
  }

  return (
    <div className="space-y-4">
      {news.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-[#1a1a1a] p-4 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all group"
        >
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-[#a78bfa] flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-white font-mono font-bold mb-2 group-hover:text-[#a78bfa] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#808080] mb-2 line-clamp-2">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#606060] font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.date}
                </span>
                <span>{item.source}</span>
                <ExternalLink className="h-3 w-3 ml-auto group-hover:text-[#a78bfa] transition-colors" />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
