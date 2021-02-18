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
      makeOrder: {},
      toggleBag: false,
   },
   mutations: {
      register(state, query) {
         let user = new Object();
         user.name = query.name;
         user.email = query.email;
         setTimeout(() => {
            user.id = Date.now();
            state.users.push(user);
            localStorage.setItem("users", JSON.stringify(state.users));
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
      makeOrder(state) {
         console.log(state.makeOrder);
      },
   },
   actions: {
      getCoffee({ state }) {
         state.coffeeMenu = [];
         DATA.fetchProducts().forEach((r) => state.coffeeMenu.push(r));
         console.log(JSON.parse(JSON.stringify(state.coffeeMenu)));
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
      makeOrder({ commit }) {
         commit("makeOrder");
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
   },
});
