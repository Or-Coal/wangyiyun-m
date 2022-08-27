<template>
  <div class="topNav">
    <div class="nav_left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#tou-tiaogengduo"></use>
      </svg>
    </div>
    <div class="navContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="nav_right">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#tou-tiaosousuo"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
    .topNav{
        width: 100%;
        height: 1rem;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .navContent{
            width: 65%;
              display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .36rem;
        .active{
            font-weight:900;
        }
        }
    }
</style>