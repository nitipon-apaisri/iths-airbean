<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p,
hr {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
button {
  font-family: "PT Serif", sans-serif;
}
p {
  font-family: "Work Sans", sans-serif;
}
body {
  margin: 0 !important;
  background-color: #edf2f7;
  ::-webkit-scrollbar {
    width: 1px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    opacity: 0.5;
    background-color: #dde0e6;
    border: 2px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 375px;
    max-width: 375px;
    margin: auto;
    height: 560px;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .container {
    height: 100%;
    margin-top: 32px;
    box-shadow: 0 1.6px 2.2px -20px rgba(0, 0, 0, 0.019),
      0 3.9px 5.3px -20px rgba(0, 0, 0, 0.027),
      0 7.3px 10px -20px rgba(0, 0, 0, 0.032),
      0 13px 17.9px -20px rgba(0, 0, 0, 0.039),
      0 24.2px 33.4px -20px rgba(0, 0, 0, 0.048),
      0 58px 80px -20px rgba(0, 0, 0, 0.07);
  }
}
</style>
