<template>
  <div class="wrapper">
    <navigation-bar
      v-if="showNav"
      v-on:toggleNavbar="toggleNavbar"
      class="navigation-bar"
    />
    <img src="../assets/graphics-header.svg" alt="header-img" />
    <div class="header-content">
      <div class="navi-icon" v-on:click="toggleNavbar">
        <img src="../assets/navicon.svg" alt="" />
      </div>
      <div class="order-icon" @click="toggleOrderButt" v-if="toggleBag">
        <img src="../assets/bag.svg" alt="bag-icon" />
      </div>
    </div>
    <Order v-if="toggleOrder" />
  </div>
</template>

<script>
import Order from "@/components/Order.vue";
import NavigationBar from "./NavigationBar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Order,
    NavigationBar,
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleOrderButt() {
      this.$store.dispatch("toggleOrder");
    },
    toggleNavbar() {
      this.showNav = !this.showNav;
    },
  },
  computed: {
    ...mapGetters(["toggleBag", "toggleOrder"]),
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
  .navigation-bar {
    z-index: 1;
    position: absolute;
    width: 100%;
  }
  .navigation-bar {
    z-index: 1;
    position: absolute;
    width: 100%;
  }
}
</style>