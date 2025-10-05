import { useState, useEffect } from 'react'
import { ExternalLink, Clock, Shield } from 'lucide-react'

export default function LiveCyberNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch real cybersecurity news from multiple sources
    fetchCyberNews()
    
    // Update every 5 minutes
    const interval = setInterval(fetchCyberNews, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const fetchCyberNews = async () => {
    try {
      // Fetch from multiple cybersecurity RSS feeds via RSS to JSON services
      const sources = [
        'https://feeds.feedburner.com/TheHackersNews',
        'https://www.bleepingcomputer.com/feed/',
        'https://threatpost.com/feed/',
      ]

      // For demo, we'll use a free RSS to JSON API
      const rssToJsonApi = 'https://api.rss2json.com/v1/api.json?rss_url='
      
      const articles = []
      
      // Fetch from The Hacker News
      try {
        const response = await fetch(rssToJsonApi + encodeURIComponent(sources[0]))
        const data = await response.json()
        if (data.status === 'ok' && data.items) {
          articles.push(...data.items.slice(0, 5).map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            source: 'The Hacker News',
            description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
          })))
        }
      } catch (err) {
        console.error('Error fetching news:', err)
      }

      setNews(articles.slice(0, 10))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching cyber news:', error)
      setLoading(false)
    }
  }

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now - date) / 1000)
    
    if (seconds < 60) return 'Just now'
    if (seconds < 3600) return Math.floor(seconds / 60) + ' minutes ago'
    if (seconds < 86400) return Math.floor(seconds / 3600) + ' hours ago'
    return Math.floor(seconds / 86400) + ' days ago'
  }

  if (loading) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#a78bfa'
      }}>
        <Shield size={48} style={{ marginBottom: '1rem' }} />
        <p>Loading live cybersecurity news...</p>
      </div>
    )
  }

  return (
    <div style={{
      padding: '2rem 0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        <Shield size={24} color="#a78bfa" />
        <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Live Cybersecurity News</h2>
      </div>
      
      <p style={{ 
        color: '#999', 
        marginBottom: '2rem',
        fontSize: '0.9rem'
      }}>
        Latest security threats and vulnerabilities from around the world • Updates every 5 minutes
      </p>

      <div style={{
        display: 'grid',
        gap: '1rem'
      }}>
        {news.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '1.5rem',
              border: '1px solid #333',
              borderRadius: '8px',
              backgroundColor: '#0f0f0f',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#a78bfa'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#333'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '0.75rem'
            }}>
              <h3 style={{
                margin: 0,
                fontSize: '1.1rem',
                color: '#fff',
                flex: 1
              }}>
                {article.title}
              </h3>
              <ExternalLink size={16} color="#a78bfa" style={{ marginLeft: '1rem', flexShrink: 0 }} />
            </div>

            <p style={{
              margin: '0.5rem 0',
              color: '#999',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
              {article.description}
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '0.75rem',
              fontSize: '0.85rem',
              color: '#666'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={14} />
                {getTimeAgo(article.pubDate)}
              </span>
              <span style={{ color: '#a78bfa' }}>
                {article.source}
              </span>
            </div>
          </a>
        ))}
      </div>

      {news.length === 0 && !loading && (
        <p style={{ textAlign: 'center', color: '#666' }}>
          No news available at the moment. Check back soon!
        </p>
      )}
    </div>
  )
}
