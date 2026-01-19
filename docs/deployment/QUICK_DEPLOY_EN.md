# 🚀 Deployment Guide

English | [简体中文](./QUICK_DEPLOY.md)

This project is configured with GitHub Actions for automatic deployment. Every push to the `main` branch automatically deploys to GitHub Pages.

## 📊 Deployment Status

[![Deploy to GitHub Pages](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml/badge.svg)](https://github.com/naodeng/awesome-qa-prompt/actions/workflows/deploy.yml)

- 🟢 **passing** - Deployment successful
- 🔴 **failing** - Deployment failed
- 🟡 **in progress** - Deploying

---

## 🎯 First-Time Deployment (Required Reading)

### ⚠️ Important: Enable GitHub Pages First!

**Correct Order**:
1. ✅ Enable GitHub Pages first
2. ✅ Then push code to deploy

### Step 1: Enable GitHub Pages

1. Visit repository settings:
   ```
   https://github.com/naodeng/awesome-qa-prompt/settings/pages
   ```

2. In the **"Build and deployment"** section:
   - **Source**: Select **"GitHub Actions"** (not "Deploy from a branch")
   - Click Save

3. Confirm settings are saved (page shows "Your site is ready to be published")

### Step 2: Push Code

```bash
git add .
git commit -m "feat: configure GitHub Pages auto-deployment"
git push origin main
```

### Step 3: Wait for Deployment

- View deployment progress: https://github.com/naodeng/awesome-qa-prompt/actions
- First deployment takes about 2-3 minutes
- Wait for workflow to show green checkmark ✅

### Step 4: Visit Website

After successful deployment, visit:
```
https://qaprompt.inaodeng.com/
```

---

## 🔄 Daily Updates

After configuration, each update only requires:

```bash
# 1. Edit documentation
vim README.md

# 2. Commit and push
git add .
git commit -m "docs: update documentation"
git push origin main

# 3. Auto-deploy (no manual action needed)
# GitHub Actions will automatically complete deployment
```

---

## 📊 Deployment Workflow Explanation

### Workflow Process

```
┌─────────────────────────────────────┐
│  Push to main branch                │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Job 1: Build VitePress Site        │
├─────────────────────────────────────┤
│  📥 Checkout repository             │
│  🟢 Setup Node.js (v20)             │
│  ⚙️  Setup Pages                     │
│  📦 Install dependencies (npm ci)   │
│  🏗️  Build site (npm run docs:build)│
│  📤 Upload artifact                 │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  Job 2: Deploy to GitHub Pages      │
├─────────────────────────────────────┤
│  🚀 Deploy to GitHub Pages          │
│  🎉 Deployment complete             │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  ✅ Site live at:                   │
│  https://qaprompt.inaodeng.com/     │
└─────────────────────────────────────┘
```

### Trigger Conditions

- ✅ Push to `main` branch
- ✅ Manual trigger (click "Run workflow" on Actions page)

### Build Time

- First build: ~2-3 minutes
- Subsequent builds: ~1-2 minutes

### View Deployment Logs

1. Visit Actions page: https://github.com/naodeng/awesome-qa-prompt/actions
2. Click on the latest workflow run
3. View detailed logs for each step (with emoji icons for easy identification)

---

## 💻 Local Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run docs:dev
```

Visit `http://localhost:5173` to view.

### Build Production Version

```bash
npm run docs:build
```

### Preview Production Version

```bash
npm run docs:preview
```

---

## 🐛 Troubleshooting

### Issue 1: "Get Pages site failed" or "Not Found" Error

**Error Message**:
```
Error: Get Pages site failed
Error: HttpError: Not Found
```

**Cause**: GitHub Pages not yet enabled

**Solution**:
1. Visit https://github.com/naodeng/awesome-qa-prompt/settings/pages
2. Select **"GitHub Actions"** for Source
3. Click Save
4. Click "Re-run all jobs" on the Actions page

### Issue 2: Deployment Failed

**View Logs**:
1. Visit https://github.com/naodeng/awesome-qa-prompt/actions
2. Click on the failed workflow
3. View error messages

**Common Causes**:
- Dependency installation failed: Delete `node_modules` and reinstall
- Build error: Check Markdown file syntax
- Permission issue: Confirm Actions has read/write permissions

### Issue 3: Website Shows 404

**Solution**:
1. Confirm GitHub Pages Source is set to "GitHub Actions"
2. Check `.vitepress/config.mts` has `base: '/awesome-qa-prompt/'`
3. Clear browser cache and retry

### Issue 4: Missing Styles

**Solution**:
1. Confirm `base` path is configured correctly
2. Clear browser cache
3. Redeploy

---

## 📋 Deployment Checklist

### Before First Deployment

- [ ] GitHub Pages enabled
- [ ] Source set to "GitHub Actions"
- [ ] `base` configured correctly in `.vitepress/config.mts`
- [ ] Code pushed to `main` branch

### After First Deployment

- [ ] Actions workflow runs successfully (green checkmark)
- [ ] Website accessible
- [ ] All features working
- [ ] README badge shows "passing"

---

## 🔗 Related Links

- **Online Documentation**: https://qaprompt.inaodeng.com/
- **GitHub Repository**: https://github.com/naodeng/awesome-qa-prompt
- **Actions Logs**: https://github.com/naodeng/awesome-qa-prompt/actions
- **Pages Settings**: https://github.com/naodeng/awesome-qa-prompt/settings/pages

---

## 💡 Tips

1. **First-time setup**: Must enable Pages before running Actions
2. **Source selection**: Must select "GitHub Actions", not "Deploy from a branch"
3. **Auto-deployment**: After configuration, every push auto-deploys
4. **Deployment time**: Usually completes in 2-3 minutes

---

**Need help?** Check [Actions logs](https://github.com/naodeng/awesome-qa-prompt/actions) for detailed error information.
