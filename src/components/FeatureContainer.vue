<template>
  <div class="flex container">
    <img class="img" :src="require(`../assets/${img}`)" />
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style scoped>
.container {
  margin-right: 90px;
}

.img {
  width: 20px;
  height: 20px;
  background-color: #e1ecff;
  padding: 10px;
  border-radius: 10px;
}

.content {
  margin-right: 34px;
}

.description {
  font-size: 13px;
  color: #b8b8b8;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: clip;
}

@media (max-width: 1400px) {
  .container {
    margin: 40px;
  }

  .content {
    width: 100%;
    margin-right: 0px;
    margin-top: 20px;
  }

  .title {
    font-size: 15px;
  }
}
</style>
