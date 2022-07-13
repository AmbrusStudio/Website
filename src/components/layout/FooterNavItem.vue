<script setup lang="ts">
import ExternalLink from '../link/ExternalLink.vue'

interface Props {
  to: string
  name: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="footer-nav-item flex flex-row flex-nowrap box-content items-center h-12px xl:h-18px px-24px font-normal text-10px xl:text-14px text-grey-medium"
  >
    <ExternalLink :to="to" :title="name" :blank="true">{{ name }}</ExternalLink>
  </div>
</template>

<style scoped>
.footer-nav-item:first-of-type {
  padding-left: 0;
}
.footer-nav-item:last-of-type {
  padding-right: 0;
}
.footer-nav-item:not(:last-of-type) {
  border-right: 1px solid #2a2a2a;
}
</style>
