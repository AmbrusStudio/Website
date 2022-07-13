<script setup lang="ts">
import PageFooter from '@components/layout/PageFooter.vue'
import PageHeader from '@components/layout/PageHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>
