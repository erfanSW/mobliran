<template>
  <div class="slider-container">
    <button type="button" class="slider-btn">
      <img src="../assets/Arrow - Right.svg" />
    </button>
    <button type="button" class="slider-btn">
      <img src="../assets/Arrow - Left - Copy.svg" />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slider-btn {
  width: 68px;
  height: 68px;
  border: none;
  margin-right: 40px;
  margin-top: -100px;
}

.slider-btn:hover {
  cursor: pointer;
}

.slider-btn:focus {
  outline: none;
}

.slider-btn:nth-child(1) {
  opacity: 0.6;
}

.slider-btn:nth-child(2) {
  background-color: white;
}
</style>
