<template>
  <div>
    <div class="main">
      <custom-title />
      <div class="flex stick-in-bottom">
        <div class="features flex bg-white">
          <feature-container
            id="first-feature"
            img="Group 208.png"
            title="ارسال رایگان"
            description="برای خرید های بالای ۱ میلیون تومان"
          />
          <feature-container
            img="noun_Happy_1563582.png"
            title="رضایت بالای مشتریان"
            description="رضایت بالای مشتریان ما گواه این موضوع است"
          />
          <feature-container
            img="noun_guarantee_2519048.png"
            title="اصالت تضمین شده"
            description="۲ سال گارانتی برای هریک از محصولات فروشگاه ما"
          />
        </div>
        <slider-actions class="silder-actions" />
      </div>
    </div>
    <div class="main-container">
      <gallery-middle />
      <gallery-main class="gallery-main" />
      <custom-footer />
    </div>
    <div class="copyright">طراحی شده توسط علی پیرانی</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    CustomTitle: () => import("../components/CustomTitle"),
    SliderActions: () => import("../components/SliderActions"),
    FeatureContainer: () => import("../components/FeatureContainer"),
    GalleryMiddle: () => import("../components/GalleryMiddle"),
    GalleryMain: () => import("../components/GalleryMain"),
    CustomFooter: () => import("../components/CustomFooter"),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* general classes */
.flex {
  display: flex;
  flex-wrap: wrap;
}

.mt-43 {
  margin-top: 43px;
}

.bg-white {
  background-color: white;
}

/* specific selectors */

.main {
  background-image: url("../assets/Group 4524.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 930px;
  position: relative;
}

.stick-in-bottom {
  margin-top: 265px;
}

.features {
  height: 156px;
  border-top-left-radius: 400px;
  z-index: 1000;
  padding: 30px 0px 0px 60px;
}

.silder-actions {
  margin-top: 100px;
}

.main-container {
  width: 80%;
  margin: auto;
  margin-top: 100px;
}

.copyright {
  text-align: center;
  color: #9b9b9b;
  border-top: 1px solid #eeeeee;
  font-size: 12px;
  padding: 20px;
}

@media (max-width: 1400px) {
  .stick-in-bottom {
    display: block;
    margin-top: 85px;
  }

  .main {
    height: auto;
  }

  .features {
    height: auto;
    border-radius: 0px;
    opacity: 0.9;
    justify-content: center;
  }

  .main-container {
    margin-top: 400px;
  }

  .silder-actions {
    margin-top: 140px;
    display: flex;
    justify-content: center;
  }

  .gallery-main {
    margin-top: 400px;
  }
}

@media (min-width: 400px) and (max-width: 768px) {
  .features {
    flex-flow: column;
  }
}
</style>
