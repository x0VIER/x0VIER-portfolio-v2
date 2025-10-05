import { useState } from 'react'
import { Wand2, RefreshCw, Check } from 'lucide-react'
import axios from 'axios'

export default function AutoBlogWriter() {
  const [generating, setGenerating] = useState(false)
  const [generatedPost, setGeneratedPost] = useState(null)

  const generateBlogPost = async () => {
    setGenerating(true)
    
    try {
      // Simulate AI blog generation
      // In production, this would call your backend API that uses OpenAI
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      const mockPost = {
        title: "The Rise of AI-Powered IT Automation: What System Administrators Need to Know",
        content: `
# The Rise of AI-Powered IT Automation

Artificial Intelligence is revolutionizing the way IT professionals approach system administration and infrastructure management. As organizations scale their operations, traditional manual processes are becoming bottlenecks that AI-powered automation can eliminate.

## Key Trends in AI-Powered IT

**Predictive Maintenance**: AI algorithms can now predict hardware failures before they occur, analyzing patterns in system logs and performance metrics. This shift from reactive to proactive maintenance is saving organizations millions in downtime costs.

**Intelligent Ticket Routing**: Machine learning models are transforming helpdesk operations by automatically categorizing and routing support tickets to the right teams, reducing resolution time by up to 60%.

**Automated Security Response**: AI-driven security systems can detect and respond to threats in real-time, implementing countermeasures faster than any human operator could.

## Implementation Strategies

For system administrators looking to leverage AI automation:

1. **Start Small**: Begin with repetitive tasks like log analysis or routine system checks
2. **Build Data Pipelines**: AI needs quality data - invest in proper logging and monitoring
3. **Continuous Learning**: Stay updated on AI tools specific to IT operations (AIOps platforms)
4. **Balance Automation with Control**: Maintain human oversight for critical systems

## The Future of IT Operations

The integration of AI into IT operations isn't about replacing system administrators - it's about augmenting their capabilities. The most successful IT professionals will be those who can effectively collaborate with AI systems, using automation to handle routine tasks while focusing their expertise on strategic initiatives.

As we move forward, the question isn't whether to adopt AI-powered automation, but how quickly you can integrate it into your workflow to stay competitive.
        `,
        excerpt: "Artificial Intelligence is revolutionizing IT automation. Learn how system administrators can leverage AI to enhance their workflows and stay ahead of the curve.",
        date: new Date().toISOString().split('T')[0],
        tags: ["AI", "Automation", "IT Operations", "AIOps"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" // AI/Tech image
      }
      
      setGeneratedPost(mockPost)
    } catch (error) {
      console.error('Error generating blog post:', error)
    } finally {
      setGenerating(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f]">
        <div className="flex items-center gap-3 mb-4">
          <Wand2 className="h-6 w-6 text-[#a78bfa]" />
          <h3 className="text-xl font-bold text-white font-mono">AI Blog Generator</h3>
        </div>
        <p className="text-sm text-[#808080] mb-4 font-mono">
          Automatically generate blog posts from trending IT and cybersecurity topics using AI
        </p>
        <button
          onClick={generateBlogPost}
          disabled={generating}
          className="px-6 py-3 border-2 border-[#a78bfa] text-[#a78bfa] hover:bg-[#a78bfa] hover:text-[#0a0a0a] transition-all font-mono font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {generating ? (
            <>
              <RefreshCw className="h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="h-5 w-5" />
              Generate New Post
            </>
          )}
        </button>
      </div>

      {generatedPost && (
        <div className="border border-[#a78bfa] p-6 bg-[#0f0f0f] animate-fadeIn">
          <div className="flex items-center gap-2 mb-4 text-green-500">
            <Check className="h-5 w-5" />
            <span className="font-mono text-sm">Blog post generated successfully!</span>
          </div>
          
          <img 
            src={generatedPost.image} 
            alt={generatedPost.title}
            className="w-full h-48 object-cover mb-4 border border-[#1a1a1a]"
          />
          
          <h2 className="text-2xl font-bold text-white font-mono mb-2">
            {generatedPost.title}
          </h2>
          
          <p className="text-sm text-[#808080] mb-4">
            {generatedPost.excerpt}
          </p>
          
          <div className="flex gap-2 mb-4">
            {generatedPost.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-[#1a1a1a] text-[#a78bfa] text-xs font-mono">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="text-xs text-[#606060] font-mono mb-4">
            Generated on {generatedPost.date}
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-[#b0b0b0] text-sm leading-relaxed whitespace-pre-line">
              {generatedPost.content}
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button className="px-4 py-2 bg-[#a78bfa] text-[#0a0a0a] font-mono font-bold hover:bg-[#c4b5fd] transition-colors">
              Publish to Blog
            </button>
            <button className="px-4 py-2 border border-[#404040] text-[#808080] font-mono hover:border-[#a78bfa] hover:text-[#a78bfa] transition-colors">
              Edit Content
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
