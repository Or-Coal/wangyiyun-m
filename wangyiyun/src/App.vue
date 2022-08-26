<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

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
