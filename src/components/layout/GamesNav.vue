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
    <nav class="flex flex-col gap-24px xl:gap-36px xl:px-88px xl:py-40px">
      <div class="flex flex-col gap-12px">
        <GameNavTitle className="hidden xl:block">Games</GameNavTitle>
        <div class="flex flex-col xl:flex-row xl:flex-nowrap items-center gap-12px xl:gap-24px">
          <GameNavImage to="/game/1" :img="GameImg1" title="Game Fallen Arena" />
          <GameNavImage to="/game/2" :img="GameImg2" title="Game Final Salvation" />
          <GameNavImage to="/game/3" :img="GameImg3" title="Game 3" />
        </div>
      </div>
      <div class="flex flex-col gap-12px">
        <GameNavTitle>Gaming Experience</GameNavTitle>
        <div class="flex flex-col xl:flex-row xl:flex-nowrap gap-12px xl:gap-24px">
          <GameNavButton to="/game/news/list/1" name="News & Dev Blogs" />
          <GameNavButton to="/game/archive/1" name="Archive" />
          <GameNavButton to="/game/1" name="Esports" />
          <GameNavButton to="/game/1" name="Leaderboards" />
        </div>
      </div>
    </nav>
  </div>
</template>
