<template>
  <div class="flex">
    <img src="../assets/noun_cloth_2129414.png" alt="" />
    <div class="container">
      <h3 class="title">محصولات</h3>
      <div class="description">
        <p>
          مبلمان میران با کیفیت بالا ساخته شده و سازگار با محیط زیست هستند .
        </p>
        <p>
          برای آپارتمان های مدرن و مینیمال طراحی شده است
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}

.title:before {
  color: #2072ff;
  content: "کاتالوگ ";
}

.container {
  margin-top: -20px;
  margin-right: 20px;
}

.description {
  color: #9e9e9e;
  color: 11px;
}

@media (max-width: 1000px) {
  .container {
    margin-right: 0px;
    margin-top: 20px;
  }
}
</style>
