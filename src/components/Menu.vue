<template>
  <div class="content">
    <h1>Menu</h1>
    <img src="../assets/loader.png" alt="loader" v-if="loader" />
    <ul>
      <li v-for="(item, index) in Coffee" :key="index">
        <div class="addCoffee">
          <img src="../assets/add.svg" alt="add-butt" />
          <div class="coffee">
            <div class="coffee-title">
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
    <button @click="getCoffee">Click!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: false,
    };
  },
  methods: {
    getCoffee() {
      this.loader = true;
      setTimeout(() => {
        this.$store.dispatch("getCoffee");
        this.loader = false;
      }, 300);
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
</style>