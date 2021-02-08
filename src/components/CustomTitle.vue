<template>
  <div class="custom-title-link">
    <p class="custom-title">
      خانه رویایی خود را بسازید
    </p>
    <a class="custom-link" href="#products">
      <img class="rounded-badge" src="../assets/Arrow - Left.svg" />
      خرید کنید
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-title-link {
  max-width: 750px;
  overflow-x: hidden;
  color: white;
}

.custom-title {
  text-overflow: clip;
  word-wrap: normal;
  font-size: 65px;
  margin-top: 230px;
  margin-right: 320px;
}

.custom-link {
  display: flex;
  float: left;
  font-size: 20px;
  margin-top: -90px;
  text-decoration: none;
  color: white;
}

.custom-link:hover {
  cursor: pointer;
}

.rounded-badge {
  border-radius: 50px;
  width: 20px;
  height: 20px;
  font-weight: 600;
  background-color: #1a6eff;
  color: white;
  padding: 5px;
  margin-left: 10px;
}

@media (max-width: 800px) {
  .custom-title-link {
    width: 300px;
  }

  .custom-title {
    margin-top: 250px;
    margin-right: 10px;
    font-size: 20px;
  }

  .custom-link {
    margin-top: 0px;
    float: right;
    margin-right: 115px;
    text-align: center;
    font-size: 15px;
  }
}
</style>
