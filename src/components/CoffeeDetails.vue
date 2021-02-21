<template>
  <div class="coffee-details">
    <div class="coffee-detail">
      <img src="../assets/close.svg" alt="close-img" @click="closeDetails" />
      <div class="the-coffee">
        <div class="mock-img"></div>
        <div class="desc">
          <h2>{{ coffeeList[index].title }}</h2>
          <p>
            amet dictum sit amet justo donec enim diam vulputate ut pharetra sit
            amet aliquam id diam maecenas ultricies mi eget
          </p>
          <h3>{{ coffeeList[index].price }} Kr</h3>
        </div>
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
  methods: {
    closeDetails() {
      this.$emit("closeDetails");
    },
  },
};
</script>

<style lang="scss" scoped>
.coffee-details {
  width: 375px;
  height: 560px;
  box-sizing: border-box;
  background-color: rgba($color: #000000, $alpha: 0.85);
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  .coffee-detail {
    padding: 12px 16px;
    img {
      background-color: #fff;
      padding: 8px;
      border-radius: 20px;
      display: flex;
      width: 24px;
      cursor: pointer;
    }
    .the-coffee {
      max-height: 400px;
      margin: 16px 0;
      border-radius: 4px;
      padding: 12px;
      background-color: #fff;
      .mock-img {
        width: 100%;
        background-color: silver;
        height: 256px;
        border-radius: 4px;
      }
      .desc {
        text-align: left;
        margin: 12px 0 0 0;
        h2 {
          letter-spacing: 0.025rem;
        }
        p {
          margin: 12px 0;
          font-size: 0.85rem;
        }
        h3 {
          text-align: right;
          margin: 16px 0 0 0;
        }
      }
    }
  }
}
</style>