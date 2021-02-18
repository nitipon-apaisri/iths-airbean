<template>
  <section class="home">
    <img src="@/assets/airbean-landing.svg" alt="airbean logo">
  </section>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home{
  height: 100vh;
  background: url('../assets/intro-graphic-left.svg') top left no-repeat,
    url('../assets/intro-graphic-right.svg') top right no-repeat
  ;
  background-color: #0E927D;
  background-size: contain;

  display: grid;
  place-items: center;
}
</style>
