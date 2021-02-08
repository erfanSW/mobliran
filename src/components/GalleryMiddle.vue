<template>
  <div class="custom-container">
    <div class="item-container">
      <img class="item-img" src="../assets/m1.png" />
      <div class="item">
        <p class="item-title">تعریف مجدد طراحی مدرن</p>
        <button class="item-btn">مشاهده بیشتر</button>
      </div>
    </div>
    <div class="item-container">
      <img class="item-img" src="../assets/b3.png" />
      <div class="item">
        <p class="item-title">مجموعه جدید اکنون در دسترس است</p>
        <button class="item-btn">نمایش همه</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 300px;
}

.item-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.item-container:nth-child(odd) {
  background-color: #81c4ff;
}

.item-container:nth-child(even) {
  flex-direction: row-reverse;
  background-color: #ffc481;
}

.item-img {
  width: 350px;
  height: 350px;
}

.item {
  width: 200px;
}

.item:nth-child(even) {
  margin-right: 20px;
}

.item-title {
  color: white;
  font-size: 20px;
}

.item-btn {
  border: none;
  background-color: white;
  border-radius: 40px;
  font-size: 13px;
  padding: 13px;
  cursor: pointer;
}

.item-btn:focus {
  outline: none;
  border: none;
}

@media (max-width: 760px) {
  .item-img {
    width: auto;
    height: auto;
  }

  .item {
    text-align: center;
    padding: 10px;
    justify-content: center;
    width: auto;
  }

  .item-container {
    justify-content: center;
  }
}
</style>
