<script setup lang="ts">
import type { Auction } from '@/types/auction'
import { cleanupHTML } from '@/utils'

interface Props {
  auction: Auction
}

defineProps<Props>()
</script>

<template>
  <div
    class="max-w-1332px p-x-9 mx-auto grid grid-cols-1 xl:grid-cols-2 xl:gap-x-9 gap-y-9 xl:gap-y-0 p-b-14.25"
  >
    <div class="grid gap-y-9">
      <div v-for="(detail, index) in auction.detail" :key="index">
        <h4
          class="text-xs md:text-base font-semibold not-italic uppercase text-greyMedium mb-3 leading-15px md:leading-20px"
        >
          {{ detail.title }}
        </h4>
        <div class="xl:w-693px grid grid-cols-1 md:grid-cols-2 gap-3">
          <section
            v-for="(item, indexJ) in detail.introduction"
            :key="indexJ"
            class="flex flex-col items-center px-6 py-3 bg-black/50 min-h-124px md:min-h-148px"
          >
            <p
              class="text-48px md:text-64px font-bold text-center text-white leading-59px md:leading-78px not-italic"
              :style="item.style"
            >
              {{ item.title }}
            </p>
            <p
              class="text-sm text-center text-white_1 leading-24px not-italic"
              v-html="cleanupHTML(item.content)"
            />
          </section>
        </div>
      </div>
    </div>

    <div class="xl:fixed xl:bottom-15 xl:right-15 xl:max-w-[532px] z-100">
      <div class="bg-black/50 p-6">
        <div class="text-white">
          <span class="text-2xl uppercase italic font-bold leading-30px">{{
            auction.notes.title
          }}</span>
          <span class="text-base relative top-0.75 uppercase italic font-bold leading-30px ml-3">{{
            auction.notes.subtitle
          }}</span>
        </div>
        <p
          class="text-sm not-italic text-white mt-3 leading-24px notes-content"
          v-html="cleanupHTML(auction.notes.content)"
        />
      </div>

      <div class="bg-white p-4 md:p-9 text-center fixed bottom-0 left-0 right-0 xl:static actions">
        <p class="text-xl md:text-2xl not-italic font-bold text-rust leading-24px md:leading-29px">
          {{ auction.actions.text }}
        </p>
        <a :href="auction.actions.link" target="_blank" rel="noopener" class="inline-flex">
          <button
            :style="auction.actions.buttonStyle"
            class="bg-rust text-xl md:text-2xl font-semibold uppercase text-white leading-24px md:leading-29px p-y-4 md:p-y-5.5 p-x-9 md:p-x-19.25 mt-3 md:mt-6"
          >
            {{ auction.actions.button }}
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
/* a tag is not inside the component */
.notes-content a {
  text-decoration: underline;
}
</style>

<style scoped>
@media (max-width: 768px) {
  .actions {
    padding-bottom: calc(12px + constant(safe-area-inset-bottom));
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
  }
}
</style>
