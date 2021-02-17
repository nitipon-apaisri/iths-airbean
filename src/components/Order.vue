<template>
  <div class="order">
    <ul>
      <li v-for="(item, index) in order" :key="index">
        <div class="order-item">
          <div class="order-title">
            <h3>{{ item.name }}</h3>
            <p>{{ item.price * orderCoffee.totalItem }} kr</p>
          </div>
          <div class="total-item">
            <img
              src="../assets/arrow-up.svg"
              alt="arrow-up"
              @click="increaseItem"
            />
            <p>{{ orderCoffee.totalItem }}</p>
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
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      orderCoffee: {
        price: 0,
        totalItem: 1,
      },
    };
  },
  computed: {
    ...mapGetters(["order"]),
  },
  methods: {
    increaseItem() {
      this.orderCoffee.totalItem++;
    },
    decreaseItem() {
      this.orderCoffee.totalItem--;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@300;400&display=swap");
.order {
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
          p {
            font-size: 0.7rem;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>