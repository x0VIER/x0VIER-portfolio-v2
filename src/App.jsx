import { useState, useEffect } from 'react'
import { Github, Mail, Terminal, ExternalLink, FileText, Code2, Server, Shield, Cloud, Database, Cpu } from 'lucide-react'
import './App.css'
import avatarImage from './assets/avatar.png'

function App() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/x0VIER/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        setRepos(data.filter(r => !r.fork))
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching repos:', err)
        setLoading(false)
      })
  }, [])

  const skills = [
    { name: 'PowerShell', icon: Terminal, color: 'from-blue-500 to-cyan-500', keywords: ['powershell', 'bash', 'automation', 'script'] },
    { name: 'Windows Server', icon: Server, color: 'from-green-500 to-emerald-500', keywords: ['windows', 'server', 'iis', 'hyper-v'] },
    { name: 'Security', icon: Shield, color: 'from-red-500 to-pink-500', keywords: ['security', 'cybersecurity', 'vulnerability', 'nmap'] },
    { name: 'Python', icon: Code2, color: 'from-yellow-500 to-orange-500', keywords: ['python', 'automation', 'data', 'pandas'] },
    { name: 'Linux', icon: Terminal, color: 'from-purple-500 to-violet-500', keywords: ['linux', 'ubuntu', 'centos', 'admin'] },
    { name: 'Cloud/AWS', icon: Cloud, color: 'from-sky-500 to-blue-500', keywords: ['aws', 'cloud', 'ec2', 's3', 'lambda'] },
    { name: 'AI & LLM', icon: Cpu, color: 'from-pink-500 to-rose-500', keywords: ['ai', 'llm', 'machine', 'learning'] },
    { name: 'Database', icon: Database, color: 'from-indigo-500 to-purple-500', keywords: ['database', 'sql', 'mongo', 'redis'] },
  ]

  const getProjectsForSkill = (keywords) => {
    return repos.filter(repo => {
      const text = `${repo.name} ${repo.description || ''}`.toLowerCase()
      return keywords.some(k => text.includes(k.toLowerCase()))
    }).slice(0, 4)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0]">
      {/* Header with better spacing */}
      <header className="border-b border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[#a78bfa] font-mono">
              <Terminal className="h-6 w-6" />
              <span className="text-lg font-bold">x0VIER</span>
            </div>
            <nav className="flex gap-8 text-sm font-mono">
              <a href="#about" className="hover:text-[#a78bfa] transition-colors px-2 py-1">about</a>
              <a href="#skills" className="hover:text-[#a78bfa] transition-colors px-2 py-1">skills</a>
              <a href="#projects" className="hover:text-[#a78bfa] transition-colors px-2 py-1">projects</a>
              <a href="#contact" className="hover:text-[#a78bfa] transition-colors px-2 py-1">contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Side by side */}
      <section id="about" className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Avatar */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#a78bfa]/40 shadow-2xl shadow-[#a78bfa]/30">
                <img 
                  src={avatarImage} 
                  alt="Developer Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#a78bfa] text-[#0a0a0a] px-4 py-2 font-mono text-sm font-bold">
                ONLINE
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <div className="text-[#a78bfa] text-sm font-mono mb-4">$ whoami</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white font-mono">V Vier</h1>
            <h2 className="text-2xl md:text-3xl text-[#808080] mb-6 font-mono">IT Professional & SysAdmin</h2>
            <p className="text-lg text-[#b0b0b0] leading-relaxed mb-8">
              Certified IT professional specializing in infrastructure automation, cloud architecture, 
              and enterprise system administration. Expert in troubleshooting, Windows/Linux environments, 
              and AI-powered automation tools.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="https://github.com/x0VIER" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#a78bfa] text-[#a78bfa] hover:bg-[#a78bfa] hover:text-[#0a0a0a] transition-all font-mono font-bold"
              >
                <Github className="inline h-5 w-5 mr-2" />
                GitHub
              </a>
              <a 
                href="mailto:loc9oel@icloud.com"
                className="px-6 py-3 border-2 border-[#404040] hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all font-mono"
              >
                <Mail className="inline h-5 w-5 mr-2" />
                Contact
              </a>
              <a 
                href="/resume.pdf"
                download
                className="px-6 py-3 border-2 border-[#404040] hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all font-mono"
              >
                <FileText className="inline h-5 w-5 mr-2" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills - 2x4 Grid (side by side) */}
      <section id="skills" className="container mx-auto px-6 py-16 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#a78bfa] text-sm font-mono mb-8">$ ls ~/skills</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => {
              const skillProjects = getProjectsForSkill(skill.keywords)
              const Icon = skill.icon
              return (
                <div key={index} className="border border-[#1a1a1a] p-6 hover:border-[#a78bfa] transition-all group bg-[#0f0f0f]">
                  <Icon className="h-8 w-8 mb-3 text-[#a78bfa]" />
                  <div className="text-sm font-bold text-white mb-2 font-mono">{skill.name}</div>
                  <div className="text-xs text-[#808080] font-mono">
                    {skillProjects.length} projects
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects & Experience - Side by Side */}
      <section className="container mx-auto px-6 py-16 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Recent Projects */}
            <div id="projects">
              <div className="text-[#a78bfa] text-sm font-mono mb-6">$ cat ~/recent_projects</div>
              {loading ? (
                <div className="text-[#808080] font-mono">Loading...</div>
              ) : (
                <div className="space-y-3">
                  {repos.slice(0, 8).map((repo, index) => (
                    <a
                      key={index}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-[#1a1a1a] p-4 hover:border-[#a78bfa] transition-all group bg-[#0f0f0f]"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors font-mono">
                          {repo.name}
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#404040] group-hover:text-[#a78bfa] transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-xs text-[#808080] line-clamp-1">
                        {repo.description || 'No description'}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Experience */}
            <div>
              <div className="text-[#a78bfa] text-sm font-mono mb-6">$ cat ~/experience</div>
              <div className="space-y-4">
                <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f]">
                  <div className="text-sm font-bold text-white mb-3 font-mono">Help Desk & Support</div>
                  <ul className="text-xs text-[#808080] space-y-2 font-mono">
                    <li>• Hardware/software troubleshooting</li>
                    <li>• Remote & on-site support</li>
                    <li>• Knowledge base documentation</li>
                    <li>• Ticket management</li>
                  </ul>
                </div>
                <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f]">
                  <div className="text-sm font-bold text-white mb-3 font-mono">System Administration</div>
                  <ul className="text-xs text-[#808080] space-y-2 font-mono">
                    <li>• Windows/Linux server management</li>
                    <li>• Active Directory & Group Policy</li>
                    <li>• Security policies & monitoring</li>
                    <li>• PowerShell/Python automation</li>
                  </ul>
                </div>
                <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f]">
                  <div className="text-sm font-bold text-white mb-3 font-mono">Cloud & Automation</div>
                  <ul className="text-xs text-[#808080] space-y-2 font-mono">
                    <li>• AWS infrastructure (EC2, S3, Lambda)</li>
                    <li>• Infrastructure as Code</li>
                    <li>• CI/CD pipelines & DevOps</li>
                    <li>• AI-powered IT tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-16 border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#a78bfa] text-sm font-mono mb-6">$ echo $CONTACT</div>
          <p className="text-lg text-[#b0b0b0] mb-8 font-mono">
            Open to IT infrastructure, system administration, and cloud engineering roles.
          </p>
          <div className="flex justify-center gap-8 text-sm font-mono">
            <a href="mailto:loc9oel@icloud.com" className="text-[#808080] hover:text-[#a78bfa] transition-colors">
              loc9oel@icloud.com
            </a>
            <a href="https://github.com/x0VIER" target="_blank" rel="noopener noreferrer" className="text-[#808080] hover:text-[#a78bfa] transition-colors">
              github.com/x0VIER
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-8">
        <div className="container mx-auto px-6 text-center text-xs text-[#606060] font-mono">
          <p>© 2025 V Vier • Built with React • Auto-synced with GitHub API</p>
        </div>
      </footer>
    </div>
  )
}

export default App
