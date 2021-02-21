<template>
  <div class="order-wrapper">
    <h1>Orderhistorik</h1>
    <ul>
      <li v-for="(order, index) in orderHistory" :key="index">
        <h3 class="order-id">{{ order.orderId }}</h3>
        <p class="order-date">{{ orderDate }}</p>
        <div class="sum">
          <p class="order-text">total ordersumma</p>
          <p class="order-sum">{{ orderSum }} kr</p>
        </div>
      </li>
    </ul>
    <div class="total-wrapper">
      <p class="total-text">Totalt spenderat</p>
      <p class="total-sum">{{ totalOrderSum }} kr</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderDate: "20/03/06",
      orderSum: "443",
      totalOrderSum: "443",
    };
  },
  computed: {
    orderHistory() {
      return this.$store.state.users[0].order;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

h1 {
  font-family: "PT Serif", serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 120%;
  padding-bottom: 15px;
}

h3 {
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 120%;
  color: rgba(255, 255, 255, 0.7);
}

ul {
  list-style: none;
}

li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 5px 0;
}

.order-wrapper {
  text-align: left;
  padding: 0 30px;
}

.order-id,
.order-date {
  display: inline;
}

.order-date {
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: rgba(255, 255, 255, 0.7);
  float: right;
}

.order-text,
.order-sum {
  display: inline;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;
  color: rgba(255, 255, 255, 0.5);
}

.order-sum,
.total-sum {
  float: right;
}

.total-wrapper {
  display: block;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
}

.total-text,
.total-sum {
  display: inline;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 120%;
  color: rgba(255, 255, 255, 0.8);
}
</style>