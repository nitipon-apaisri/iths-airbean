import Vue from "vue";
import Vuex from "vuex";
import * as DATA from "../api/mock";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      coffeeMenu: [],
      loader: false,
      users: [],
      preOrder: [],
      makeOrder: [],
      ETA: 10,
      toggleBag: false,
      toggleOrder: false,
      toggleOrderId: false,
      allOrdersPrice: [],
      toggelOrderBadge: false,
      orderIndex: 0,
   },
   mutations: {
      register(state, query) {
         let user = new Object();
         user.name = query.name;
         user.email = query.email;
         user.order = [];
         setTimeout(() => {
            user.id = Date.now();
            state.users.push(user);
         }, 100);
      },
      addCoffee(state, index) {
         let order = new Object();
         order.name = state.coffeeMenu[index].title;
         order.price = state.coffeeMenu[index].price;
         order.total = 1;
         order.basePrice = state.coffeeMenu[index].price;
         state.preOrder.push(order);
      },
      increaseOrder(state, index) {
         state.preOrder[index].total++;
         state.preOrder[index].price = state.preOrder[index].basePrice * state.preOrder[index].total;
      },
      decreaseOrder(state, index) {
         if (state.preOrder[index].total !== 0) {
            state.preOrder[index].total--;
            state.preOrder[index].price = state.preOrder[index].basePrice * state.preOrder[index].total;
         }
      },
      toggleBag(state) {
         state.toggleBag = true;
      },
      toggleOrder(state) {
         state.toggleOrder = !state.toggleOrder;
      },
      makeOrder(state, totalCost) {
         let newOrder = new Object();
         newOrder.orderId = Date.now();
         newOrder.totalCost = totalCost;
         newOrder.orderItems = [];
         newOrder.orderDate = "";
         state.preOrder.forEach((r) => newOrder.orderItems.push(r));
         let d = new Date(),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d
               .getFullYear()
               .toString()
               .substr(-2);

         if (month.length < 2) month = "0" + month;
         if (day.length < 2) day = "0" + day;

         newOrder.orderDate = [year, month, day].join("/").toString();
         state.makeOrder.push(newOrder);
         state.ETA = 10;
         state.toggleOrderId = true;
      },
      clearOrder(state) {
         state.makeOrder.forEach((r) => state.users[0].order.push(r));
         state.makeOrder.forEach((r) => state.allOrdersPrice.push(r.totalCost));
         localStorage.setItem("users", JSON.stringify(state.users));
         console.log(JSON.parse(JSON.stringify(state.users[0])));
         state.toggleOrder = false;
         state.toggleBag = false;
         state.preOrder = [];
         state.makeOrder.shift();
      },
      getOrderIndex(state, index) {
         state.orderIndex = index;
      },
   },
   actions: {
      getCoffee({ state }) {
         state.coffeeMenu = [];
         DATA.fetchProducts().forEach((r) => state.coffeeMenu.push(r));
      },
      register({ commit }, query) {
         // DATA.registerUser(query.name, query.email);
         commit("register", query);
      },
      addCoffee({ commit }, index) {
         commit("addCoffee", index);
      },
      increaseOrder({ commit }, index) {
         commit("increaseOrder", index);
      },
      decreaseOrder({ commit }, index) {
         commit("decreaseOrder", index);
      },
      toggleBag({ commit }) {
         commit("toggleBag");
      },
      toggleOrder({ commit }) {
         commit("toggleOrder");
      },
      makeOrder({ commit }, totalCost) {
         commit("makeOrder", totalCost);
      },
      clearOrder({ commit }) {
         commit("clearOrder");
      },
      getOrderIndex({ commit }, index) {
         commit("getOrderIndex", index);
      },
   },
   getters: {
      order(state) {
         let uniq = {};
         let filterArr = state.preOrder.filter((obj) => !uniq[obj.name] && (uniq[obj.name] = true));
         return filterArr;
      },
      totalCost(state) {
         let allPrice = [];
         state.preOrder.forEach((r) => allPrice.push(r.price));
         return allPrice.reduce((a, b) => a + b);
      },
      toggleBag(state) {
         return state.toggleBag;
      },
      toggleOrder(state) {
         return state.toggleOrder;
      },
      countDown(state) {
         if (state.ETA > 0) {
            setTimeout(() => {
               state.ETA--;
            }, 6000);
         }
         return state.ETA;
      },
      getOrderId(state) {
         if (state.makeOrder.length !== 0) {
            return state.makeOrder[state.makeOrder.length - 1].orderId;
         }
      },
      toggleOrderId(state) {
         return state.toggleOrderId;
      },
      coffeeList(state) {
         return state.coffeeMenu;
      },
      getAllOrders(state) {
         return state.users[0].order;
      },
      getAllOrdersPrice(state) {
         return state.allOrdersPrice.reduce((a, b) => a + b);
      },
      getPreOrder(state) {
         if (state.preOrder.length > 6) {
            state.preOrder.length = 6;
            return state.preOrder.length;
         } else {
            return state.preOrder.length;
         }
      },
      toggleOrderBadge(state) {
         if (state.preOrder.length !== 0) {
            return (state.toggelOrderBadge = true);
         } else {
            return state.toggelOrderBadge;
         }
      },
      Index(state) {
         return state.orderIndex;
      },
   },
});
