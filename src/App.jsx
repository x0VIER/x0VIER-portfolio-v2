import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Github, Mail, ExternalLink, FileText, Code2, Server, Shield, Cloud, Database, Cpu, Terminal, BookOpen, Home as HomeIcon, LayoutDashboard } from 'lucide-react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'
import './App.css'
import avatarImage from './assets/avatar.png'
import Dashboard from './components/Dashboard'
import AutoBlogWriter from './components/AutoBlogWriter'
import LiveCyberNews from './components/LiveCyberNews'

// Home Page Component
function HomePage() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [githubStats, setGithubStats] = useState(null)
  const [selectedSkill, setSelectedSkill] = useState(null)
  
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expRef, expInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    // Fetch repos
    fetch('https://api.github.com/users/x0VIER/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        setRepos(data.filter(r => !r.fork))
        setLoading(false)
      })
      .catch(err => console.error('Error fetching repos:', err))

    // Fetch GitHub stats
    fetch('https://api.github.com/users/x0VIER')
      .then(res => res.json())
      .then(data => setGithubStats(data))
      .catch(err => console.error('Error fetching stats:', err))
  }, [])

  const skills = [
    { name: 'PowerShell', icon: Terminal, keywords: ['powershell', 'bash', 'automation', 'script'], level: 90 },
    { name: 'Windows Server', icon: Server, keywords: ['windows', 'server', 'iis', 'hyper-v'], level: 85 },
    { name: 'Security', icon: Shield, keywords: ['security', 'cybersecurity', 'vulnerability', 'nmap'], level: 80 },
    { name: 'Python', icon: Code2, keywords: ['python', 'automation', 'data', 'pandas'], level: 88 },
    { name: 'Linux', icon: Terminal, keywords: ['linux', 'ubuntu', 'centos', 'admin'], level: 85 },
    { name: 'Cloud/AWS', icon: Cloud, keywords: ['aws', 'cloud', 'ec2', 's3', 'lambda'], level: 82 },
    { name: 'AI & LLM', icon: Cpu, keywords: ['ai', 'llm', 'machine', 'learning'], level: 75 },
    { name: 'Database', icon: Database, keywords: ['database', 'sql', 'mongo', 'redis'], level: 78 },
  ]

  const getProjectsForSkill = (keywords) => {
    return repos.filter(repo => {
      const text = `${repo.name} ${repo.description || ''}`.toLowerCase()
      return keywords.some(k => text.includes(k.toLowerCase()))
    }).slice(0, 4)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#a78bfa]/40 shadow-2xl shadow-[#a78bfa]/30 animate-pulse-slow">
                <img 
                  src={avatarImage} 
                  alt="Developer Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#a78bfa] text-[#0a0a0a] px-6 py-2 font-mono text-sm font-bold animate-bounce-slow">
                ONLINE
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="text-[#a78bfa] text-sm font-mono mb-4">
              <TypeAnimation
                sequence={[
                  '$ whoami',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
              />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white font-mono">V Vier</h1>
            <h2 className="text-2xl md:text-3xl text-[#808080] mb-8 font-mono">
              <TypeAnimation
                sequence={[
                  'IT Professional',
                  2000,
                  'System Administrator',
                  2000,
                  'Cloud Engineer',
                  2000,
                  'Automation Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-lg text-[#b0b0b0] leading-relaxed mb-10 max-w-3xl mx-auto">
              Certified IT professional specializing in infrastructure automation, cloud architecture, 
              and enterprise system administration. Expert in troubleshooting, Windows/Linux environments, 
              and AI-powered automation tools.
            </p>
            
            {/* GitHub Stats */}
            {githubStats && (
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                <div className="border border-[#1a1a1a] p-4 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
                  <div className="text-3xl font-bold text-[#a78bfa] font-mono">{githubStats.public_repos}</div>
                  <div className="text-xs text-[#808080] font-mono">Repositories</div>
                </div>
                <div className="border border-[#1a1a1a] p-4 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
                  <div className="text-3xl font-bold text-[#a78bfa] font-mono">{githubStats.followers}</div>
                  <div className="text-xs text-[#808080] font-mono">Followers</div>
                </div>
                <div className="border border-[#1a1a1a] p-4 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
                  <div className="text-3xl font-bold text-[#a78bfa] font-mono">{githubStats.following}</div>
                  <div className="text-xs text-[#808080] font-mono">Following</div>
                </div>
              </div>
            )}

            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="https://github.com/x0VIER" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#a78bfa] text-[#a78bfa] hover:bg-[#a78bfa] hover:text-[#0a0a0a] transition-all font-mono font-bold transform hover:scale-105"
              >
                <Github className="inline h-5 w-5 mr-2" />
                GitHub
              </a>
              <a 
                href="mailto:loc9oel@icloud.com"
                className="px-6 py-3 border-2 border-[#404040] hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all font-mono transform hover:scale-105"
              >
                <Mail className="inline h-5 w-5 mr-2" />
                Contact
              </a>
              <Link 
                to="/resume"
                className="px-6 py-3 border-2 border-[#404040] hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all font-mono transform hover:scale-105"
              >
                <FileText className="inline h-5 w-5 mr-2" />
                Resume
              </Link>
              <Link 
                to="/blog"
                className="px-6 py-3 border-2 border-[#404040] hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all font-mono transform hover:scale-105"
              >
                <BookOpen className="inline h-5 w-5 mr-2" />
                Blog
              </Link>
              <Link 
                to="/dashboard"
                className="px-6 py-3 border-2 border-[#404040] hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all font-mono transform hover:scale-105"
              >
                <LayoutDashboard className="inline h-5 w-5 mr-2" />
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills with Progress Bars */}
      <section ref={skillsRef} className={`container mx-auto px-6 py-16 border-t border-[#1a1a1a] relative z-10 transition-all duration-1000 ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[#a78bfa] text-sm font-mono mb-8 text-center">
            <TypeAnimation
              sequence={['$ ls ~/skills', 1000]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const skillProjects = getProjectsForSkill(skill.keywords)
              const Icon = skill.icon
              return (
                <div 
                  key={index} 
                  onClick={() => setSelectedSkill({ ...skill, projects: skillProjects })}
                  className="border border-[#1a1a1a] p-6 hover:border-[#a78bfa] transition-all group bg-[#0f0f0f] cursor-pointer transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-6 w-6 text-[#a78bfa]" />
                    <div className="text-sm font-bold text-white font-mono">{skill.name}</div>
                    <div className="text-xs text-[#808080] font-mono ml-auto">{skillProjects.length} projects</div>
                  </div>
                  <div className="w-full bg-[#1a1a1a] h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#a78bfa] to-[#c4b5fd] transition-all duration-1000"
                      style={{ width: skillsInView ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  <div className="text-xs text-[#a78bfa] font-mono mt-2 text-right">{skill.level}%</div>
                  <div className="text-xs text-[#606060] font-mono mt-2 text-center">Click to view projects →</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects & Experience */}
      <section className="container mx-auto px-6 py-16 border-t border-[#1a1a1a] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Projects */}
            <div ref={projectsRef} className={`transition-all duration-1000 ${projectsInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
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
                      className="block border border-[#1a1a1a] p-4 hover:border-[#a78bfa] transition-all group bg-[#0f0f0f] transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors font-mono">
                          {repo.name}
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#404040] group-hover:text-[#a78bfa] transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-xs text-[#808080] line-clamp-1 mb-2">
                        {repo.description || 'No description'}
                      </p>
                      {repo.stargazers_count > 0 && (
                        <div className="text-xs text-[#a78bfa] font-mono">⭐ {repo.stargazers_count} stars</div>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Experience */}
            <div ref={expRef} className={`transition-all duration-1000 ${expInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="text-[#a78bfa] text-sm font-mono mb-6">$ cat ~/experience</div>
              <div className="space-y-4">
                <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
                  <div className="text-sm font-bold text-white mb-3 font-mono">Help Desk & Support</div>
                  <ul className="text-xs text-[#808080] space-y-2 font-mono">
                    <li>• Hardware/software troubleshooting</li>
                    <li>• Remote & on-site support</li>
                    <li>• Knowledge base documentation</li>
                    <li>• Ticket management</li>
                  </ul>
                </div>
                <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
                  <div className="text-sm font-bold text-white mb-3 font-mono">System Administration</div>
                  <ul className="text-xs text-[#808080] space-y-2 font-mono">
                    <li>• Windows/Linux server management</li>
                    <li>• Active Directory & Group Policy</li>
                    <li>• Security policies & monitoring</li>
                    <li>• PowerShell/Python automation</li>
                  </ul>
                </div>
                <div className="border border-[#1a1a1a] p-6 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all">
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
      <section className="container mx-auto px-6 py-16 border-t border-[#1a1a1a] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[#a78bfa] text-sm font-mono mb-6">$ echo $CONTACT</div>
          <p className="text-lg text-[#b0b0b0] mb-8 font-mono">
            Open to IT infrastructure, system administration, and cloud engineering roles.
          </p>
          <div className="flex justify-center gap-8 text-sm font-mono flex-wrap">
            <a href="mailto:loc9oel@icloud.com" className="text-[#808080] hover:text-[#a78bfa] transition-colors">
              loc9oel@icloud.com
            </a>
            <a href="https://github.com/x0VIER" target="_blank" rel="noopener noreferrer" className="text-[#808080] hover:text-[#a78bfa] transition-colors">
              github.com/x0VIER
            </a>
          </div>
        </div>
      </section>

      {/* Skill Modal */}
      {selectedSkill && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="bg-[#0a0a0a] border-2 border-[#a78bfa] max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {selectedSkill.icon && <selectedSkill.icon className="h-8 w-8 text-[#a78bfa]" />}
                <h2 className="text-3xl font-bold text-white font-mono">{selectedSkill.name}</h2>
              </div>
              <button 
                onClick={() => setSelectedSkill(null)}
                className="text-[#808080] hover:text-[#a78bfa] text-2xl font-mono"
              >
                ×
              </button>
            </div>

            <div className="mb-6">
              <div className="text-sm text-[#808080] font-mono mb-2">Proficiency Level</div>
              <div className="w-full bg-[#1a1a1a] h-4 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#a78bfa] to-[#c4b5fd]"
                  style={{ width: `${selectedSkill.level}%` }}
                ></div>
              </div>
              <div className="text-right text-[#a78bfa] font-mono text-sm mt-1">{selectedSkill.level}%</div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white font-mono mb-4">Projects ({selectedSkill.projects.length})</h3>
              {selectedSkill.projects.length > 0 ? (
                <div className="space-y-3">
                  {selectedSkill.projects.map((project, index) => (
                    <a
                      key={index}
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-[#1a1a1a] p-4 hover:border-[#a78bfa] transition-all bg-[#0f0f0f] group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-sm font-bold text-white group-hover:text-[#a78bfa] font-mono">
                          {project.name}
                        </div>
                        <ExternalLink className="h-4 w-4 text-[#404040] group-hover:text-[#a78bfa] flex-shrink-0" />
                      </div>
                      <p className="text-xs text-[#808080] mb-2">
                        {project.description || 'No description available'}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#606060] font-mono">
                        {project.language && <span>Language: {project.language}</span>}
                        {project.stargazers_count > 0 && <span>⭐ {project.stargazers_count}</span>}
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-[#808080] font-mono text-sm">No projects found for this skill yet.</div>
              )}
            </div>

            <button 
              onClick={() => setSelectedSkill(null)}
              className="w-full px-4 py-3 border-2 border-[#a78bfa] text-[#a78bfa] hover:bg-[#a78bfa] hover:text-[#0a0a0a] transition-all font-mono font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

// Resume Page
function ResumePage() {
  return (
    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-[#a78bfa] hover:text-white transition-colors font-mono text-sm mb-8 inline-flex items-center gap-2">
          <HomeIcon className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="bg-[#0f0f0f] border border-[#1a1a1a] p-12 mt-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white font-mono mb-2">V Vier</h1>
            <p className="text-[#a78bfa] font-mono">IT Professional & System Administrator</p>
            <p className="text-sm text-[#808080] font-mono mt-4">
              loc9oel@icloud.com | github.com/x0VIER
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#a78bfa] font-mono mb-4 border-b border-[#1a1a1a] pb-2">Summary</h2>
            <p className="text-[#b0b0b0] leading-relaxed">
              Certified IT professional with expertise in infrastructure automation, cloud architecture, and enterprise system administration. 
              Proven track record in troubleshooting complex technical issues, managing Windows/Linux environments, and implementing AI-powered automation solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#a78bfa] font-mono mb-4 border-b border-[#1a1a1a] pb-2">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-mono font-bold mb-2">Systems & Infrastructure</h3>
                <ul className="text-[#808080] text-sm space-y-1 font-mono">
                  <li>• Windows Server (2016-2022)</li>
                  <li>• Linux Administration (Ubuntu, CentOS)</li>
                  <li>• Active Directory & Group Policy</li>
                  <li>• Virtualization (Hyper-V, VMware)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-mono font-bold mb-2">Cloud & Automation</h3>
                <ul className="text-[#808080] text-sm space-y-1 font-mono">
                  <li>• AWS (EC2, S3, Lambda, CloudFormation)</li>
                  <li>• PowerShell & Bash Scripting</li>
                  <li>• Python Automation</li>
                  <li>• CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#a78bfa] font-mono mb-4 border-b border-[#1a1a1a] pb-2">Experience</h2>
            
            <div className="mb-6">
              <h3 className="text-white font-mono font-bold">IT Support Specialist</h3>
              <p className="text-[#808080] text-sm font-mono mb-2">2020 - Present</p>
              <ul className="text-[#808080] text-sm space-y-1 font-mono">
                <li>• Resolved 500+ technical issues with 95% first-call resolution rate</li>
                <li>• Automated routine tasks reducing ticket volume by 40%</li>
                <li>• Managed Active Directory for 200+ users</li>
                <li>• Implemented PowerShell scripts for system monitoring</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-mono font-bold">System Administrator</h3>
              <p className="text-[#808080] text-sm font-mono mb-2">2018 - 2020</p>
              <ul className="text-[#808080] text-sm space-y-1 font-mono">
                <li>• Maintained 99.9% uptime for critical infrastructure</li>
                <li>• Deployed and managed Windows Server environments</li>
                <li>• Implemented backup and disaster recovery solutions</li>
                <li>• Conducted security audits and vulnerability assessments</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#a78bfa] font-mono mb-4 border-b border-[#1a1a1a] pb-2">Projects</h2>
            <ul className="text-[#808080] text-sm space-y-2 font-mono">
              <li>• <span className="text-white">IT Troubleshooting Toolbox</span> - PowerShell-based diagnostic suite</li>
              <li>• <span className="text-white">AI IT Assistant</span> - LLM-powered helpdesk automation</li>
              <li>• <span className="text-white">Cloud Infrastructure</span> - AWS-based scalable architecture</li>
              <li>• <span className="text-white">Security Scanner</span> - Automated vulnerability detection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#a78bfa] font-mono mb-4 border-b border-[#1a1a1a] pb-2">Certifications</h2>
            <ul className="text-[#808080] text-sm space-y-1 font-mono">
              <li>• CompTIA A+ Certified</li>
              <li>• Microsoft Certified: Azure Fundamentals</li>
              <li>• AWS Certified Cloud Practitioner</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

// Blog Page
function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null)
  
  const blogPosts = [
    {
      title: "Automating IT Tasks with PowerShell",
      date: "2025-01-15",
      excerpt: "Learn how to automate common IT tasks using PowerShell scripts and save hours of manual work.",
      slug: "automating-it-tasks-powershell",
      content: `# Automating IT Tasks with PowerShell

PowerShell is a powerful automation framework that can save IT professionals countless hours. In this article, we'll explore practical automation scenarios.

## Why PowerShell?

PowerShell combines command-line speed with scripting flexibility. It's built into Windows and can manage almost any aspect of your IT infrastructure.

## Common Automation Tasks

1. **User Management**: Bulk create, modify, or disable Active Directory accounts
2. **System Monitoring**: Automated health checks and alerts
3. **Backup Automation**: Schedule and verify backup operations
4. **Software Deployment**: Install and configure applications across multiple machines

## Example Script

\`\`\`powershell
# Get all users who haven't logged in for 90 days
Get-ADUser -Filter * -Properties LastLogonDate | 
  Where-Object {$_.LastLogonDate -lt (Get-Date).AddDays(-90)} |
  Select-Object Name, LastLogonDate
\`\`\`

Start small, automate repetitive tasks, and gradually build your PowerShell expertise!`
    },
    {
      title: "Building a Home Lab for IT Practice",
      date: "2025-01-10",
      excerpt: "Step-by-step guide to setting up a home lab environment for practicing IT skills and testing new technologies.",
      slug: "building-home-lab",
      content: `# Building a Home Lab for IT Practice

A home lab is essential for IT professionals who want to practice skills, test new technologies, and experiment without risking production systems.

## Hardware Options

You don't need expensive equipment. Options include:
- Old desktop or laptop (8GB+ RAM recommended)
- Raspberry Pi for lightweight services
- Cloud-based virtual machines (AWS Free Tier, Azure, etc.)

## Software Stack

1. **Hypervisor**: VMware Workstation, VirtualBox, or Proxmox
2. **Operating Systems**: Windows Server, various Linux distros
3. **Networking**: pfSense, VyOS for routing and firewall practice
4. **Monitoring**: Nagios, Zabbix, or Prometheus

## Lab Scenarios

- Active Directory domain with multiple servers
- Web application stack (LAMP/LEMP)
- Kubernetes cluster
- Security testing environment

The key is to replicate real-world scenarios you'll encounter in production!`
    },
    {
      title: "AWS Cloud Infrastructure Best Practices",
      date: "2025-01-05",
      excerpt: "Essential best practices for designing and deploying scalable cloud infrastructure on AWS.",
      slug: "aws-best-practices",
      content: `# AWS Cloud Infrastructure Best Practices

Building cloud infrastructure on AWS requires following best practices to ensure security, scalability, and cost-efficiency.

## Security First

1. **IAM**: Use least privilege principle, enable MFA
2. **VPC**: Proper network segmentation with public/private subnets
3. **Encryption**: Enable encryption at rest and in transit
4. **Security Groups**: Whitelist only necessary ports and IPs

## High Availability

- Deploy across multiple Availability Zones
- Use Auto Scaling Groups for automatic recovery
- Implement health checks and automated failover
- Leverage managed services (RDS, ELB, etc.)

## Cost Optimization

- Right-size instances based on actual usage
- Use Reserved Instances or Savings Plans
- Implement auto-scaling to match demand
- Set up billing alerts and use Cost Explorer

## Monitoring & Logging

- CloudWatch for metrics and alarms
- CloudTrail for API audit logging
- VPC Flow Logs for network traffic analysis
- Centralized logging with CloudWatch Logs

Following these practices will help you build robust, secure, and cost-effective cloud infrastructure!`
    }
  ]

  if (selectedPost) {
    return (
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-[#a78bfa] hover:text-white transition-colors font-mono text-sm mb-8 inline-flex items-center gap-2"
          >
            <HomeIcon className="h-4 w-4" />
            Back to Blog
          </button>
          
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white font-mono mb-4">{selectedPost.title}</h1>
            <p className="text-sm text-[#808080] font-mono mb-8">{selectedPost.date}</p>
            <div className="text-[#b0b0b0] leading-relaxed whitespace-pre-wrap">
              {selectedPost.content}
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-[#a78bfa] hover:text-white transition-colors font-mono text-sm mb-8 inline-flex items-center gap-2">
          <HomeIcon className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mt-8">
          <h1 className="text-5xl font-bold text-white font-mono mb-4">Blog</h1>
          <p className="text-[#808080] font-mono mb-12">Thoughts on IT, automation, and technology</p>

          {/* Auto Blog Writer */}
          <div className="mb-12">
            <AutoBlogWriter />
          </div>

          {/* Live Cybersecurity News */}
          <div className="mb-12 border border-[#1a1a1a] p-8 bg-[#0f0f0f]">
            <LiveCyberNews />
          </div>

          {/* My Blog Posts */}
          <h2 className="text-2xl font-bold text-white font-mono mb-6">My Articles</h2>
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="border border-[#1a1a1a] p-8 bg-[#0f0f0f] hover:border-[#a78bfa] transition-all cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <h2 className="text-2xl font-bold text-white font-mono mb-2 hover:text-[#a78bfa] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#808080] font-mono mb-4">{post.date}</p>
                <p className="text-[#b0b0b0] mb-4">{post.excerpt}</p>
                <span className="text-[#a78bfa] hover:text-white transition-colors font-mono text-sm">
                  Read more →
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main App with Router and Particles
function App() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#a78bfa",
      },
      links: {
        color: "#a78bfa",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] relative">
        {/* Particles Background */}
        {init && (
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="absolute inset-0 z-0"
          />
        )}

        {/* Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Footer */}
        <footer className="border-t border-[#1a1a1a] py-8 relative z-10">
          <div className="container mx-auto px-6 text-center text-xs text-[#606060] font-mono">
            <p>© 2025 V Vier • Built with React • Auto-synced with GitHub API</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
