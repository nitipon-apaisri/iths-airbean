<template>
  <div class="menu">
    <!-- <NavigationBar/> -->
    <img src="../assets/graphics-header.svg" alt="header-img" />
    <div class="content">
      <h1>Menu</h1>
      <ul>
        <li v-for="(item, index) in Coffee" :key="index">
          {{ item.title }}
        </li>
      </ul>
      <button @click="getCoffee">Click!</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
  methods: {
    getCoffee() {
      this.$store.dispatch("getCoffee");
    },
  },
  computed: {
    Coffee() {
      return this.$store.state.coffeeMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: #f3e4e1;
  position: relative;

  .content {
    ul {
      padding: 0;
      li {
        list-style: none;
      }
    }
  }
}
</style>