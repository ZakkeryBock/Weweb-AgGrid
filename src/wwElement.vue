<template>
  <div class="test-container">
    <p>AG Grid Component Works!</p>
    <p v-if="uid">UID: {{ uid }}</p>
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
    },
    wwElementState: {
      type: Object,
      required: true
    },
    wwEditorState: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.test-container {
  padding: 20px;
  background: #4CAF50;
  color: white;
  text-align: center;
  border-radius: 8px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.test-container p {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}
</style>
