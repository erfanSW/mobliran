<template>
  <div>
    <gallery-main-header />
    <div class="container" id="products">
      <div
        class="item-container"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="item">
          <img :src="product.img" alt="" />
          <div class="item-off" v-if="product.offPercent">
            {{ product.offPercent }}
          </div>
        </div>
        <div class="item-title">
          {{ product.title }}
        </div>
        <div class="item-price flex">
          <div v-if="product.offPrice" class="item-off-price">
            {{ product.offPrice }}
          </div>
          <div :class="{ lined: product.offPrice }">{{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    GalleryMainHeader: () => import("./GalleryMainHeader"),
  },
  data() {
    return {
      products: [
        {
          title: "مبل نوع اول",
          price: "15,000,000",
          offPrice: "",
          offPercent: "",
          img: require("../assets/Bez nazwy-1.png"),
        },
        {
          title: "مبل نوع دوم",
          price: "15,000,000",
          offPrice: "",
          offPercent: "",
          img: require("../assets/Bez nazwy-2.png"),
        },
        {
          title: "مبل نوع سوم",
          price: "15,000,000",
          offPrice: "11,000,000",
          offPercent: "30%",
          img: require("../assets/Bez nazwy-3.png"),
        },
        {
          title: "مبل نوع چهارم",
          price: "15,000,000",
          offPrice: "",
          offPercent: "",
          img: require("../assets/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item-container {
  margin: 10px;
}

.item {
  position: relative;
  margin-top: 50px;
  background-color: #ebebeb;
  width: 265px;
  height: 434px;
}

.item-off {
  position: absolute;
  top: 25px;
  left: 22px;
  background-color: #ff0000;
  color: white;
  font-size: 12px;
  padding: 5px;
  width: 49px;
  text-align: center;
  border-radius: 40px;
}

.item-title {
  color: #8a8989;
  margin-top: 40px;
}

.item-price {
  font-size: 18px;
  margin-top: 5px;
}

.item-off-price {
  color: red;
  margin-left: 30px;
}

.lined {
  text-decoration: line-through;
  color: #dbdbdb;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
