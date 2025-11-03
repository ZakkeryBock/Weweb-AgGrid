<template>
  <div class="black-box">
    <p>Test Component</p>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    wwElementState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true }
  }
};
</script>

<style scoped>
.black-box {
  background: black;
  color: white;
  padding: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
