<template>
  <div class="wrapper">
    <Main-header />
    <div class="profile-container">
      <User />
      <br />
      <Order-history @toggleOrderDetail="activeOrderDetails(index)" />
      <OrderDetails
        :index="index"
        v-if="toggleOrderDetails"
        @closeOrderDetails="toggleOrderDetail"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import MainHeader from "../components/MainHeader.vue";
import OrderHistory from "../components/OrderHistory.vue";
import OrderDetails from "../components/OrderDetails";
import User from "../components/User.vue";
export default {
  components: { MainHeader, Footer, User, OrderHistory, OrderDetails },
  data() {
    return {
      toggleOrderDetails: false,
      index: 0,
    };
  },
  methods: {
    activeOrderDetails(index) {
      this.toggleOrderDetails = !this.toggleOrderDetails;
      this.index = index;
    },
    toggleOrderDetail() {
      this.toggleOrderDetails = !this.toggleOrderDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background-color: #2f2926;
}

.profile-container {
  color: #fff;
  height: 380px;
}
</style>