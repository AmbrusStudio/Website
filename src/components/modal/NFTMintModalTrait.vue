<script setup lang="ts">
import ExternalLink from '../link/ExternalLink.vue'
interface Props {
  title: string
  link?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col">
    <h5 class="font-normal text-12px leading-16px text-grey-dark uppercase mb-4">{{ title }}</h5>
    <ExternalLink
      class="font-bold text-16px leading-20px text-black-bg break-all"
      :to="link"
      :blank="true"
      v-if="link"
    >
      <slot />
    </ExternalLink>
    <p class="font-bold text-16px leading-20px text-black-bg break-all" v-else><slot /></p>
  </div>
</template>
