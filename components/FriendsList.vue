<template>
  <div class="friends-container">
    <div
      v-for="(f, index) in friends"
      :key="index"
      class="friend-item-container"
    >
      <div class="friend-item">
        <div class="friend-img"></div>
        <span class="text-sm stroked-text-3" style="width: 184px">{{
          f.name
        }}</span>
        <span class="stroked-text-3">{{ f.level }} lvl</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IMember } from "~/interfaces";

const props = defineProps<{
  friends: IMember[];
}>();
</script>

<style lang="css" scoped>
.friends-container {
  @apply flex flex-col gap-2 bg-radial-blue rounded-xl border border-primary;
  padding: 6px 4px;
  box-shadow: 0px 4px 4.5px rgba(0, 3, 6, 0.5);
}
.friend-item-container {
  @apply pb-px bg-linear-blue-grad-1;
  height: 42px;
}
.friend-item {
  @apply flex items-center gap-2 bg-radial-blue;
  height: 41px;
  padding: 6px 4px;
}
.friend-img {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background: #15376c;
  box-shadow: 0px 1px 4px rgba(0, 174, 229, 0.5);
}
</style>
