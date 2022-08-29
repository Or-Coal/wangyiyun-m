<template>
<div>
  <!-- <SwiperView/> -->
  <HomeView/>
  <van-button type="primary" />
</div>
</template>
<script>
  // import SwiperView from '@/views/SwiperView.vue'
  import HomeView from '@/views/HomeView.vue'
  export default{
    components:{
      // SwiperView,
      HomeView
    }
  }
</script>
<style lang="less">
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
.icon{
  width: .5rem;
  height: .5rem;
}
</style>
