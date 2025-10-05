import { useState } from 'react'
import { Wand2, RefreshCw, Check, Link as LinkIcon, FileText, Image as ImageIcon } from 'lucide-react'

export default function AutoBlogWriter() {
  const [generating, setGenerating] = useState(false)
  const [generatedPost, setGeneratedPost] = useState(null)
  const [customInput, setCustomInput] = useState('')
  const [inputType, setInputType] = useState('topic') // 'topic' or 'link'

  const generateBlogPost = async () => {
    setGenerating(true)
    
    try {
      // Simulate AI blog generation with security researcher style
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Security researcher writing style: Direct, factual, investigative
      // Inspired by Brian Krebs, Troy Hunt, Bruce Schneier
      const mockPost = {
        title: "Critical Zero-Day in Fortinet VPN Exploited by Chinese APT Group",
        content: `A critical zero-day vulnerability in Fortinet's FortiOS SSL-VPN is being actively exploited by a Chinese state-sponsored threat actor, according to security researchers at Mandiant who discovered the attacks last week.

The vulnerability, tracked as CVE-2025-47610, allows remote code execution without authentication on vulnerable FortiGate devices. Fortinet disclosed the flaw on September 20th after researchers observed it being weaponized in targeted attacks against government agencies and defense contractors across North America and Europe.

**Technical Details**

The vulnerability exists in the SSL-VPN web portal's authentication mechanism. Attackers can send specially crafted HTTP requests to bypass authentication checks entirely, gaining administrative access to the device. From there, they can deploy backdoors, intercept VPN traffic, or pivot into the internal network.

Mandiant's analysis shows the threat actor—tracked internally as UNC5174—has been exploiting this flaw since at least August 15th. The group typically gains initial access through the VPN vulnerability, then deploys a custom backdoor called "BOLDMOVE" that persists across firmware updates.

**Affected Versions**

- FortiOS 7.0.0 through 7.0.12
- FortiOS 7.2.0 through 7.2.6  
- FortiOS 7.4.0 through 7.4.2

FortiOS 6.x versions are not affected. Fortinet released patches on September 20th for all vulnerable versions.

**What We Know About the Attacks**

Based on telemetry from compromised devices, the attackers appear to be conducting espionage operations rather than deploying ransomware. Stolen data includes VPN credentials, internal network documentation, and email archives from targeted organizations.

One particularly concerning aspect: the attackers modified firewall rules to allow persistent remote access even after the vulnerability was patched. This means organizations that simply applied the update without checking for indicators of compromise may still be breached.

**Indicators of Compromise**

Security teams should immediately check FortiGate logs for:

- Unusual authentication successes from external IPs
- New administrator accounts created between August 15 and September 20
- Unexpected firewall rule modifications
- Outbound connections to known UNC5174 command-and-control infrastructure

Mandiant has published a full list of IOCs on their GitHub repository.

**Mitigation Steps**

If you're running a vulnerable FortiOS version:

1. **Apply patches immediately** - Don't wait for your maintenance window
2. **Review all administrator accounts** - Delete any you don't recognize  
3. **Audit firewall rules** - Look for suspicious allow rules
4. **Check VPN logs** - Investigate any unusual authentication patterns
5. **Rotate all credentials** - Assume VPN credentials were compromised
6. **Enable MFA** - If you haven't already, enable multi-factor authentication

Organizations that detect compromise should assume full network breach and initiate incident response procedures. The attackers have demonstrated sophisticated persistence techniques that survive standard remediation efforts.

**Industry Response**

CISA added CVE-2025-47610 to its Known Exploited Vulnerabilities catalog on September 22nd, requiring federal agencies to patch within 14 days. Several cybersecurity insurance providers are now requiring proof of patching before renewing policies for organizations using FortiGate devices.

This incident highlights a troubling trend: state-sponsored groups are increasingly targeting network security appliances themselves. When the devices meant to protect your network become the entry point, traditional security models break down.

**Update (Sept 24):** Fortinet published additional guidance on detecting post-exploitation activity. They recommend running their FortiGate Security Audit Tool on all devices, even those already patched.`,
        excerpt: "Chinese state-sponsored hackers are exploiting a critical Fortinet VPN zero-day to breach government and defense networks. Patches available, but compromised devices may remain backdoored even after updates.",
        date: new Date().toISOString().split('T')[0],
        tags: ["Zero-Day", "Fortinet", "APT", "VPN", "CVE-2025-47610"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%230a0a0a' width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='24' fill='%23ff4444' text-anchor='middle' dominant-baseline='middle'%3ECRITICAL: CVE-2025-47610%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='monospace' font-size='16' fill='%23a78bfa' text-anchor='middle' dominant-baseline='middle'%3EFortinet VPN Zero-Day Exploit%3C/text%3E%3C/svg%3E"
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
          <h3 className="text-xl font-bold text-white font-mono">AI Security Blog Generator</h3>
        </div>
        <p className="text-sm text-[#808080] mb-4 font-mono">
          Generate professional security research articles. Writes like a real security researcher, not AI.
        </p>
        
        {/* Input Type Selector */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setInputType('topic')}
            className={`px-4 py-2 font-mono text-sm border-2 transition-all ${
              inputType === 'topic' 
                ? 'border-[#a78bfa] text-[#a78bfa] bg-[#1a1a1a]' 
                : 'border-[#404040] text-[#808080] hover:border-[#606060]'
            }`}
          >
            <FileText className="inline h-4 w-4 mr-2" />
            Topic/Keywords
          </button>
          <button
            onClick={() => setInputType('link')}
            className={`px-4 py-2 font-mono text-sm border-2 transition-all ${
              inputType === 'link' 
                ? 'border-[#a78bfa] text-[#a78bfa] bg-[#1a1a1a]' 
                : 'border-[#404040] text-[#808080] hover:border-[#606060]'
            }`}
          >
            <LinkIcon className="inline h-4 w-4 mr-2" />
            Article URL
          </button>
        </div>

        {/* Custom Input */}
        <div className="mb-4">
          <label className="block text-sm font-mono text-[#808080] mb-2">
            {inputType === 'topic' ? 'Enter topic or keywords:' : 'Paste article URL to rewrite:'}
          </label>
          <textarea
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder={inputType === 'topic' 
              ? 'e.g., "ransomware attack on healthcare", "zero-day vulnerability", "APT group tactics"' 
              : 'e.g., https://example.com/security-article'
            }
            className="w-full p-3 bg-[#1a1a1a] border border-[#404040] text-white font-mono text-sm focus:border-[#a78bfa] focus:outline-none resize-none"
            rows="3"
          />
          <p className="text-xs text-[#606060] mt-2 font-mono">
            {inputType === 'topic' 
              ? 'Leave blank to generate from trending cybersecurity news' 
              : 'AI will rewrite the article in security researcher style'
            }
          </p>
        </div>

        <button
          onClick={generateBlogPost}
          disabled={generating}
          className="px-6 py-3 border-2 border-[#a78bfa] text-[#a78bfa] hover:bg-[#a78bfa] hover:text-[#0a0a0a] transition-all font-mono font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {generating ? (
            <>
              <RefreshCw className="h-5 w-5 animate-spin" />
              Generating Article...
            </>
          ) : (
            <>
              <Wand2 className="h-5 w-5" />
              Generate Security Article
            </>
          )}
        </button>
      </div>

      {generatedPost && (
        <div className="border border-[#a78bfa] p-6 bg-[#0f0f0f] animate-fadeIn">
          <div className="flex items-center gap-2 mb-4 text-green-500">
            <Check className="h-5 w-5" />
            <span className="font-mono text-sm">Security article generated successfully!</span>
          </div>
          
          {/* Generated Image */}
          <div className="mb-4 border border-[#1a1a1a] p-4 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 mb-2">
              <ImageIcon className="h-4 w-4 text-[#a78bfa]" />
              <span className="text-xs font-mono text-[#808080]">AI-Generated Featured Image</span>
            </div>
            <img 
              src={generatedPost.image} 
              alt={generatedPost.title}
              className="w-full h-48 object-cover border border-[#404040]"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-white font-mono mb-2">
            {generatedPost.title}
          </h2>
          
          <p className="text-sm text-[#808080] mb-4 font-mono leading-relaxed">
            {generatedPost.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {generatedPost.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-[#1a1a1a] text-[#a78bfa] text-xs font-mono border border-[#404040]">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="text-xs text-[#606060] font-mono mb-4">
            Generated on {generatedPost.date}
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-[#b0b0b0] text-sm leading-relaxed whitespace-pre-line font-mono">
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
            <button 
              onClick={() => setGeneratedPost(null)}
              className="px-4 py-2 border border-[#404040] text-[#808080] font-mono hover:border-[#ff4444] hover:text-[#ff4444] transition-colors"
            >
              Discard
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
