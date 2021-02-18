<template>
  <div class="wrapper">
    <img src="../assets/graphics-header.svg" alt="header-img" />
    <div class="header-content">
      <div class="navi-icon">
        <img src="../assets/navicon.svg" alt="" />
      </div>
      <!-- <NavigationBar/> -->
      <div class="order-icon" @click="toggleOrderButt" v-if="toggleBag">
        <img src="../assets/bag.svg" alt="bag-icon" />
      </div>
    </div>
    <Order v-if="toggleOrder" />
  </div>
</template>

<script>
import Order from "@/components/Order.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Order,
  },
  data() {
    return {
      toggleOrder: false,
    };
  },
  methods: {
    toggleOrderButt() {
      this.toggleOrder = !this.toggleOrder;
    },
  },
  computed: {
    ...mapGetters(["toggleBag"]),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  .header-content {
    top: 0;
    box-sizing: border-box;
    padding: 12px 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    .header-icons {
      border-radius: 100%;
      padding: 12px;
      height: 16px;
      cursor: pointer;
    }
    .navi-icon {
      @extend .header-icons;
      background-color: #fff;
      img {
        width: 16px;
        height: 16px;
      }
    }
    .order-icon {
      @extend .header-icons;
      background-color: #333;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>