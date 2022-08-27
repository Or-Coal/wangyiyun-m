<template>
  <div class="home">
  <TopNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue'
export default {
  name: "HomeView",
  components: {
    TopNav,
  },
};
</script>
