# Element component starter

This is an element for [weweb.io](https://www.weweb.io/).

## Installation

## WeWeb AG Grid Component

This component is ready to use with WeWeb!

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

To test locally with WeWeb editor:

```bash
npm run serve -- --port=8090
```

Then in WeWeb editor, open the developer popup and add your custom element pointing to `https://localhost:8090`.

### Build

To build for production (GitHub integration):

```bash
npm run build
```

This creates the `dist/manager.js` file that WeWeb uses.

### Using in WeWeb

1. **GitHub Method**: Push this repo to GitHub, then add it as a custom component source in WeWeb dashboard
2. **Local Development**: Run `npm run serve -- --port=8090` and add as local component in WeWeb editor

### Features

- **Row Data**: Bind your data array
- **Columns**: Configure column definitions
- **Theme**: Choose between Alpine, Balham, or Material
- **Height**: Set grid height
- All columns are sortable, filterable, and resizable by default
