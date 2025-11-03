# WeWeb AG Grid Component

An AG Grid component for [WeWeb](https://www.weweb.io/).

This component integrates [AG Grid](https://www.ag-grid.com/) - a powerful data grid solution - into WeWeb, providing advanced table features like sorting, filtering, pagination, and more.

## Features

- Multiple built-in themes (Alpine, Balham, Material)
- Sortable and filterable columns
- Pagination support
- Resizable columns
- Customizable column definitions
- Bindable row data
- Configurable grid height
- Auto-height layout option

## Installation

To run locally, first install all dependencies:

```bash
npm install
```

## Development

To serve locally:

```bash
npm run serve
```

Then go to WeWeb editor, open the developer popup, and add your custom element.

You can specify a custom port:

```bash
npm run serve -- --port=8080
```

## Build

Before release, check for build errors:

```bash
npm run build
```

## Configuration

The component exposes the following properties in the WeWeb editor:

- **Theme**: Choose between Alpine, Balham, or Material themes
- **Grid Height**: Set the height of the grid
- **Column Definitions**: Define your table columns with field names, headers, and options
- **Row Data**: Bind your data source (array of objects)
- **Pagination**: Enable/disable pagination
- **Page Size**: Set the number of rows per page
- **DOM Layout**: Choose between normal, auto-height, or print layout
- **Default Column Settings**: Configure default behavior for all columns (resizable, sortable, filter)

## Usage in WeWeb

1. Add the AG Grid component to your page
2. Bind your data to the "Row Data" property
3. Configure your columns in "Column Definitions"
4. Customize the appearance and behavior using the available properties

## License

MIT
