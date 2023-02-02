<script setup>
import AppCard from "@/components/AppCard.vue";
</script>

<template>
  <main class="container" :class="$style.main">
    <h1>Ты сегодня покормил кота?</h1>

    <div :class="$style.productsSection">
      <div
        v-for="(item, index) in getProductsList"
        :key="item.id"
        :class="$style.cardWrap"
      >
        <AppCard
          :class="$style.productCard"
          :data="item"
          :isDisabled="!item.isAvailable"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("Products", ["getProductsList"]),
  },
};
</script>

<style lang="scss" module>
.productsSection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 60px;

  @media (max-width: $media-smartphone-xl) {
    padding-left: 0;
    padding-right: 0;
  }
}

.cardWrap {
  flex-basis: 33%;
  padding: 0 20px;

  @media (max-width: $media-hi-res) {
    flex-basis: 50%;

    &:first-child {
      flex-basis: 100%;
    }
  }

  @media (max-width: $media-smartphone-xl) {
    flex-basis: 100%;
  }
}

.productCard {
  margin: 0 auto 40px;
}
</style>
