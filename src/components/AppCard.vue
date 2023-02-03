<script setup>
import AppCardBg from "@/components/AppCardBg.vue";
import { nextTick } from "vue";
</script>

<template>
  <div
    :class="[
      $style.card,
      {
        [$style.active]: isActive,
        [$style.disabled]: isDisabled,
        [$style.holdActivate]: holdActivate,
      },
    ]"
  >
    <div
      :class="$style.cardMain"
      @click.prevent="toggleCard(true)"
      @touchend.prevent="toggleCard()"
      @mouseenter="cardMouseEnter()"
      @mouseleave="cardMouseOut()"
    >
      <AppCardBg :isActive="isActive" :isDisabled="isDisabled" />

      <div :class="$style.cardLabelBubble">
        <p :class="$style.cardLabelBubbleText">
          {{ weightValue }}
          <br />
          <span>{{ data.weight.units }}</span>
        </p>
      </div>

      <div :class="$style.cardContent">
        <p :class="$style.cardSupTitle">
          <template v-if="!holdActivate && cardHover && isActive">
            {{ data.supTitle.active }}
          </template>
          <template v-else>
            {{ data.supTitle.default }}
          </template>
        </p>
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
      <template v-else-if="isActive || holdActivate">
        {{ data.desc.selected }}
      </template>
      <template v-else>
        {{ data.desc.default }},
        <button type="button" class="link" @click="toggleCard()">купи.</button>
      </template>
    </p>
  </div>
</template>

<script>
export default {
  emits: ["changed"],
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
  data() {
    return {
      holdActivate: false,
      cardHover: false,
    };
  },
  computed: {
    weightValue() {
      return this.data.weight.value.toString().replace(/\./g, ",");
    },
  },
  methods: {
    cardMouseEnter() {
      this.cardHover = true;
    },
    cardMouseOut() {
      if (this.holdActivate) {
        this.toggleCard();
        this.holdActivate = false;
      }

      this.cardHover = false;
    },
    toggleCard(hold = false) {
      if (this.isDisabled) {
        return;
      }

      if (hold && !this.data.isActive) {
        this.holdActivate = true;

        return;
      }

      this.$emit("changed", {
        ...this.data,
        isActive: !this.data.isActive,
      });
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
  transition: $card-transition-time;
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
  min-height: 20px;
}

// Active styles
.card.active {
  .cardLabelBubble {
    background: $card-bubble-label-bg-color-active;
    transition: $card-transition-time;
  }
}

.card.active:hover {
  .cardSupTitle {
    color: $card-active-text-color;
  }
}

.card.active,
.card.holdActivate {
  .cardDesc {
    font-size: 13px;
  }
}

.card.disabled {
  .cardMain {
    cursor: not-allowed;
  }

  .cardLabelBubble {
    background: $card-bubble-label-bg-color-disabled;
    transition: $card-transition-time;
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
