<template>
  <div class="ww-aggrid-wrapper" :style="gridWrapperStyle">
    <ag-grid-vue
      :style="gridStyle"
      :class="themeClass"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :pagination="content.pagination"
      :paginationPageSize="content.paginationPageSize"
      :domLayout="content.domLayout"
      @grid-ready="onGridReady"
    />
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default {
  components: {
    AgGridVue,
  },
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      gridApi: null,
      columnApi: null,
    };
  },
  computed: {
    themeClass() {
      return this.content.theme || "ag-theme-alpine";
    },
    gridStyle() {
      return {
        width: "100%",
        height: this.content.height || "500px",
      };
    },
    gridWrapperStyle() {
      return {
        width: "100%",
        height: "100%",
      };
    },
    columnDefs() {
      // Use columns from content or provide sample columns
      return this.content.columns || [
        { field: "make", sortable: true, filter: true },
        { field: "model", sortable: true, filter: true },
        { field: "price", sortable: true, filter: true },
      ];
    },
    rowData() {
      // Use row data from content or provide sample data
      return this.content.rowData || [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ];
    },
    defaultColDef() {
      return this.content.defaultColDef || {
        resizable: true,
        sortable: true,
        filter: true,
      };
    },
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
    },
  },
};
</script>

<style lang="scss" scoped>
.ww-aggrid-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
