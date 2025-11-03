<template>
  <div class="test-container" :style="containerStyle">
    <div class="test-content">
      <h3>AG Grid Component</h3>
      <p v-if="safeContent">Rows: {{ safeRowData.length }}</p>
      <p v-if="safeContent">Columns: {{ safeColumnDefs.length }}</p>
      <div v-if="safeContent && safeRowData.length > 0" class="data-preview">
        <div v-for="(row, index) in safeRowData" :key="index" class="row-item">
          {{ row.make || 'N/A' }} - {{ row.model || 'N/A' }} - ${{ row.price || 0 }}
        </div>
      </div>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    safeContent() {
      return this.content && typeof this.content === 'object';
    },
    containerStyle() {
      if (!this.safeContent) return { height: '300px' };
      return {
        width: '100%',
        height: this.content.height || '500px',
      };
    },
    safeColumnDefs() {
      if (!this.safeContent || !this.content.columns) {
        return [
          { field: 'make', headerName: 'Make' },
          { field: 'model', headerName: 'Model' },
          { field: 'price', headerName: 'Price' },
        ];
      }
      return this.content.columns;
    },
    safeRowData() {
      if (!this.safeContent || !this.content.rowData) {
        return [
          { make: 'Toyota', model: 'Celica', price: 35000 },
          { make: 'Ford', model: 'Mondeo', price: 32000 },
          { make: 'Porsche', model: 'Boxster', price: 72000 },
        ];
      }
      return this.content.rowData;
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 20px;
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  overflow: auto;
}

.test-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.test-content h3 {
  margin: 0 0 16px 0;
  color: #212529;
  font-size: 20px;
}

.test-content p {
  margin: 8px 0;
  color: #495057;
  font-size: 14px;
}

.data-preview {
  margin-top: 16px;
  padding: 12px;
  background: white;
  border-radius: 4px;
  border: 1px solid #e9ecef;
}

.row-item {
  padding: 8px;
  border-bottom: 1px solid #f1f3f5;
  font-size: 14px;
  color: #343a40;
}

.row-item:last-child {
  border-bottom: none;
}
</style>
