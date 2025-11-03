<template>
  <div class="ag-grid-container">
    <div v-if="!agGridLoaded" class="loading-message">
      Loading AG Grid...
    </div>
    <div v-else :class="['ag-grid-themed', theme]" :style="gridContainerStyle">
      <ag-grid-vue
        :columnDefs="columnDefs"
        :rowData="rowData"
        :defaultColDef="defaultColDef"
        style="width: 100%; height: 100%;"
      />
    </div>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3';

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
  data() {
    return {
      agGridLoaded: false,
    };
  },
  computed: {
    theme() {
      return this.content.theme || 'ag-theme-alpine';
    },
    gridContainerStyle() {
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
  mounted() {
    this.loadAGGridStyles();
  },
  methods: {
    loadAGGridStyles() {
      // Load AG Grid base styles
      if (!document.getElementById('ag-grid-base-styles')) {
        const baseLink = document.createElement('link');
        baseLink.id = 'ag-grid-base-styles';
        baseLink.rel = 'stylesheet';
        baseLink.href = 'https://cdn.jsdelivr.net/npm/ag-grid-community@31.0.1/styles/ag-grid.css';
        document.head.appendChild(baseLink);
      }

      // Load AG Grid theme styles
      if (!document.getElementById('ag-grid-theme-styles')) {
        const themeLink = document.createElement('link');
        themeLink.id = 'ag-grid-theme-styles';
        themeLink.rel = 'stylesheet';
        themeLink.href = 'https://cdn.jsdelivr.net/npm/ag-grid-community@31.0.1/styles/ag-theme-alpine.css';
        document.head.appendChild(themeLink);

        themeLink.onload = () => {
          this.agGridLoaded = true;
        };
      } else {
        this.agGridLoaded = true;
      }
    },
  },
};
</script>

<style scoped>
.ag-grid-container {
  width: 100%;
  height: 100%;
  min-height: 300px;
  background: white;
}

.ag-grid-themed {
  width: 100%;
  height: 100%;
}

.loading-message {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  color: #666;
}
</style>
