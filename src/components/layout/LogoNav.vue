<script setup lang="ts">
import { getMainSiteLink } from '@/utils'
import ExternalLink from '../link/ExternalLink.vue'
import IconAmbrus from '../icons/IconAmbrus.vue'
</script>

<template>
  <ExternalLink :to="getMainSiteLink('/')" titie="Home">
    <IconAmbrus class="h-40px w-40px text-white mr-16px" />
  </ExternalLink>
</template>
