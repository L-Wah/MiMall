<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
@import "./assets/scss/reset.scss";
</style>
<script>
import api from "./api/index";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    getUser() {
      this.axios.get(api.user).then((res) => {
        console.log(res);
        if (res != undefined) {
          this.$store.dispatch("saveUserName", res.username);
        }
      });
    },
    getCartCount() {
      this.axios.get(api.count).then((res) => {
        console.log(res);
        if (res != undefined) {
          this.$store.dispatch("saveCartCount", res);
        }
      });
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
