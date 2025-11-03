<template>
  <div class="ag-grid-container" :style="gridContainerStyle">
    <ag-grid-vue
      v-if="agGridReady"
      :class="['ag-grid-themed', theme]"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      style="width: 100%; height: 100%;"
    />
    <div v-else class="loading-placeholder">
      <div class="placeholder-content">
        <div class="placeholder-icon">📊</div>
        <div class="placeholder-title">AG Grid Table</div>
        <div class="placeholder-description">
          {{ columnDefs.length }} columns · {{ rowData.length }} rows
        </div>
      </div>
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
    }
  },
  data() {
    return {
      agGridReady: false,
      stylesLoaded: false,
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
    // Only initialize if the component has actual content (not during initial drag)
    // WeWeb passes default content once component is actually placed
    setTimeout(() => {
      if (this.$el && this.$el.offsetParent !== null) {
        this.loadAGGridStyles();
      }
    }, 300);
  },
  methods: {
    loadAGGridStyles() {
      let stylesLoaded = 0;
      const totalStyles = 2;

      const checkReady = () => {
        stylesLoaded++;
        if (stylesLoaded >= totalStyles) {
          // Small delay to ensure styles are fully applied
          setTimeout(() => {
            this.agGridReady = true;
          }, 50);
        }
      };

      // Load AG Grid base styles
      if (!document.getElementById('ag-grid-base-styles')) {
        const baseLink = document.createElement('link');
        baseLink.id = 'ag-grid-base-styles';
        baseLink.rel = 'stylesheet';
        baseLink.href = 'https://cdn.jsdelivr.net/npm/ag-grid-community@31.0.1/styles/ag-grid.css';
        baseLink.onload = checkReady;
        baseLink.onerror = checkReady;
        document.head.appendChild(baseLink);
      } else {
        checkReady();
      }

      // Load AG Grid theme styles
      if (!document.getElementById('ag-grid-theme-styles')) {
        const themeLink = document.createElement('link');
        themeLink.id = 'ag-grid-theme-styles';
        themeLink.rel = 'stylesheet';
        themeLink.href = 'https://cdn.jsdelivr.net/npm/ag-grid-community@31.0.1/styles/ag-theme-alpine.css';
        themeLink.onload = checkReady;
        themeLink.onerror = checkReady;
        document.head.appendChild(themeLink);
      } else {
        checkReady();
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
  position: relative;
  /* Critical: prevent interfering with WeWeb's drag and drop */
  pointer-events: auto !important;
}

.ag-grid-themed {
  width: 100%;
  height: 100%;
}

.loading-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border: 2px dashed #a0aec0;
  border-radius: 8px;
  /* Critical: allow WeWeb to handle all pointer events during loading/placement */
  pointer-events: none !important;
}

.placeholder-content {
  text-align: center;
  padding: 20px;
  /* Ensure all child elements don't block pointer events */
  pointer-events: none !important;
}

.placeholder-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.placeholder-title {
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
}

.placeholder-description {
  font-size: 14px;
  color: #718096;
}
</style>
