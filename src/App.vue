<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
  data() {
    return {
      search: "",
    }
  }
};
</script>
