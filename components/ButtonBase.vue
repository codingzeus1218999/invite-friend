<template>
  <div class="btn-base" :class="type">
    <slot />
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute top-0 right-1"
    >
      <ellipse
        cx="4.77889"
        cy="2.68897"
        rx="4.17485"
        ry="2.25425"
        transform="rotate(22.6661 4.77889 2.68897)"
        fill="#FFEEBA"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import type { EButtonType } from "~/interfaces/enums";

const props = defineProps<{
  type: EButtonType;
}>();
</script>

<style lang="css" scoped>
.btn-base {
  @apply px-18px h-30px flex items-center rounded-xl relative cursor-pointer w-fit;
}
.btn-base.Yellow {
  @apply bg-linear-yellow;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25),
    0px -2px 0px rgba(255, 238, 186, 1), 0px 2px 0px rgba(122, 93, 0, 1);
}
.btn-base.Blue {
  @apply bg-linear-blue;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25),
    0px -2px 0px rgba(190, 227, 255, 1), 0px 2px 0px rgba(21, 83, 136, 1);
}
</style>
