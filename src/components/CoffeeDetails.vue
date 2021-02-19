<template>
  <div class="coffee-details">
    <div class="coffee-detail">
      <img src="../assets/close.svg" alt="close-img" />
      <div class="the-coffee">
        <h2>{{ coffeeList[index].title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    index: Number,
  },
  computed: {
    ...mapGetters(["coffeeList"]),
  },
};
</script>

<style lang="scss" scoped>
.coffee-details {
  width: 100%;
  height: 159%;
  box-sizing: border-box;
  background-color: rgba($color: #000000, $alpha: 0.85);
  position: absolute;
  top: -119px;
  left: 0;
  .coffee-detail {
    padding: 12px 16px;
    img {
      background-color: #fff;
      padding: 8px;
      border-radius: 20px;
      display: flex;
      width: 24px;
    }
    .the-coffee {
      margin: 16px 0;
      border-radius: 4px;
      padding: 12px;
      background-color: #fff;
      h2 {
        letter-spacing: 0.025rem;
        text-align: left;
      }
    }
  }
}
</style>