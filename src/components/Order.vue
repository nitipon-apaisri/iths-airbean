<template>
  <div class="order">
    <ul>
      <li v-for="(item, index) in order" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["order"]),
  },
};
</script>

<style lang="scss" scoped>
</style>