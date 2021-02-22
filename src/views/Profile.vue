<template>
  <div class="wrapper">
    <Main-header />
    <div class="profile-container">
      <User />
      <br />
      <Order-history @toggleOrderInfo="activeOrderDetails" />
      <OrderDetails
        :index="Index"
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
import { mapGetters } from "vuex";
export default {
  components: { MainHeader, Footer, User, OrderHistory, OrderDetails },
  data() {
    return {
      toggleOrderDetails: false,
    };
  },
  computed: {
    ...mapGetters(["Index"]),
  },
  methods: {
    activeOrderDetails() {
      this.toggleOrderDetails = !this.toggleOrderDetails;
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