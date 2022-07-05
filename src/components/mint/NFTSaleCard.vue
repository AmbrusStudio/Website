<script setup lang="ts">
interface Props {
  className?: string
}

defineProps<Props>()
</script>

<template>
  <div class="p-24px md:p-36px bg-black/80 shadow-nft-sale backdrop-blur-20px" :class="[className]">
    <div class="flex flex-col gap-4px mb-24px md:mb-36px">
      <h4 class="uppercase text-rust font-semibold text-14px leading-18px">E4C Fallen Arena</h4>
      <h3 class="text-white font-semibold text-20px leading-24px">Thorn: Bumble Fighter</h3>
      <p class="text-white font-normal text-14px leading-24px">
        Pearce's fixed-wing X6 provides a surprising amount of comfortable living space aboard a
        compact and highly agile fighter patrol ship. A supremely capable combat vessel with an
        extended atmoglass canopy provides a conspicuous piloting advantage as well as a way
      </p>
    </div>
    <button
      class="w-full py-16px md:py-22px bg-rust text-white font-semibold text-16px md:text-24px leading-20px md:leading-28px text-center uppercase hover:bg-white hover:text-rust disabled:bg-grey-medium disabled:text-white disabled:hover:text-white"
      disabled
    >
      Coming Soon
    </button>
  </div>
</template>
