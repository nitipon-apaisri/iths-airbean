<template>
  <div class="register-form">
    <MainHeader />
    <div class="register-card">
      <img src="../assets/mini-logo.svg" alt="logo" />
      <div class="title">
        <h2>Välkommen till AirBean-familjen!</h2>
        <p>Genom att logga in nedan kan du se din orderhistorik.</p>
      </div>
      <form @submit.prevent="send">
        <p v-if="validate">Please fill input</p>
        <div class="name">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            autocomplete="on"
            v-model="user.name"
          />
        </div>
        <div class="email">
          <label for="name">E-mail</label>
          <input
            type="text"
            name="name"
            id="email"
            placeholder="E-mail"
            autocomplete="on"
            v-model="user.email"
          />
        </div>
        <div class="not-robot">
          <input type="checkbox" name="gdpr" id="notRobot" v-model="notRobot" />
          <p>I'm not a robot 🤖</p>
        </div>
        <button :disabled="!notRobot" :class="{ active: notRobot }">
          Let's go !
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
export default {
  components: {
    MainHeader,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      notRobot: false,
      validate: false,
      showNav: false,
    };
  },
  methods: {
    send() {
      if (this.user.name.length == 0 || this.user.email.length == 0) {
        this.validate = true;
        this.notRobot = false;
      } else {
        this.$store.dispatch("register", this.user);
        this.user.name = "";
        this.user.email = "";
        this.notRobot = false;
        this.validate = false;
        setTimeout(() => {
          this.$router.push("/menu");
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Work+Sans:wght@300;400&display=swap");
.registger-input {
  margin: 12px 0;
  display: flex;
  text-align: left;
  flex-direction: column;
  label {
    font-size: 0.8rem;
    margin-bottom: 4px;
    font-weight: bold;
  }
  input {
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid #000;
  }
}
.register-form {
  position: relative;
  padding-bottom: 20px;
  .header-content {
    top: 0;
    box-sizing: border-box;
    padding: 12px 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    .navi-icon {
      border-radius: 100%;
      padding: 12px;
      height: 16px;
      background-color: #fff;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .register-card {
    overflow: overlay;
    box-sizing: border-box;
    padding: 40px 20px;
    max-width: 90%;
    margin: -50px auto 0 auto;
    border-radius: 4px;
    background-color: #f3e4e1;
    .title {
      h2 {
        font-size: 2rem;
      }
      p {
        margin: 16px 0;
        font-size: 0.95rem;
      }
    }
    img {
      border-radius: 100%;
    }
    form {
      .name {
        @extend .registger-input;
      }
      .email {
        @extend .registger-input;
      }
      .not-robot {
        display: flex;
        input {
          margin: 0 12px 0 0;
          align-self: center;
        }
        p {
          letter-spacing: 0.0125rem;
          font-weight: bold;
          align-self: center;
          font-size: 0.8rem;
        }
      }
      button {
        margin-top: 32px;
        background-color: #2f2926;
        color: #fff;
        font-family: "PT Serif", sans-serif;
        border: 1px solid transparent;
        padding: 12px 32px;
        border-radius: 32px;
        font-weight: bold;
        font-size: 1.3rem;
      }
      .active {
        cursor: pointer;
        transition: 500ms;
        background-color: #17b978;
      }
    }
  }
}
</style>