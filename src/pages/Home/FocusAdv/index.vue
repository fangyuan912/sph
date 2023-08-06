<template>
  <div class="center">
    <!--banner轮播-->
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        ><img src="/images/banner1.jpg"
      /></swiper-slide>
      <swiper-slide
        ><img src="/images/banner2.jpg"
      /></swiper-slide>
      <swiper-slide
        ><img src="/images/banner3.jpg"
      /></swiper-slide>
      <swiper-slide
        ><img src="/images/banner4.jpg"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
  <!-- <img src="../../../assets/images/home/banner1.jpg" /> -->
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "FocusAdv",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted(){
    this.$store.dispatch("adv/getFocusListAsync");
  }
};
</script>

<style lang="less" scoped>
.center {
  box-sizing: border-box;
  width: 740px;
  height: 100%;
  padding: 5px;
  float: left;
  .swiper{
        height:100%;
        img{
            width:100%;
        }
    }
}
</style>