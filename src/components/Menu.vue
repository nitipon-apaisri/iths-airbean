<template>
  <div class="content">
    <h1>Menu</h1>
    <div class="loader" v-if="loader">
      <img src="../assets/loader.png" alt="loader" />
    </div>
    <ul>
      <li v-for="(item, index) in coffeeList" :key="index">
        <div class="addCoffee">
          <img
            src="../assets/add.svg"
            alt="add-butt"
            @click="orderCoffee(index)"
          />
          <div class="coffee">
            <div class="coffee-title" @click="toggleCoffeeDetails(index)">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
            <div class="coffee-price">
              <h3>{{ item.price }} SEK</h3>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <CoffeeDetails
      :index="index"
      v-if="coffeeDetails"
      @closeDetails="closeDetails"
    />
  </div>
</template>

<script>
import CoffeeDetails from "./CoffeeDetails";
import { mapGetters } from "vuex";
export default {
  components: {
    CoffeeDetails,
  },
  data() {
    return {
      loader: false,
      index: 0,
      coffeeDetails: false,
    };
  },
  beforeMount() {
    if (this.coffeeList.length < 1) {
      this.loader = true;
      setTimeout(() => {
        this.$store.dispatch("getCoffee");
        this.loader = false;
      }, 800);
    } else {
      this.loader = false;
    }
    if (this.$store.state.users.length == 0) {
      this.$router.push("/register");
    }
  },
  methods: {
    orderCoffee(index) {
      this.$store.dispatch("addCoffee", index);
      setTimeout(() => {
        this.$store.dispatch("toggleBag");
      }, 200);
    },
    toggleCoffeeDetails(index) {
      this.index = index;
      this.coffeeDetails = true;
    },
    closeDetails() {
      this.coffeeDetails = false;
    },
  },
  computed: {
    ...mapGetters(["coffeeList"]),
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 24px;
  .loader {
    display: flex;
    height: 310px;
    img {
      margin: auto;
    }
  }
  ul {
    padding: 0;
    li {
      margin-bottom: 12px;
      list-style: none;
      cursor: pointer;
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
</style>