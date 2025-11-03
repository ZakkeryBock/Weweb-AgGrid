export default {
  editor: {
    label: {
      en: "AG Grid",
    },
    icon: "table",
  },
  properties: {
    rowData: {
      label: {
        en: "Row Data",
      },
      type: "Array",
      section: "settings",
      defaultValue: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ],
      bindable: true,
    },
    columns: {
      label: {
        en: "Columns",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "Object",
          options: {
            item: {
              field: {
                type: "Text",
                label: { en: "Field" },
              },
              headerName: {
                type: "Text",
                label: { en: "Header" },
              },
            },
          },
        },
      },
      defaultValue: [
        { field: "make", headerName: "Make" },
        { field: "model", headerName: "Model" },
        { field: "price", headerName: "Price" },
      ],
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
    height: {
      label: {
        en: "Height",
      },
      type: "Length",
      section: "settings",
      defaultValue: "500px",
    },
  },
};
