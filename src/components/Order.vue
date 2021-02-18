<template>
  <div class="order" v-if="toggleOrder2">
    <div class="order-icon" @click="toggleOrderButt2">
      <img src="../assets/bag.svg" alt="bag-icon" />
    </div>
    <div class="order-items">
      <font-awesome-icon
        :icon="['fas', 'caret-up']"
        size="2x"
        class="caret-up"
      />
      <ul>
        <li v-for="(item, index) in order" :key="index">
          <div class="order-item">
            <div class="order-title">
              <h3>{{ item.name }}</h3>
              <p>{{ item.price }} kr</p>
            </div>
            <div class="total-item">
              <img
                src="../assets/arrow-up.svg"
                alt="arrow-up"
                @click="increaseItem(index)"
              />
              <p>{{ item.total }}</p>
              <img
                src="../assets/arrow-down.svg"
                alt="arrow-down"
                @click="decreaseItem"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      totalItem: 1,
      toggleOrder2: true,
    };
  },
  computed: {
    ...mapGetters(["order"]),
  },
  methods: {
    increaseItem(index) {
      this.totalItem++;
      this.$store.dispatch("increaseOrder", index);
    },
    decreaseItem() {
      this.totalItem--;
    },
    toggleOrderButt2() {
      this.toggleOrder2 = !this.toggleOrder2;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@300;400&display=swap");
.order {
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  padding: 12px 16px;
  height: 554px;
  top: 0;
  background-color: rgba($color: #000000, $alpha: 0.3);
  .order-icon {
    width: fit-content;
    margin-left: auto;
    border-radius: 100%;
    padding: 12px;
    height: 16px;
    cursor: pointer;
    background-color: #333;
    img {
      width: 16px;
      height: 16px;
    }
  }
  .order-items {
    position: relative;
    background-color: #fff;
    border-radius: 2px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 4px;
    .caret-up {
      right: 10px;
      top: -20px;
      position: absolute;
      color: #fff;
      margin-bottom: -10px;
    }
    ul {
      padding: 0 12px;
      li {
        list-style: none;
        margin: 0 0 24px 0;
        .order-item {
          width: 100%;
          justify-content: space-between;
          display: flex;
          .order-title {
            text-align: left;
            h3 {
              font-family: "PT Serif", sans-serif;
            }
            p {
              font-size: 0.8rem;
            }
          }
          .total-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img {
              cursor: pointer;
            }
            p {
              font-size: 0.7rem;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>