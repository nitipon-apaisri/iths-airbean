<template>
  <section class="home">
    <router-link to="/menu">
      <img src="@/assets/airbean-landing.svg" alt="airbean logo" />
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    setTimeout(() => {
      this.$router.push("/register");
    }, 900);
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  background: url("../assets/intro-graphic-left.svg") top left no-repeat,
    url("../assets/intro-graphic-right.svg") top right no-repeat;
  background-color: #0e927d;
  background-size: contain;

  display: grid;
  place-items: center;
}
</style>
