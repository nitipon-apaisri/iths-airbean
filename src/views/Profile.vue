<template>
  <div class="wrapper">
    <Main-header />
    <div class="profile-container">
      <User />
      <br />
      <Order-history />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import MainHeader from "../components/MainHeader.vue";
import OrderHistory from "../components/OrderHistory.vue";
import User from "../components/User.vue";
export default {
  components: { MainHeader, Footer, User, OrderHistory },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #2f2926;
}

.profile-container {
  color: #fff;
  height: 380px;
}
</style>