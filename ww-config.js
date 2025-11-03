export default {
  editor: {
    label: {
      en: "AG Grid",
    },
    icon: "table",
  },
  properties: {
    height: {
      label: {
        en: "Height",
      },
      type: "Length",
      section: "settings",
      defaultValue: "500px",
    },
    theme: {
      label: {
        en: "Theme",
      },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "ag-theme-alpine", label: "Alpine" },
          { value: "ag-theme-balham", label: "Balham" },
          { value: "ag-theme-material", label: "Material" },
        ],
      },
      defaultValue: "ag-theme-alpine",
    },
    rowData: {
      label: {
        en: "Row Data",
      },
      type: "Info",
      section: "settings",
      options: {
        text: { en: "Bind your data array to display in the grid" },
      },
      bindable: true,
      defaultValue: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ],
    },
    columns: {
      label: {
        en: "Columns",
      },
      type: "Info",
      section: "settings",
      options: {
        text: { en: "Configure column definitions" },
      },
      defaultValue: [
        { field: "make", headerName: "Make" },
        { field: "model", headerName: "Model" },
        { field: "price", headerName: "Price" },
      ],
    },
  },
};
