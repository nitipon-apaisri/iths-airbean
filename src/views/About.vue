<template>
  <section class="about">
    <MainHeader />
    <article>
      <h1>Vårt kaffe</h1>
      <div class="all-about">
        <p class="lead">
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          grounds dripper, crema, strong whipped, variety extra iced id lungo
          half and half mazagran. Pumpkin spice.
        </p>
        <p>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
        </p>
        <p>
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </p>
      </div>
    </article>
    <aside class="author">
      <img src="@/assets/eva-cortado.jpg" alt="Eva Cortado" />
      <h3>Eva Cortado</h3>
      <p>VD &#38; Grundare</p>
    </aside>
    <Footer />
  </section>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { MainHeader, Footer },
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3 {
  font-family: "PT Serif";
  font-size: 2.6rem;
  color: #24201d;
}
h2,
h3 {
  font-size: 1.4rem;
}
p {
  font-family: "Work Sans";
  color: #24201d;
  font-size: 0.8rem;
  line-height: 1.4rem;
  margin-top: 1rem;
  &.lead {
    font-weight: 600;
    font-size: 0.9rem;
  }
}
.about {
  background-color: #f3e4e1;
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    max-width: 20rem;
    text-align: left;
    .all-about {
      max-height: 200px;
      overflow: scroll;
    }
  }
  .author {
    margin-top: 2rem;
    margin-bottom: 3rem;
    img {
      border-radius: 4rem;
    }
    p {
      margin: 0;
    }
  }
}
</style>
