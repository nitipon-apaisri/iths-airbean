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
        <div class="order-badge" v-if="toggleOrderBadge">
          <p>{{ getPreOrder }}</p>
        </div>
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
    ...mapGetters([
      "toggleBag",
      "toggleOrder",
      "getPreOrder",
      "toggleOrderBadge",
    ]),
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
      .order-badge {
        position: absolute;
        padding: 3px 6px;
        border-radius: 100%;
        background-color: #e76649;
        top: 5px;
        right: 15px;
        p {
          color: #fff;
          font-size: 0.6rem;
          font-weight: bold;
        }
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