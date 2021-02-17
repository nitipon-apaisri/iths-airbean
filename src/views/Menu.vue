<template>
  <div class="menu">
    <!-- <NavigationBar/> -->
    <HeaderMenu />
    <Menu />
    <Footer />
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
export default {
  components: {
    HeaderMenu,
    Footer,
    Menu,
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
  .content {
    padding: 0 24px;
    ul {
      padding: 0;
      li {
        list-style: none;
        .addCoffee {
          display: flex;
          img {
            align-self: center;
            width: 16px;
            height: 16px;
            background-color: #000;
            border-radius: 100%;
            padding: 8px;
            cursor: pointer;
          }
          .coffee {
            width: 100%;
            margin-left: 20px;
            display: flex;
            justify-content: space-between;
            .coffee-title {
              text-align: left;
              p {
                font-size: 0.8rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>