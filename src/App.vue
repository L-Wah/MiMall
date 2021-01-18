<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
@import "./assets/scss/reset.scss";
</style>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    getUser() {
      this.axios.get("/user").then((res) => {});
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res) => {});
    },
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },
};
</script>
