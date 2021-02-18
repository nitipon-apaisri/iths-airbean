<template>
  <section class="status">
      <p class="order-number">Ordernummer: {{ orderNumber}}</p>
      <img src="@/assets/drone.svg" alt="">
      <h1 v-if="ETA > 0" >Din beställning är påväg!</h1>
      <h1 v-else >Din beställning är framme!</h1>
      <p v-if="ETA > 0" class="timer"><strong>{{ETA}}</strong> minuter</p>
      <router-link to="/menu" class="cta">Ok, cool!</router-link>
  </section>
</template>

<script>
export default {
    data(){ return {
        ETA: 12
    }},

    computed: {
        orderNumber(){
            return '#8U9485HR'
        }
    },
    methods: {
        countDown(){
            if(this.ETA > 0){
                setTimeout(() => {
                    this.ETA--
                    this.countDown()
                }, 60000)
            }
        }
    },
    mounted(){
        this.countDown()
    }
}
</script>

<style lang="scss" scoped>
.status{
    height: 70vh;

    background-color: #E5674E;
    color: white;
    padding: 5rem 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1, .cta{
        font-family: "PT Serif", serif;
    }
    h1{
        font-size: 2.2rem;
    }
    p{
        font-family: "Work Sans", Arial, Helvetica, sans-serif;
        
        &.timer{
            font-size: 1.4rem;
        }
    }

    .order-number{
        opacity: 70%;
    }

    .cta{
        background-color: #fff;
        outline: none;
        border: none;
        border-radius: 2rem;
        padding: 0.7rem 2rem;

        font-size: 1.5rem;
        font-weight: bold;
        color: black;
        text-decoration: none;

        &:active{
            background-color: #0E927D;
        }
    }
}
</style>