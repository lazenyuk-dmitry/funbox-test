<script setup>
import AppCardBg from "@/components/AppCardBg.vue";
</script>

<template>
  <div
    :class="[
      $style.card,
      { [$style.active]: isActive, [$style.disabled]: isDisabled },
    ]"
  >
    <div :class="$style.cardMain">
      <AppCardBg :isActive="isActive" :isDisabled="isDisabled" />

      <div :class="$style.cardLabelBubble">
        <p :class="$style.cardLabelBubbleText">
          {{ weightValue }}
          <br />
          <span>{{ data.weight.units }}</span>
        </p>
      </div>

      <div :class="$style.cardContent">
        <p :class="$style.cardSupTitle">{{ data.supTitle.default }}</p>
        <h3 :class="$style.cardMainTitle">{{ data.brand }}</h3>
        <h4 :class="$style.cardMainSubTitle">{{ data.taste }}</h4>
        <p :class="$style.cardInfoText">
          {{ data.count }} порций <br />
          {{ data.gift }} <br />
          {{ data.info }}
        </p>
      </div>
    </div>
    <p :class="$style.cardDesc">
      <template v-if="isDisabled">
        Печалька, {{ data.taste }} закончился.
      </template>
      <template v-else>
        {{ data.desc.default }},
        <button type="button" class="link">купи.</button>
      </template>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    weightValue() {
      return this.data.weight.value.toString().replace(/\./g, ",");
    },
  },
};
</script>

<style lang="scss" module>
.card {
  width: 320px;
  position: relative;
  font-family: $app-secondary-font-family;
}

.cardMain {
  position: relative;
  color: $card-text-color;
  cursor: pointer;
  user-select: none;
}

.cardLabelBubble {
  position: absolute;
  height: 80px;
  width: 80px;
  right: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: $card-bubble-label-bg-color;
  border-radius: 50%;
}

.cardLabelBubbleText {
  position: relative;
  top: 4px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 0.5;
  color: $card-bubble-label-color;

  span {
    font-size: 21px;
  }
}

.cardContent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 21px 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: $card-secondary-text-color;
}

.cardSupTitle {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: $card-secondary-text-color;
  margin: 0 0 5px 0;
}

.cardMainTitle {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 0;
}

.cardMainSubTitle {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin: 0 0 15px 0;
}

.cardInfoText {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  color: $card-secondary-text-color;
  margin: 0 0 15px 0;
}

.cardDesc {
  text-align: center;
  margin: 14px 0 0 0;
}

// Active styles
.card.active {
  .cardLabelBubble {
    background: $card-bubble-label-bg-color-active;
  }
}

.card.disabled {
  .cardMain {
    cursor: not-allowed;
  }

  .cardLabelBubble {
    background: $card-bubble-label-bg-color-disabled;
  }

  .cardContent {
    color: $card-disabled-color;
    opacity: 0.5;
  }

  .cardMainTitle,
  .cardMainSubTitle,
  .cardInfoText {
    color: $card-disabled-color;
  }

  .cardDesc {
    color: $card-desc-text-color-disabled;
  }
}
</style>
