<template>
  <div class="flex justify-space-between">
    <h3>منتخب محصولات</h3>
    <div class="header-action flex">
      <img src="../assets/Arrow - Right.svg" />
      <img src="../assets/Arrow - Left.svg" class="img-filter" />
      <button class="more-btn">
        نمایش بیشتر
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.justify-space-between {
  justify-content: space-between;
  margin-top: 100px;
}

.more-btn {
  width: 140px;
  border: 0.5px solid #eeeeee;
  background-color: white;
  border-radius: 40px;
  margin-right: 10px;
}

.img-filter {
  filter: invert(0.31);
}
</style>
