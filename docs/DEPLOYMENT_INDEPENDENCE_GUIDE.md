# Portfolio Independence & Deployment Guide

**Goal**: Make your portfolio completely independent from Manus, hosted on your own infrastructure with a custom domain.

---

## 🎯 Quick Start (5 Minutes)

### Step 1: Deploy to Vercel (Free)

1. **Go to Vercel**: https://vercel.com
2. **Sign in with GitHub**
3. **Click "Add New Project"**
4. **Import `x0VIER-portfolio-v2`**
5. **Configure**:
   - Framework Preset: Vite
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
6. **Click "Deploy"**
7. **Done!** You'll get a URL like: `x0vier-portfolio.vercel.app`

**Your site is now:**
✅ Independent from Manus
✅ Auto-deploys from GitHub
✅ Has HTTPS automatically
✅ Hosted on global CDN (fast everywhere)

### Step 2: Get a Custom Domain

**Option A: Free Domain (.us.kg, .dpdns.org)**

1. Go to: https://dash.domain.digitalplat.org/
2. Register a free domain:
   - `x0vier.us.kg`
   - `vvier.dpdns.org`
   - `x0vier-portfolio.us.kg`
3. In Vercel project → Settings → Domains
4. Add your custom domain
5. Update DNS records as instructed by Vercel
6. Wait 5-10 minutes for DNS propagation

**Option B: Paid Domain ($10-15/year)**

1. Buy from: Namecheap, GoDaddy, or Google Domains
2. Popular TLDs: `.com`, `.dev`, `.io`, `.tech`
3. In domain registrar, point DNS to Vercel:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → Vercel's IP (provided in Vercel)
4. In Vercel, add your custom domain
5. HTTPS automatically enabled!

---

## 🔒 Security Setup

### 1. Environment Variables

**On Vercel:**

1. Go to project → Settings → Environment Variables
2. Add these (if you want to use APIs):

```
VITE_GITHUB_TOKEN=your_github_personal_access_token
VITE_OPENAI_API_KEY=your_openai_api_key
```

3. Redeploy for changes to take effect

**Generate GitHub Token:**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `public_repo`, `read:user`
4. Copy token and add to Vercel

### 2. Enable Security Headers

Create `vercel.json` in project root:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

Commit and push to GitHub - Vercel will auto-deploy.

### 3. Enable DDoS Protection

Vercel includes:
- ✅ Automatic DDoS protection
- ✅ Rate limiting
- ✅ Edge caching
- ✅ Bot protection

No additional setup needed!

---

## 🛠️ Making Changes

### Method 1: Edit Locally (Recommended)

```bash
# 1. Clone repository
git clone https://github.com/x0VIER/x0VIER-portfolio-v2.git
cd x0VIER-portfolio-v2

# 2. Install dependencies
pnpm install

# 3. Make changes
# Edit files in src/

# 4. Test locally
pnpm dev
# Open http://localhost:5173

# 5. Build and test production
pnpm run build
pnpm preview

# 6. Commit and push
git add -A
git commit -m "Description of changes"
git push origin main

# 7. Vercel auto-deploys!
# Check deployment status at vercel.com
```

### Method 2: Edit on GitHub

1. Go to: https://github.com/x0VIER/x0VIER-portfolio-v2
2. Navigate to file you want to edit
3. Click pencil icon (Edit this file)
4. Make changes
5. Commit changes
6. Vercel auto-deploys!

**Common files to edit:**
- `src/App.jsx` - Main content, skills, projects
- `src/App.css` - Styling
- `public/` - Resume PDF, images

### Method 3: Use AI Agent

**Give any AI assistant this prompt:**

```
I need help editing my portfolio website.

Repository: https://github.com/x0VIER/x0VIER-portfolio-v2
Documentation: See COMPLETE_DOCUMENTATION.md in the repo
Tech Stack: React + Vite

Task: [Describe what you want to change]

Please:
1. Clone the repository
2. Make the changes
3. Test locally
4. Push to GitHub
5. Confirm deployment on Vercel
```

---

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional)

1. Get tracking ID from: https://analytics.google.com
2. Add to `index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. Commit and push to GitHub

### Vercel Analytics (Free)

1. In Vercel project → Analytics
2. Enable Vercel Analytics
3. Get insights on:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

---

## 🔄 Auto-Updates

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm run build
      
      - name: Deploy to Vercel
        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

**Setup:**
1. Get Vercel token: https://vercel.com/account/tokens
2. Add to GitHub: Settings → Secrets → Actions
3. Add secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

**Note**: Vercel already auto-deploys from GitHub, so this is optional!

---

## 💾 Backup Strategy

### 1. GitHub (Primary Backup)

Your code is already backed up on GitHub. To ensure safety:

```bash
# Create a backup branch
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

### 2. Local Backup

```bash
# Clone to external drive or cloud storage
git clone https://github.com/x0VIER/x0VIER-portfolio-v2.git /path/to/backup/

# Or create a zip
cd /path/to/portfolio
zip -r portfolio-backup-$(date +%Y%m%d).zip . -x "node_modules/*" "dist/*"
```

### 3. Vercel Backup

Vercel keeps:
- ✅ All deployment history
- ✅ Rollback to any previous version
- ✅ Automatic backups

To rollback:
1. Go to Vercel project → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

## 🚀 Alternative Hosting Options

### Option 1: Netlify (Free)

**Pros**: Similar to Vercel, easy setup, generous free tier  
**Cons**: Slightly slower build times

**Deploy:**
1. Go to: https://netlify.com
2. "Add new site" → "Import an existing project"
3. Connect GitHub → Select `x0VIER-portfolio-v2`
4. Build command: `pnpm run build`
5. Publish directory: `dist`
6. Deploy!

### Option 2: GitHub Pages (Free)

**Pros**: Free, integrated with GitHub  
**Cons**: No server-side features, slower updates

**Deploy:**
```bash
# Install gh-pages
pnpm add -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
pnpm run build
pnpm run deploy

# Access at: https://x0VIER.github.io/x0VIER-portfolio-v2
```

### Option 3: Cloudflare Pages (Free)

**Pros**: Fast CDN, DDoS protection, generous free tier  
**Cons**: Slightly more complex setup

**Deploy:**
1. Go to: https://pages.cloudflare.com
2. Connect GitHub
3. Select `x0VIER-portfolio-v2`
4. Build command: `pnpm run build`
5. Build output: `dist`
6. Deploy!

### Option 4: Your Own VPS

**Pros**: Full control, can run backend  
**Cons**: Requires server management, costs $5-10/month

**Providers**: DigitalOcean, Linode, Vultr, AWS Lightsail

**Deploy:**
```bash
# On your server
git clone https://github.com/x0VIER/x0VIER-portfolio-v2.git
cd x0VIER-portfolio-v2
pnpm install
pnpm run build

# Install nginx
sudo apt install nginx

# Configure nginx
sudo nano /etc/nginx/sites-available/portfolio

# Add:
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/x0VIER-portfolio-v2/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Add SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 📝 Maintenance Checklist

### Weekly
- [ ] Check Vercel deployment status
- [ ] Verify all APIs are working (GitHub, CoinGecko, RSS)
- [ ] Test on mobile and desktop
- [ ] Check analytics for traffic

### Monthly
- [ ] Update dependencies: `pnpm update`
- [ ] Review and respond to GitHub issues
- [ ] Check for security vulnerabilities: `pnpm audit`
- [ ] Backup repository locally

### Quarterly
- [ ] Review content and update as needed
- [ ] Add new projects to portfolio
- [ ] Update resume PDF
- [ ] Rotate API keys (if using)
- [ ] Review analytics and optimize

---

## 🆘 Emergency Recovery

### Site is Down

1. **Check Vercel Status**: https://www.vercel-status.com
2. **Check GitHub**: Is repo accessible?
3. **Rollback**: Vercel → Deployments → Previous version → Promote
4. **Check DNS**: Use https://dnschecker.org

### Lost Access to Vercel

1. **Redeploy to Netlify** (see Alternative Hosting)
2. **Update DNS** to point to new host
3. **All code is in GitHub** - nothing is lost!

### Corrupted Repository

```bash
# Clone fresh copy
git clone https://github.com/x0VIER/x0VIER-portfolio-v2.git fresh-copy

# Or restore from backup branch
git checkout backup-YYYYMMDD
```

### API Keys Compromised

1. **Immediately revoke** old keys
2. **Generate new keys**
3. **Update in Vercel** environment variables
4. **Redeploy**

---

## 🎓 Learning Resources

### React
- Official Docs: https://react.dev
- Tutorial: https://react.dev/learn

### Vite
- Docs: https://vitejs.dev
- Guide: https://vitejs.dev/guide/

### Vercel
- Docs: https://vercel.com/docs
- Deployment: https://vercel.com/docs/deployments/overview

### Git & GitHub
- Git Handbook: https://guides.github.com/introduction/git-handbook/
- GitHub Docs: https://docs.github.com

---

## ✅ Success Checklist

Your portfolio is fully independent when:

- [ ] Code is in your GitHub repository
- [ ] Deployed to Vercel (or alternative)
- [ ] Custom domain connected (optional but recommended)
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Auto-deploy from GitHub working
- [ ] Environment variables configured (if needed)
- [ ] Analytics enabled (optional)
- [ ] Backup strategy in place
- [ ] Documentation saved locally
- [ ] You can edit and redeploy without Manus

---

## 📞 Getting Help

**For Deployment Issues:**
- Vercel Discord: https://vercel.com/discord
- Vercel Docs: https://vercel.com/docs

**For Code Issues:**
- Create GitHub issue: https://github.com/x0VIER/x0VIER-portfolio-v2/issues
- Stack Overflow: Tag with `react`, `vite`

**For AI Assistance:**
- Give AI agent link to GitHub repo
- Reference COMPLETE_DOCUMENTATION.md
- Describe what you want to change

---

**Your portfolio is now completely independent and under your control!** 🎉

You can:
✅ Host it anywhere
✅ Edit it anytime
✅ Use any AI agent to help
✅ Own your domain
✅ Control all data

**No more dependency on Manus or any single platform!**
