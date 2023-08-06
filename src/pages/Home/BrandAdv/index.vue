<template>
<!-- 商标 -->
  <div class="brand">
    <div class="py-container">
      <ul class="brand-list"> 
        <li v-for="item in $store.state.adv.brandsList" :key="item.id" class="brand-item">
          <img :src="item.imgUrl" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandAdv",
  mounted(){
    this.$store.dispatch("adv/getBrandsListAsync");
    
  }
};
</script>

<style lang="less" scoped>
.brand {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .brand-list {
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      .brand-item {
        width: 120px;
        float: left;
        height: 37px;

        img {
          border-left: 1px dotted #ccc;
          padding: 0 10px;
          width: 100%;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>