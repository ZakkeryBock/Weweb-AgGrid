# WeWeb Dashboard Setup - IMPORTANT

## Why Your Component Isn't Appearing

Based on WeWeb community issues, custom components from GitHub require specific dashboard configuration. The component won't appear automatically just by pushing to GitHub.

## Required Steps in WeWeb Dashboard

### 1. Add GitHub Source (First Time Setup)

1. **Go to WeWeb Dashboard** (not the editor)
2. **Navigate to:** Settings → Components → Source Code
3. **Click:** "Add Source Code" or "+" button
4. **Configure:**
   - **Name:** AG Grid Component (or any name you want)
   - **GitHub Repository:** `https://github.com/ZakkeryBock/Weweb-AgGrid`
   - **Branch:** `main`
   - **Type:** Element (wwobject)
   - **Version:** `0.0.1` (matches package.json)

5. **Save** - WeWeb will trigger a build from GitHub

### 2. Wait for Build to Complete

- WeWeb has a GitHub hook that builds your component automatically
- This can take 1-5 minutes
- Check build status in the dashboard (if available)

### 3. Activate the Version

⚠️ **CRITICAL STEP** - Your component won't appear until you:
1. Go back to the component in dashboard
2. **Set the "Active Version"** to `0.0.1`
3. This tells WeWeb which version to use in the editor

### 4. Finding the Component in Editor

**In the WeWeb Editor:**
1. Open your project in **normal mode** (NOT dev mode)
2. Click the **"Dev" tab** in the left panel
3. Scroll to the **bottom of the panel**
4. Look for your GitHub source code section
5. You should see "AG Grid Test" component
6. **Drag and drop** onto the page

## Troubleshooting

### Component Still Not Appearing?

**Check 1:** Version in Dashboard
- The active version must be set
- Build status should show "Success"

**Check 2:** Branch is Correct
- Make sure it's pointing to `main` branch
- Verify latest commit is showing

**Check 3:** Hard Refresh Editor
- Close editor completely
- Clear browser cache
- Reopen editor

**Check 4:** Look in Correct Panel
- Component appears in "Dev" tab, NOT in regular components
- Scroll to bottom where GitHub sources are listed

### When Updating Component

1. Update `version` in `package.json` (e.g., `0.0.2`)
2. Commit and push to GitHub
3. **In Dashboard:** Update the component version to `0.0.2`
4. Set `0.0.2` as active version
5. WeWeb will rebuild automatically

## Current Component State

- **Repository:** https://github.com/ZakkeryBock/Weweb-AgGrid
- **Branch:** main
- **Version:** 0.0.1
- **Type:** Element (wwobject)
- **Component:** Minimal test version (green box)
- **Files Required:** src/wwElement.vue, ww-config.js, package.json

## Next Steps

Once you see the green "AG Grid Component Works!" box:
1. Report back that it's working
2. We'll add AG Grid back with proper lazy loading
3. Update version to 0.0.2 and rebuild
