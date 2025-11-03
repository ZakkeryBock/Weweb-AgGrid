<template>
  <div class="ag-grid-wrapper">
    <div
      :class="theme"
      :style="containerStyle"
    >
      <ag-grid-vue
        :columnDefs="columnDefs"
        :rowData="rowData"
        :defaultColDef="defaultColDef"
        class="ag-grid-component"
        style="width: 100%; height: 100%;"
      />
    </div>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default {
  components: {
    AgGridVue,
  },
  props: {
    content: {
      type: Object,
      required: true
    },
  },
  computed: {
    theme() {
      return this.content.theme || 'ag-theme-alpine';
    },
    containerStyle() {
      return {
        width: '100%',
        height: this.content.height || '500px',
      };
    },
    columnDefs() {
      const columns = this.content.columns || [
        { field: 'make', headerName: 'Make' },
        { field: 'model', headerName: 'Model' },
        { field: 'price', headerName: 'Price' },
      ];

      return columns.map(col => ({
        field: col.field,
        headerName: col.headerName || col.field,
        sortable: true,
        filter: true,
        resizable: true,
      }));
    },
    rowData() {
      return this.content.rowData || [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 },
      ];
    },
    defaultColDef() {
      return {
        flex: 1,
        minWidth: 100,
      };
    },
  },
};
</script>

<style scoped>
.ag-grid-wrapper {
  width: 100%;
  height: 100%;
  min-height: 200px;
}

.ag-grid-component {
  width: 100%;
  height: 100%;
}
</style>
