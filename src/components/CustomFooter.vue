<template>
  <footer class="footer">
    <custom-footer-description />
    <custom-footer-column title="فروشگاه" :item-list="itemList[0]" />
    <custom-footer-column title="اطلاعات" :item-list="itemList[1]" />
    <custom-footer-column title="تماس با ما" :item-list="itemList[2]" />
  </footer>
</template>

<script>
export default {
  components: {
    CustomFooterDescription: () => import("./CustomFooterDescription"),
    CustomFooterColumn: () => import("./CustomFooterColumn"),
  },
  data() {
    return {
      itemList: [
        [
          {
            text: "فروش",
            href: "http://www.google.com",
          },
          {
            text: "ارسال",
            href: "http://www.google.com",
          },
          {
            text: "تماس با ما",
            href: "http://www.google.com",
          },
        ],
        [
          {
            text: "کارت هدیه",
            href: "http://www.google.com",
          },
          {
            text: "شعبه مبلیران",
            href: "http://www.google.com",
          },
          {
            text: "خبرنامه",
            href: "http://www.google.com",
          },
          {
            text: "عضویت",
            href: "http://www.google.com",
          },
          {
            text: "بازخوردها",
            href: "http://www.google.com",
          },
        ],
        [
          {
            text: "azar@nemali.com",
            href: "mailto:http://www.google.com",
          },
          {
            text: "خط ویژه : 0212966",
            href: "tel:0212966",
          },
        ],
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
}

@media (max-width: 1000px) {
  .footer {
    flex-direction: column;
  }
}
</style>
