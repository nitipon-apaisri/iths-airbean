<template>
  <div class="extra-order-details">
    <img
      src="../assets/close.svg"
      alt="close"
      @click="$emit('closeOrderDetails')"
      class="close-butt"
    />
    <div class="order-detail">
      <img
        src="../assets/graphics-header.svg"
        alt="header-img"
        class="bill-header-img"
      />
      <div class="bill">
        <h3>#{{ getAllOrders[index].orderId }}</h3>
        <ul>
          <li
            v-for="(item, index) in getAllOrders[index].orderItems"
            :key="index"
          >
            <div class="order-info">
              <p>{{ item.name }}.......... {{ item.total }}</p>
              <p>{{ item.price }} kr</p>
            </div>
          </li>
        </ul>
        <hr />
        <div class="order-total">
          <h3>Total</h3>
          <h3>{{ getAllOrders[index].totalCost }} kr</h3>
        </div>
      </div>
      <img
        src="../assets/graphics-footer.svg"
        alt="header-img"
        class="bill-footer-img"
      />
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
    ...mapGetters(["getAllOrders"]),
  },
};
</script>

<style lang="scss" scoped>
.extra-order-details {
  background-color: rgba($color: #000000, $alpha: 0.85);
  position: absolute;
  box-sizing: border-box;
  top: 0;
  padding: 16px;
  left: 0;
  right: 0;
  height: 100%;
  text-align: left;
  img.close-butt {
    margin-top: -4px;
    border-radius: 100%;
    padding: 12px;
    height: 16px;
    background-color: #fff;
    cursor: pointer;
  }
  .order-detail {
    text-align: left;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    background-color: #f3e4e1;
    color: #333;
    img.bill-header-img {
      width: 100%;
      border-radius: 4px 4px 0 0;
    }
    .bill {
      padding: 0 16px 16px;
      ul {
        padding: 0;
        li {
          list-style: none;
          margin: 8px 0;
          .order-info {
            display: flex;
            justify-content: space-between;
            p {
              letter-spacing: 0.0125rem;
            }
          }
        }
      }
      .order-total {
        margin: 12px 0 0 0;
        display: flex;
        justify-content: space-between;
      }
    }
    img.bill-footer-img {
      width: 100%;
      margin-bottom: -6px;
      border-radius: 0 0 4px 4px;
    }
  }
}
</style>