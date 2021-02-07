<template>
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
</template>

<script>
export default {

}
</script>

<style>

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
  display: flex;
  justify-content: space-around;
  top: 0;
  right: 0;
  left: 0;
  background-color: ;
}

.header-title {
  font-size: 30px;
  font-weight: bold;
}

.header-mt {
  margin-top: 30px;
}

</style>