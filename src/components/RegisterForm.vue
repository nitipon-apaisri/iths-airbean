<template>
  <div class="register-form">
    <div class="register-card">
      <img src="../assets/mini-logo.svg" alt="logo" />
      <div class="title">
        <h2>Välkommen till AirBean-familjen!</h2>
        <p>
          Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
        </p>
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
        <div class="gdpr">
          <input type="checkbox" name="gdpr" id="gdpr" v-model="gdpr" />
          <p>GDPR Ok!</p>
        </div>
        <button :disabled="!gdpr" :class="{ active: gdpr }">
          Brew me a cup !
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      gdpr: false,
      validate: false,
    };
  },
  methods: {
    send() {
      if (this.user.name.length == 0 || this.user.email.length == 0) {
        this.validate = true;
        this.gdpr = false;
      } else {
        this.$store.dispatch("register", this.user);
        this.user.name = "";
        this.user.email = "";
        this.gdpr = false;
        this.validate = false;
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
  }
  input {
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid #000;
  }
}
.register-form {
  padding-bottom: 20px;
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
        font-family: "PT Serif", sans-serif;
        font-size: 2rem;
      }
      p {
        margin: 16px 0;
        font-family: "Work Sans", sans-serif;
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
      .gdpr {
        display: flex;
        input {
          margin: 0 12px 0 0;
          align-self: center;
        }
        p {
          letter-spacing: 0.0125rem;
          font-weight: 500;
          align-self: center;
          font-size: 0.7rem;
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
        background-color: #17b978;
      }
    }
  }
}
</style>