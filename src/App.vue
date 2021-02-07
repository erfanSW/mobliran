<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: rtl;
  box-sizing: border-box;
}

@font-face {
  font-family: 'IranSans';
  src: url('../public/fonts/IRANSansWeb(FaNum).woff');
}
* {
  font-family: 'IranSans'
}
</style>
