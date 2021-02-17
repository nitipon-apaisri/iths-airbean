<template>
  <div class="wrapper">
    <img src="../assets/graphics-header.svg" alt="header-img" />
    <div class="header-content">
      <div class="navi-icon">
        <img src="../assets/navicon.svg" alt="" />
      </div>
      <!-- <NavigationBar/> -->
      <div class="order-icon">
        <img src="../assets/bag.svg" alt="bag-icon" />
      </div>
    </div>
    <Order />
  </div>
</template>

<script>
import Order from "@/components/Order";
export default {
  components: {
    Order,
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
    .navi-icon {
      border-radius: 100%;
      padding: 12px;
      height: 16px;
      background-color: #fff;
      img {
        width: 16px;
        height: 16px;
      }
    }
    .order-icon {
      border-radius: 100%;
      padding: 12px;
      height: 16px;
      background-color: #333;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>