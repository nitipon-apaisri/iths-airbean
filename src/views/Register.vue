<template>
  <div class="register">
    <img src="../assets/graphics-header.svg" alt="header-img" />
    <!-- <NavigationBar/> -->
    <Register />
  </div>
</template>

<script>
import Register from "@/components/RegisterForm";
export default {
  components: {
    Register,
  },
};
</script>

<style lang="scss" scoped>
.register {
  background-color: #24201d;
}
</style>