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
      <div class="order-header">
        <h1>Order</h1>
      </div>
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
                @click="decreaseItem(index)"
              />
            </div>
          </div>
        </li>
      </ul>
      <div class="total-cost">
        <div class="inmom">
          <h3>Total</h3>
          <p>inkl moms + drönarleverans</p>
        </div>
        <h3>{{ totalCost }} Kr</h3>
      </div>
      <div class="take-my-money">
        <button @click="makeOrder">Take my money</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      toggleOrder2: true,
    };
  },
  computed: {
    ...mapGetters(["order", "totalCost"]),
  },
  methods: {
    increaseItem(index) {
      this.$store.dispatch("increaseOrder", index);
    },
    decreaseItem(index) {
      this.$store.dispatch("decreaseOrder", index);
    },
    toggleOrderButt2() {
      this.toggleOrder2 = !this.toggleOrder2;
    },
    makeOrder() {
      this.$store.dispatch("makeOrder");
      setTimeout(() => {
        this.$router.push("/status");
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@300;400&display=swap");
button,
h3 {
  font-size: 1.5rem;
}
p {
  font-size: 0.8rem;
}
.order {
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  padding: 12px 16px;
  height: 560px;
  top: 0;
  background-color: rgba($color: #000000, $alpha: 0.85);
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
    border-radius: 4px;
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
    .order-header {
      margin: 12px 0;
    }
    ul {
      max-height: 210px;
      padding: 0 12px;
      overflow: scroll;
      li {
        list-style: none;
        margin: 0 0 24px 0;
        .order-item {
          width: 100%;
          justify-content: space-between;
          display: flex;
          .order-title {
            text-align: left;
          }
          .total-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img {
              cursor: pointer;
            }
            p {
              font-weight: bold;
            }
          }
        }
      }
    }
    .total-cost {
      margin: 32px 0 16px 0;
      padding: 0 12px;
      display: flex;
      justify-content: space-between;
      .inmom {
        text-align: left;
      }
    }
    .take-my-money {
      margin: 32px 0;
      button {
        cursor: pointer;
        background-color: #2f2926;
        color: #fff;
        font-weight: bold;
        padding: 8px 24px;
        border-radius: 24px;
        border: 1px solid transparent;
      }
    }
  }
}
</style>