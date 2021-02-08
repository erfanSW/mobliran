<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="(item, index) in itemList" :key="index">
        <a :href="item.href">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    itemList: {
      type: Array,
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0px;
}

li {
  list-style: none;
  margin-top: 10px;
}

a {
  text-decoration: none;
  color: black;
}
</style>
