<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from '@components/layout/PageHeader.vue'
import PageFooter from '@components/layout/PageFooter.vue'
</script>

<template>
  <PageHeader :class="$route.meta.headerClass" />
  <RouterView />
  <PageFooter />
</template>
