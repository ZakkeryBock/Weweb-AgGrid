<template>
  <div class="ag-grid-container">
    <div v-if="isEditMode" class="editor-placeholder">
      <div class="placeholder-content">
        <div class="placeholder-icon">📊</div>
        <div class="placeholder-title">AG Grid Table</div>
        <div class="placeholder-description">
          {{ columnDefs.length }} columns · {{ rowData.length }} rows
        </div>
      </div>
    </div>
    <div v-else-if="!agGridLoaded" class="loading-message">
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
    wwEditorState: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      agGridLoaded: false,
    };
  },
  computed: {
    isEditMode() {
      // Check if we're in WeWeb's editor mode
      return this.wwEditorState?.isEditing ?? window.wwLib?.isEditMode?.() ?? false;
    },
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
    // Only load AG Grid in preview/live mode, not in editor
    if (!this.isEditMode) {
      this.loadAGGridStyles();
    }
  },
  methods: {
    loadAGGridStyles() {
      // Load AG Grid base styles with scoped approach
      if (!document.getElementById('ag-grid-base-styles')) {
        const baseLink = document.createElement('link');
        baseLink.id = 'ag-grid-base-styles';
        baseLink.rel = 'stylesheet';
        baseLink.href = 'https://cdn.jsdelivr.net/npm/ag-grid-community@31.0.1/styles/ag-grid.css';
        baseLink.media = 'print';
        baseLink.onload = function() { this.media = 'all'; };
        document.head.appendChild(baseLink);
      }

      // Load AG Grid theme styles
      if (!document.getElementById('ag-grid-theme-styles')) {
        const themeLink = document.createElement('link');
        themeLink.id = 'ag-grid-theme-styles';
        themeLink.rel = 'stylesheet';
        themeLink.href = 'https://cdn.jsdelivr.net/npm/ag-grid-community@31.0.1/styles/ag-theme-alpine.css';
        themeLink.media = 'print';
        themeLink.onload = function() {
          this.media = 'all';
        };

        // Set loaded flag after a small delay to ensure styles are applied
        setTimeout(() => {
          this.agGridLoaded = true;
        }, 100);

        document.head.appendChild(themeLink);
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

.editor-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border: 2px dashed #a0aec0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.editor-placeholder:hover {
  border-color: #4299e1;
  background: linear-gradient(135deg, #e6f2ff 0%, #b8d4f1 100%);
}

.placeholder-content {
  text-align: center;
  padding: 20px;
  pointer-events: none;
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
