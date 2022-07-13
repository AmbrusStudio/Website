<script setup lang="ts">
interface Props {
  className?: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="nav-item flex flex-row flex-nowrap justify-center items-center h-80px xl:h-auto px-24px cursor-pointer"
    :class="[className]"
  >
    <div class="nav-item__line absolute left-0 h-2px w-0 bg-rust" />
    <span
      class="nav-item__text flex flex-row flex-nowrap items-center text-14px text-white text-center uppercase"
    >
      <slot />
    </span>
  </div>
</template>

<style scoped>
.nav-item .nav-item__line {
  transform-origin: left;
  transition: width 0.25s ease-in-out;
}
.nav-item:hover .nav-item__text {
  @apply font-semibold text-rust;
}
.router-link-active .nav-item .nav-item__text {
  @apply font-semibold text-white;
}
.router-link-active .nav-item:hover .nav-item__text {
  @apply font-semibold text-white;
}
.router-link-active .nav-item .nav-item__line
/* .nav-item:hover .nav-item__line */ {
  @apply w-full;
}
</style>
