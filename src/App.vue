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
      this.axios.get("/user").then((res) => {
        console.log(res)
        if(res!=undefined){
          this.$store.dispatch('saveUserName',res.username)
        }
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res) => {
        console.log(res)
        if(res!=undefined){
          this.$store.dispatch('saveCartCount',res)
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
