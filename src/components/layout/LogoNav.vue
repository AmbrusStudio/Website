<script setup lang="ts">
import { getMainSiteLink } from '@/utils'

import IconAmbrus from '../icons/IconAmbrus.vue'
import ExternalLink from '../link/ExternalLink.vue'
</script>

<template>
  <ExternalLink :to="getMainSiteLink('/')" titie="Home" aria-label="Home">
    <IconAmbrus class="h-40px w-40px text-white mr-16px" />
  </ExternalLink>
</template>
