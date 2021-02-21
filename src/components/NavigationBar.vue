<template>
  <div class="nav-bar">
    <div class="nav-bar-icon" @click="closeNavbar">
      <img src="../assets/close.svg" alt="" />
    </div>
    <ul class="nav-ul">
      <router-link to="/menu"> <li class="li">Meny</li></router-link>
      <li class="li">___</li>
      <router-link to="/about"> <li class="li">Vårt kaffe</li></router-link>
      <li class="li">___</li>
      <router-link to="/profile"> <li class="li">Min profil</li> </router-link>
      <li class="li">___</li>
      <router-link to="/status"> <li class="li">Orderstatus</li> </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeNavbar() {
      this.$emit("toggleNavbar");
    },
  },
};
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  background-color: #2f2926;
  height: 560px;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 50px;
}
.nav-bar-icon {
  border-radius: 100%;
  padding: 12px;
  height: 16px;
  width: 16px;
  background-color: white;
  justify-self: flex-start;
  margin: 12px;
  margin-left: 16px;
  cursor: pointer;
}
.nav-ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10vh;
}
.li {
  font-family: PT Serif;
  padding: 5px;
  color: white;
  font-size: 32px;
}
a {
  text-decoration: none;
}
</style>
