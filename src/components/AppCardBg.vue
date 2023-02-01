<template>
  <svg
    viewBox="0 0 320 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="{ [$style.active]: isActive, [$style.disabled]: isDisabled }"
  >
    <defs>
      <!-- Card path area -->
      <path
        :id="cardPathId"
        d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"
      />

      <clipPath :id="cardClipAreaId">
        <use :href="`#${cardPathId}`" />
      </clipPath>
    </defs>

    <g :clip-path="`url(#${cardClipAreaId})`">
      <!-- Card bg -->
      <use :href="`#${cardPathId}`" :class="$style.cardBg" />

      <image
        :class="$style.image"
        href="@/assets/card-item-img.png"
        height="100%"
        width="100%"
        preserveAspectRatio="xMinYMax meet"
      />

      <!-- Card border -->
      <use :href="`#${cardPathId}`" :class="$style.cardBorder" fill="none" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
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
      cardPathId: null,
      cardClipAreaId: null,
    };
  },
  mounted() {
    let uid = this.$.uid;

    this.cardPathId = `card_area-${uid}`;
    this.cardClipAreaId = `card_clip_area-${uid}`;
  },
};
</script>

<style lang="scss" module>
.cardBg {
  fill: $card-bg-color;
}
.cardBorder {
  stroke: $card-border-color;
  stroke-width: 8px; // Need to specify a double size. For example: 8px/2 = 4px.
}

// Active styles
svg.active {
  .cardBorder {
    stroke: $card-border-color-active;
  }
}

svg.disabled {
  .cardBorder {
    stroke: $card-border-color-disabled;
  }
  .image {
    opacity: 0.5;
  }
}
</style>
