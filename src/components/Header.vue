<template>
  <div>
    <div class="header">
      <ul>
        <li class="header-title">
          فروشگاه مبلیران
        </li>
      </ul>
      <ul class="header-mt">
        <li>
          محصولات ↓
        </li>
        <li>
          اتاق ها
        </li>
        <li>
          طراحی اختصاصی
        </li>
      </ul>
      <ul class="header-mt">
        <li>
          <img src="../assets/Profile.svg" />
        </li>
        <li>
          <img src="../assets/Search.svg" />
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style css-scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  font-size: 15px;
}

li:not(:first-child) {
  margin-right: 31px;
}

.logo {
  width: 39px;
  height: 34px;
}

.header {
  color: white;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 30px;
  right: 0;
  left: 0;
}

.header:after {
  color: black;
}

.header-title {
  font-size: 30px;
  font-weight: 400;
}

.header-mt {
  margin-top: 30px;
}
</style>
