<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  className?: string
  soon?: boolean
}
interface Emits {
  (e: 'onNavClick'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const navClass = computed(() => {
  return {
    soon: props.soon,
    [`${props.className}`]: props.className
  }
})
const handleNavClick = () => {
  if (props.soon) return
  emit('onNavClick')
}
</script>

<template>
  <div
    class="nav-item relative flex flex-row flex-nowrap justify-center items-center h-80px xl:h-auto px-24px cursor-pointer"
    :class="navClass"
    @click="handleNavClick"
  >
    <div class="nav-item__line absolute left-0 h-2px w-0 bg-rust" />
    <span
      class="nav-item__text flex flex-row flex-nowrap items-center text-14px text-white text-center uppercase"
    >
      <slot />
    </span>
    <span
      class="nav-item__soon absolute top-60px xl:top-30px font-medium text-8px leading-14px text-white uppercase bg-white/60 rounded-4px px-12px"
      v-if="soon"
    >
      Soon
    </span>
  </div>
</template>

<style scoped>
.nav-item:not(.soon) .nav-item__line {
  transform-origin: left;
  transition: width 0.25s ease-in-out;
}
.nav-item:not(.soon):hover .nav-item__text {
  @apply font-semibold text-rust;
}
.router-link-active .nav-item:not(.soon) .nav-item__text {
  @apply font-semibold text-white;
}
.router-link-active .nav-item:not(.soon):hover .nav-item__text {
  @apply font-semibold text-white;
}
.router-link-active .nav-item:not(.soon) .nav-item__line
/* .nav-item:hover .nav-item__line */ {
  @apply w-full;
}
</style>
