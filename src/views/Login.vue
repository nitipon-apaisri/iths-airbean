<template>
  <div class="register">
    <Login />
  </div>
</template>

<script>
import Login from "@/components/LoginForm";
export default {
  components: {
    Login,
  },
};
</script>

<style lang="scss" scoped>
.register {
  background-color: #24201d;
}
</style>