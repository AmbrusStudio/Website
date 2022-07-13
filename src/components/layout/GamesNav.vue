<script setup lang="ts">
import GameNavTitle from './GameNavTitle.vue'
import GameNavButton from './GameNavButton.vue'
import GameNavImage from './GameNavImage.vue'
import GameImg1 from '@/assets/images/header/games-nav-1.png'
import GameImg2 from '@/assets/images/header/games-nav-2.png'
import GameImg3 from '@/assets/images/header/games-nav-3.png'

interface Props {
  open: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="hidden w-full" :class="{ '!block': open }">
    <nav class="games-nav__wrapper relative px-88px py-40px">
      <div class="flex flex-col gap-36px">
        <div class="flex flex-col gap-12px">
          <GameNavTitle>Games</GameNavTitle>
          <div class="flex flex-row flex-nowrap gap-x-24px">
            <GameNavImage to="/game/1" :img="GameImg1" />
            <GameNavImage to="/game/2" :img="GameImg2" />
            <GameNavImage to="/game/3" :img="GameImg3" />
          </div>
        </div>
        <div class="flex flex-col gap-12px">
          <GameNavTitle>Gaming Experience</GameNavTitle>
          <div class="flex flex-row flex-nowrap gap-x-24px">
            <GameNavButton to="/game/news/list/1">News & Dev Blogs</GameNavButton>
            <GameNavButton to="/game/archive/1">Archive</GameNavButton>
            <GameNavButton to="/game/1">Esports</GameNavButton>
            <GameNavButton to="/game/1">Leaderboards</GameNavButton>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
