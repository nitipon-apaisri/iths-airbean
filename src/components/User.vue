<template>
  <div class="user-wrapper">
    <img
      class="user-img"
      src="../assets/mock-profile-pic.svg"
      alt="user-image"
    />
    <h1 class="name">{{ this.users[0].name }}</h1>
    <h3 class="email">{{ this.users[0].email }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");

.name {
  font-family: "PT Serif", serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  padding: 5px 0;
}

.email {
  color: rgba(255, 255, 255, 0.8);
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
}

.user-img {
  border-radius: 50%;
  width: 94px;
  height: 94px;
}
</style>