# Manus Agent Instructions for x0VIER Portfolio

## Quick Start for AI Agents

This document contains everything a Manus AI agent needs to help maintain and edit this portfolio website.

---

## Repository Information

**GitHub URL**: https://github.com/x0VIER/x0VIER-portfolio-v2  
**Owner**: x0VIER (V Vier)  
**Contact**: loc9oel@icloud.com  
**Tech Stack**: React + Vite + TailwindCSS  
**Deployment**: Manus (https://vierport-quwcnn.manus.space) + Vercel (optional)

---

## How to Help the User

### When User Asks for Changes

1. **Clone the repository**:
   ```bash
   cd /home/ubuntu
   gh repo clone x0VIER/x0VIER-portfolio-v2
   cd x0VIER-portfolio-v2
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Make the requested changes** (see sections below for common tasks)

4. **Test locally**:
   ```bash
   pnpm dev --host
   # Then open http://localhost:5173 in browser
   ```

5. **Build for production**:
   ```bash
   pnpm run build
   ```

6. **Deploy**:
   ```bash
   # For Manus deployment
   deploy_apply_deployment dir="/home/ubuntu/x0VIER-portfolio-v2/dist"
   
   # After deployment success, tell user to click Publish button
   ```

7. **Push to GitHub**:
   ```bash
   git add -A
   git commit -m "Description of changes"
   git push origin main
   ```

---

## Project Structure

```
x0VIER-portfolio-v2/
├── src/
│   ├── App.jsx                    # Main application with routing
│   ├── App.css                    # Global styles
│   ├── index.css                  # Base CSS with animations
│   ├── assets/
│   │   └── avatar.png             # User's custom avatar
│   └── components/
│       ├── AutoBlogWriter.jsx     # AI blog generator
│       ├── CryptoTracker.jsx      # Cryptocurrency price tracker
│       ├── CyberNews.jsx          # Cybersecurity news feed
│       ├── Dashboard.jsx          # Dashboard page
│       └── LiveCyberNews.jsx      # Live cyber news component
├── public/
│   └── V_Vier_Ultimate_Resume.pdf # User's resume
├── package.json                    # Dependencies
├── vite.config.js                 # Vite configuration
├── index.html                     # HTML entry point
├── COMPLETE_DOCUMENTATION.md      # Full technical documentation
├── DEPLOYMENT_INDEPENDENCE_GUIDE.md # Deployment guide
└── MANUS_AGENT_INSTRUCTIONS.md    # This file
```

---

## Common Tasks

### 1. Change Colors

**Current color scheme**: Purple theme (#a78bfa)

To change to a different color:

```bash
cd /home/ubuntu/x0VIER-portfolio-v2/src
# Replace all instances of #a78bfa with new color
sed -i 's/#a78bfa/#YOUR_COLOR/g' App.jsx
sed -i 's/#a78bfa/#YOUR_COLOR/g' components/*.jsx
```

### 2. Update Contact Email

Current email: loc9oel@icloud.com

```bash
cd /home/ubuntu/x0VIER-portfolio-v2
grep -r "loc9oel@icloud.com" src/
# Edit the files shown and replace with new email
```

### 3. Add New Skill

Edit `src/App.jsx`, find the `skills` array around line 55:

```javascript
const skills = [
  { name: 'PowerShell', icon: Terminal, keywords: ['powershell', 'bash'], level: 90 },
  // Add new skill here:
  { name: 'New Skill', icon: IconName, keywords: ['keyword1', 'keyword2'], level: 85 },
]
```

### 4. Modify Blog Generator

Edit `src/components/AutoBlogWriter.jsx`:
- Change writing style in the `mockPost` object
- Modify input types
- Update image generation logic

### 5. Update Resume

Replace `/home/ubuntu/x0VIER-portfolio-v2/public/V_Vier_Ultimate_Resume.pdf` with new PDF

### 6. Add New Page

1. Create new component in `src/App.jsx`
2. Add route in the `<Routes>` section
3. Add navigation button in HomePage

### 7. Modify Crypto Tracker

Edit `src/components/CryptoTracker.jsx`:
- Change coin list in `cryptoIds` array
- Modify refresh interval (currently 60 seconds)
- Update styling

### 8. Change Avatar

Replace `src/assets/avatar.png` with new image (recommended: 512x512px, PNG format)

---

## Key Features Explained

### 1. Animated Particle Background
- Uses `@tsparticles/react`
- Configuration in `App.jsx` around line 600
- Purple particles that connect when close

### 2. Terminal Typing Animation
- Uses `react-type-animation`
- Rotates through job titles
- Edit in HomePage component

### 3. Clickable Skill Boxes
- Click any skill to see related GitHub projects
- Opens modal with project list
- Auto-filters repos by keywords

### 4. Live GitHub Stats
- Fetches from `https://api.github.com/users/x0VIER`
- Shows repo count, followers, following
- Updates in real-time

### 5. Animated Progress Bars
- Shows proficiency level for each skill
- Animates when scrolled into view
- Uses `react-intersection-observer`

### 6. Crypto Tracker
- Free CoinGecko API (no key needed)
- Updates every 60 seconds
- Shows 8 cryptocurrencies

### 7. Cybersecurity News Feed
- Mock data (can be replaced with real RSS feed)
- Shows latest 5 security threats
- Updates every 5 minutes

### 8. AI Blog Generator
- Writes in security researcher style (Brian Krebs/Troy Hunt)
- Supports custom topics or article URLs
- Generates matching images
- No AI-sounding language

### 9. Multi-Page Routing
- Home, Dashboard, Blog, Resume pages
- Uses `react-router-dom`
- Smooth transitions

### 10. Mobile Responsive
- Works on all screen sizes
- Side-by-side layout on desktop
- Stacks vertically on mobile

---

## APIs Used (All Free!)

1. **GitHub API**: `https://api.github.com`
   - No auth needed for public repos
   - Rate limit: 60 requests/hour

2. **CoinGecko API**: `https://api.coingecko.com/api/v3`
   - No API key needed
   - Rate limit: 10-50 requests/minute

3. **The Hacker News RSS**: `https://thehackernews.com/feeds/posts/default`
   - Free RSS feed
   - No rate limit

4. **OpenAI API** (for future AI blog generation):
   - Available via `OPENAI_API_KEY` environment variable
   - Models: gpt-4.1-mini, gpt-4.1-nano, gemini-2.5-flash

---

## Troubleshooting

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Port Already in Use

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### GitHub Push Fails

```bash
# Check authentication
gh auth status

# Re-authenticate if needed
gh auth login
```

### Deployment Fails

```bash
# Make sure dist folder exists
ls -la dist/

# Rebuild if needed
pnpm run build

# Check for errors in build output
```

---

## Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Keep dependencies updated** - Run `pnpm update` regularly
3. **Validate user input** - Especially in blog generator
4. **Use HTTPS** - Vercel/Manus provide this automatically
5. **Rate limit API calls** - Avoid hitting API limits

---

## Deployment Options

### Option 1: Manus (Current)
- URL: https://vierport-quwcnn.manus.space
- Deploy with `deploy_apply_deployment` tool
- User must click "Publish" button

### Option 2: Vercel (Recommended for independence)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /home/ubuntu/x0VIER-portfolio-v2
vercel --prod

# Or connect GitHub repo to Vercel for auto-deploy
```

### Option 3: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd /home/ubuntu/x0VIER-portfolio-v2
netlify deploy --prod --dir=dist
```

### Option 4: GitHub Pages
```bash
# Add to package.json:
"homepage": "https://x0VIER.github.io/x0VIER-portfolio-v2",
"scripts": {
  "predeploy": "pnpm run build",
  "deploy": "gh-pages -d dist"
}

# Install gh-pages
pnpm add -D gh-pages

# Deploy
pnpm run deploy
```

---

## Custom Domain Setup

### Free Domains
1. **FreeDomain** (.us.kg, .dpdns.org):
   - Visit https://dash.domain.digitalplat.org/
   - Register domain
   - Add CNAME record pointing to deployment URL

### Paid Domains
1. **Namecheap** (.com, .dev, .io):
   - Buy domain ($10-15/year)
   - Add CNAME record: `www` → `your-deployment-url`
   - Add A record: `@` → deployment IP

---

## Writing Style Guidelines

### For Blog Articles

**DO**:
- Write like Brian Krebs or Troy Hunt
- Start with direct, factual statements
- Use specific details (dates, dollar amounts, versions)
- Include technical details but keep accessible
- Link to sources
- Show real-world impact
- Use bold for key names/terms
- Include "Indicators of Compromise" sections
- Provide actionable mitigation steps

**DON'T**:
- Sound like AI ("In today's digital landscape...")
- Use marketing speak or fluff
- Make vague claims without evidence
- Write long introductions
- Use excessive adjectives
- Sound overly optimistic or pessimistic
- Forget to cite sources

**Example opening** (GOOD):
> "A critical zero-day vulnerability in Fortinet's FortiOS SSL-VPN is being actively exploited by a Chinese state-sponsored threat actor, according to security researchers at Mandiant who discovered the attacks last week."

**Example opening** (BAD):
> "In today's ever-evolving cybersecurity landscape, organizations face unprecedented challenges as threat actors leverage increasingly sophisticated techniques to compromise enterprise networks."

---

## Testing Checklist

Before deploying changes:

- [ ] Test on desktop (1920x1080)
- [ ] Test on mobile (375x667)
- [ ] Click all skill boxes - modals open?
- [ ] Click blog articles - full article shows?
- [ ] Check crypto prices updating
- [ ] Verify GitHub stats loading
- [ ] Test all navigation buttons
- [ ] Check resume download
- [ ] Verify email links work
- [ ] Test particle animation
- [ ] Check typing animations
- [ ] Verify progress bars animate on scroll

---

## Emergency Fixes

### Site is Down
```bash
# Check if build succeeded
cd /home/ubuntu/x0VIER-portfolio-v2
pnpm run build

# If build fails, check for syntax errors
pnpm run build 2>&1 | grep -i error

# Revert to last working version
git log --oneline
git checkout <last-working-commit>
pnpm run build
# Deploy again
```

### GitHub API Rate Limit Hit
```bash
# Check rate limit status
curl https://api.github.com/rate_limit

# Wait for reset or use authenticated requests
# (requires GitHub token)
```

### Crypto API Not Working
```bash
# Test CoinGecko API
curl "https://api.coingecko.com/api/v3/ping"

# If down, update CryptoTracker.jsx to show cached data
```

---

## Future Enhancements

Ideas for future improvements:

1. **Real AI Blog Generation**
   - Connect to OpenAI API
   - Scrape trending security news
   - Generate images with DALL-E

2. **Blog Post Storage**
   - Save generated posts to JSON file
   - Create blog archive page
   - Add search functionality

3. **Analytics**
   - Add Google Analytics
   - Track popular skills clicked
   - Monitor crypto tracker usage

4. **Comments System**
   - Add Disqus or Giscus
   - Allow visitors to comment on blog posts

5. **Newsletter**
   - Email subscription form
   - Send weekly security digests

6. **Dark/Light Mode Toggle**
   - Add theme switcher
   - Save preference in localStorage

7. **Project Filters**
   - Filter by language
   - Sort by stars/date
   - Search projects

8. **Certifications Section**
   - Display IT certifications
   - Link to credential verification

---

## Contact for Help

If you encounter issues you can't resolve:

- **User Email**: loc9oel@icloud.com
- **GitHub**: https://github.com/x0VIER
- **Repository Issues**: https://github.com/x0VIER/x0VIER-portfolio-v2/issues

---

## Version History

- **v1.0** (Sept 2025): Initial portfolio with basic features
- **v2.0** (Sept 2025): Added crypto tracker, cybersecurity news
- **v3.0** (Oct 2025): Added AI blog generator, clickable skills, improved writing style

---

## Final Notes

This portfolio is designed to showcase V Vier's skills as an IT professional, system administrator, and cloud engineer. The goal is to impress hiring managers with:

1. **Technical skills** - React, APIs, automation
2. **IT expertise** - PowerShell, AWS, Linux, Security
3. **AI knowledge** - LLM integration, automation
4. **Professional presentation** - Clean design, good UX

Always maintain this professional standard when making changes!

---

**Last Updated**: October 5, 2025  
**Maintained By**: Manus AI Agents  
**For**: V Vier (x0VIER)
