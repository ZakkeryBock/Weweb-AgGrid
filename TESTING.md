# Testing Guide for AG Grid Component

## Current Status
- Component has been simplified to absolute minimum (no AG Grid yet)
- Build is working correctly (5.1KB output)
- Ready for testing in WeWeb

## How to Test

### Option 1: Local Development (RECOMMENDED for debugging)

1. **Start the dev server:**
   ```bash
   npm run serve
   ```
   This will start a server on `https://localhost:8080`

2. **In WeWeb Editor:**
   - Go to your project
   - Open the **Dev Editor** (not regular editor)
   - Click "Add local Element"
   - Enter name: `harlo-aggrid`
   - Enter port: `8080` (or whatever port the serve command shows)

3. **Test drag and drop:**
   - You should see the component in the dev panel
   - Try dragging it onto the page
   - If it works, you'll see a green box with "AG Grid Component Works!"

### Option 2: GitHub Integration

1. **Push to GitHub** (if not already done)
2. **In WeWeb Dashboard:**
   - Add custom component from GitHub
   - Point to this repository
3. **In WeWeb Editor:**
   - Component appears in regular component panel
   - Drag onto page

## Troubleshooting

### If drag-and-drop still freezes:

1. **Check browser console** for JavaScript errors
2. **Hard refresh** WeWeb editor (Ctrl+Shift+R / Cmd+Shift+R)
3. **Clear WeWeb cache:**
   - Close editor
   - Clear browser cache
   - Reopen editor

### If component doesn't appear:

1. **Verify serve is running** and shows no errors
2. **Check HTTPS certificate** - visit `https://localhost:8080` and accept certificate
3. **Verify component name** matches in ww-config.js and WeWeb dev panel

## Next Steps

Once the minimal green box component works:
1. Add back proper props (content, height, etc.)
2. Add AG Grid dependency back
3. Implement lazy loading for AG Grid to prevent freeze
