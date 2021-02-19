<template>
  <section class="status">
    <p class="order-number">Ordernummer: #{{ getOrderId }}</p>
    <img src="@/assets/drone.svg" alt="" />
    <h1 v-if="countDown > 0">Din beställning är påväg!</h1>
    <h1 v-else>Din beställning är framme!</h1>
    <p v-if="countDown > 0" class="timer">
      <strong>{{ countDown }}</strong> minuter
    </p>
    <button @click="clearOrder" class="cta">Ok, cool!</button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  beforeMount() {
    if (this.$store.state.users.length == 0) {
      this.$router.push("/register");
    }
  },
  computed: {
    ...mapGetters(["countDown", "getOrderId"]),
  },
  methods: {
    clearOrder() {
      this.$store.dispatch("clearOrder");
      setTimeout(() => {
        this.$router.push("/menu");
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
.status {
  height: 560px;

  background-color: #e5674e;
  color: white;
  padding: 5rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1,
  .cta {
    font-family: "PT Serif", serif;
  }
  h1 {
    font-size: 2.2rem;
  }
  p {
    font-family: "Work Sans", Arial, Helvetica, sans-serif;

    &.timer {
      font-size: 1.4rem;
    }
  }

  .order-number {
    opacity: 70%;
  }

  .cta {
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 2rem;
    padding: 0.7rem 2rem;

    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    text-decoration: none;

    &:active {
      background-color: #0e927d;
    }
  }
}
</style>