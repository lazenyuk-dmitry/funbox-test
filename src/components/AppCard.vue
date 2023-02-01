<script setup>
import AppCardBg from "@/components/AppCardBg.vue";
</script>

<template>
  <div :class="$style.card">
    <div :class="$style.cardMain">
      <AppCardBg />

      <div :class="$style.cardLabelBubble">
        <p :class="$style.cardLabelBubbleText">
          0,5
          <br />
          <span>кг</span>
        </p>
      </div>

      <div :class="$style.cardContent">
        <p :class="$style.cardSupTitle">Сказочное заморское яство</p>
        <h3 :class="$style.cardMainTitle">Нямушка</h3>
        <h4 :class="$style.cardMainSubTitle">с фуа-гра</h4>
        <p :class="$style.cardInfoText">
          10 порций <br />
          мышь в подарок
        </p>
      </div>
    </div>
    <p :class="$style.cardDesc">
      Чего сидишь? Порадуй котэ,
      <button type="button" class="link">купи.</button>
    </p>
  </div>
</template>

<style lang="scss" module>
.card {
  width: 320px;
  position: relative;
  font-family: $app-secondary-font-family;
}

.cardMain {
  position: relative;
  color: $card-text-color;
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
</style>
