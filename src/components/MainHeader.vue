<template>
  <div class="wrapper">
    <navigation-bar v-if="showNav" v-on:toggleNavbar="toggleNavbar" class="navigation-bar"/>
    <img src="../assets/graphics-header.svg" alt="header-img" />
    <div class="header-content">
      <div class="navi-icon" v-on:click="toggleNavbar" > 
        <img src="../assets/navicon.svg" alt="" />
      </div>
     <div class="order-icon" @click="toggleOrderButt" v-if="toggleBag">
        <img src="../assets/bag.svg" alt="bag-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue';

export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
        showNav: false,
    };
  },
  methods: {
     toggleNavbar(){
      this.showNav = !this.showNav
    }
  }
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
  }
  .navigation-bar{
    z-index: 1;
    position: absolute;
    width: 100%;
  }
}
</style>