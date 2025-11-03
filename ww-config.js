export default {
  editor: {
    label: {
      en: "AG Grid",
    },
    icon: "table",
  },
  properties: {
    theme: {
      label: {
        en: "Theme",
      },
      type: "TextSelect",
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
        en: "Grid Height",
      },
      type: "Length",
      defaultValue: "500px",
    },
    columns: {
      label: {
        en: "Column Definitions",
      },
      type: "Array",
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
                label: { en: "Header Name" },
              },
              sortable: {
                type: "OnOff",
                label: { en: "Sortable" },
                defaultValue: true,
              },
              filter: {
                type: "OnOff",
                label: { en: "Filter" },
                defaultValue: true,
              },
              width: {
                type: "Number",
                label: { en: "Width" },
              },
            },
          },
        },
      },
      defaultValue: [
        { field: "make", headerName: "Make", sortable: true, filter: true },
        { field: "model", headerName: "Model", sortable: true, filter: true },
        { field: "price", headerName: "Price", sortable: true, filter: true },
      ],
    },
    rowData: {
      label: {
        en: "Row Data",
      },
      type: "Array",
      defaultValue: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ],
      bindable: true,
    },
    pagination: {
      label: {
        en: "Enable Pagination",
      },
      type: "OnOff",
      defaultValue: false,
    },
    paginationPageSize: {
      label: {
        en: "Page Size",
      },
      type: "Number",
      defaultValue: 10,
      hidden: (content) => !content.pagination,
    },
    domLayout: {
      label: {
        en: "DOM Layout",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "normal", label: "Normal" },
          { value: "autoHeight", label: "Auto Height" },
          { value: "print", label: "Print" },
        ],
      },
      defaultValue: "normal",
    },
    defaultColDef: {
      label: {
        en: "Default Column Settings",
      },
      type: "Object",
      options: {
        item: {
          resizable: {
            type: "OnOff",
            label: { en: "Resizable" },
            defaultValue: true,
          },
          sortable: {
            type: "OnOff",
            label: { en: "Sortable" },
            defaultValue: true,
          },
          filter: {
            type: "OnOff",
            label: { en: "Filter" },
            defaultValue: true,
          },
        },
      },
      defaultValue: {
        resizable: true,
        sortable: true,
        filter: true,
      },
    },
  },
};
