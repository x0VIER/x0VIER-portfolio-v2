# x0VIER Portfolio

**Professional IT Portfolio Website**

[![Live Site](https://img.shields.io/badge/Live-vierport--quwcnn.manus.space-purple)](https://vierport-quwcnn.manus.space)
[![GitHub](https://img.shields.io/badge/GitHub-x0VIER-blue)](https://github.com/x0VIER)
[![React](https://img.shields.io/badge/React-18-61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF)](https://vitejs.dev)

---

## 🚀 Live Demo

**Visit**: [https://vierport-quwcnn.manus.space](https://vierport-quwcnn.manus.space)

---

## ✨ Features

- 🎨 **Animated Particle Background** - Futuristic purple particles
- ⌨️ **Terminal Typing Animations** - Real-time typing effects
- 📊 **Live GitHub Stats** - 97+ repositories, auto-updating
- 💰 **Crypto Tracker** - 8 cryptocurrencies with live prices
- 🔒 **Cybersecurity News Feed** - Latest security threats
- 🤖 **AI Blog Generator** - Automatic blog post creation
- 📈 **Animated Progress Bars** - Skill proficiency visualization
- 📱 **Fully Responsive** - Mobile and desktop optimized
- 🌐 **Multi-Page** - Home, Dashboard, Blog, Resume

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 6
- **Routing**: React Router DOM
- **Animations**: @tsparticles, react-type-animation, react-intersection-observer
- **APIs**: GitHub, CoinGecko, RSS2JSON, OpenAI
- **Styling**: CSS3, Monospace fonts, Purple theme
- **Deployment**: Manus (current), ready for Vercel/Netlify

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/x0VIER/x0VIER-portfolio-v2.git
cd x0VIER-portfolio-v2

# Install dependencies
pnpm install
# or: npm install

# Start development server
pnpm dev
# or: npm run dev

# Build for production
pnpm run build
# or: npm run build
```

---

## 📚 Documentation

- **[Complete Documentation](COMPLETE_DOCUMENTATION.md)** - Everything about the website
- **[Deployment & Independence Guide](DEPLOYMENT_INDEPENDENCE_GUIDE.md)** - How to host independently

---

## 🎯 Quick Start for AI Agents

**Helping with this portfolio?** Here's what you need:

1. **Tech Stack**: React + Vite, no backend
2. **Main File**: `src/App.jsx` (551 lines)
3. **Components**: `src/components/` directory
4. **Styling**: `src/App.css` + inline styles
5. **Full Docs**: See [COMPLETE_DOCUMENTATION.md](COMPLETE_DOCUMENTATION.md)

**Common Tasks**:
- Update content: Edit `src/App.jsx`
- Change colors: Search for `#a78bfa` (purple theme)
- Add features: Create component in `src/components/`
- Fix bugs: Check browser console, find relevant component

---

## 🌐 Deployment

### Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Import `x0VIER-portfolio-v2`
3. Framework: Vite
4. Build Command: `pnpm run build`
5. Output Directory: `dist`
6. Deploy!

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Import repository
3. Build command: `pnpm run build`
4. Publish directory: `dist`
5. Deploy!

### GitHub Pages

```bash
pnpm add -D gh-pages
pnpm run build
pnpm run deploy
```

---

## 🔒 Security

- ✅ HTTPS enabled
- ✅ No sensitive data in code
- ✅ Environment variables for API keys
- ✅ CORS configured
- ✅ Input validation

**Environment Variables** (optional):
```env
VITE_GITHUB_TOKEN=your_token
VITE_OPENAI_API_KEY=your_key
```

---

## 🎨 Customization

### Change Colors

Search and replace `#a78bfa` (purple) with your color:
- Blue: `#60a5fa`
- Green: `#34d399`
- Red: `#f87171`

### Change Contact Email

In `src/App.jsx`, find:
```jsx
<a href="mailto:loc9oel@icloud.com">
```

### Change GitHub Username

In `src/App.jsx`, replace all instances of:
```javascript
'https://api.github.com/users/x0VIER'
```

### Add/Remove Skills

Edit the `skills` array in `src/App.jsx`:
```javascript
const skills = [
  { name: 'Your Skill', icon: YourIcon, keywords: ['keyword'], level: 85 },
]
```

---

## 📊 Project Structure

```
x0VIER-portfolio-v2/
├── src/
│   ├── assets/
│   │   └── avatar.png              # Custom logo
│   ├── components/
│   │   ├── AutoBlogWriter.jsx      # AI blog generator
│   │   ├── CryptoTracker.jsx       # Crypto prices
│   │   ├── CyberNews.jsx           # Security news (Dashboard)
│   │   ├── Dashboard.jsx           # Dashboard page
│   │   └── LiveCyberNews.jsx       # Live news (Blog)
│   ├── App.jsx                     # Main app
│   ├── App.css                     # Styles
│   └── main.jsx                    # Entry point
├── public/
│   └── V_Vier_Ultimate_Resume.pdf  # Resume
├── COMPLETE_DOCUMENTATION.md       # Full docs
├── DEPLOYMENT_INDEPENDENCE_GUIDE.md # Deployment guide
└── README.md                       # This file
```

---

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

**GitHub API rate limit?**
- Wait 1 hour, or add GitHub token

**Particles not showing?**
- Clear browser cache
- Check browser console for errors

**More help**: See [COMPLETE_DOCUMENTATION.md](COMPLETE_DOCUMENTATION.md)

---

## 📞 Contact

**Owner**: x0VIER (V Vier)  
**Email**: loc9oel@icloud.com  
**GitHub**: [@x0VIER](https://github.com/x0VIER)  
**Portfolio**: [vierport-quwcnn.manus.space](https://vierport-quwcnn.manus.space)

---

## 📝 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

---

## 🙏 Acknowledgments

- Built with React, Vite, and many amazing open-source libraries
- Design inspired by terminal aesthetics and minimal developer portfolios
- APIs: GitHub, CoinGecko, RSS2JSON (all free tiers)
- Hosting: Manus (current), ready for Vercel/Netlify

---

**⭐ Star this repo if you find it useful!**

**🔗 Live Site**: [vierport-quwcnn.manus.space](https://vierport-quwcnn.manus.space)
