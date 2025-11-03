<template>
  <div class="ww-aggrid-wrapper" :style="wwElementState?.style">
    <div class="test-content">
      <h3>AG Grid Test Component</h3>
      <p>Theme: {{ content.theme || 'alpine' }}</p>
      <p>Height: {{ content.height || '500px' }}</p>
      <p>Data rows: {{ rowData.length }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    uid: {
      type: String,
      required: true
    }
  },
  emits: ['trigger-event'],
  inject: {
    wwElementState: { default: () => ({}) }
  },
  computed: {
    rowData() {
      return this.content.rowData || [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ];
    },
  },
};
</script>

<style scoped>
.ww-aggrid-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  background: #f5f5f5;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.test-content {
  text-align: center;
  padding: 20px;
}
</style>
