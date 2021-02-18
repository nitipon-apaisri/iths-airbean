import Vue from "vue";
import Vuex from "vuex";
import * as DATA from "../api/mock";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      coffeeMenu: [],
      loader: false,
      users: [],
      order: [],
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
      makeOrderCoffee(state, index) {
         let order = new Object();
         order.name = state.coffeeMenu[index].title;
         order.price = state.coffeeMenu[index].price;
         order.total = 1;
         order.basePrice = state.coffeeMenu[index].price;
         state.order.push(order);
      },
      increaseOrder(state, index) {
         state.order[index].total++;
         state.order[index].price = state.order[index].basePrice * state.order[index].total;
      },
      decreaseOrder(state, index) {
         if (state.order[index].total !== 0) {
            state.order[index].total--;
            state.order[index].price = state.order[index].basePrice * state.order[index].total;
         }
      },
      toggleBag(state) {
         state.toggleBag = true;
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
      orderCoffee({ commit }, index) {
         commit("makeOrderCoffee", index);
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
   },
   getters: {
      order(state) {
         let uniq = {};
         let filterArr = state.order.filter((obj) => !uniq[obj.name] && (uniq[obj.name] = true));
         return filterArr;
      },
      totalCost(state) {
         let allPrice = [];
         state.order.forEach((r) => allPrice.push(r.price));
         return allPrice.reduce((a, b) => a + b);
      },
      toggleBag(state) {
         return state.toggleBag;
      },
   },
});
