<script setup lang="ts">
import IconAmbrus from '../icons/IconAmbrus.vue'
import ImageAmbrusStudio from '../images/ImageAmbrusStudio.vue'
import FooterNavItem from './FooterNavItem.vue'
import NewsletterSubscribe from './NewsletterSubscribe.vue'
import SocialNav from './SocialNav.vue'
</script>

<template>
  <footer class="p-24px xl:py-48px xl:px-0 bg-grey-dark">
    <div class="flex flex-col max-w-1264px mx-auto">
      <div class="flex flex-col xl:flex-row justify-between items-center mb-36px xl:mb-42px">
        <div class="flex flex-col xl:flex-row flex-nowrap items-center mb-36px xl:m-0">
          <div class="flex flex-row flex-nowrap items-center w-full">
            <IconAmbrus class="h-60px w-60px xl:h-118px xl:w-118px text-white xl:mr-24px" />
            <p
              class="xl:hidden flex-1 font-medium text-14px leading-28px text-white text-center uppercase"
            >
              Newsletter
            </p>
          </div>
          <NewsletterSubscribe />
        </div>
        <SocialNav />
      </div>
      <div class="mx-auto mb-24px xl:mb-36px">
        <ImageAmbrusStudio />
      </div>
      <div class="flex flex-row flex-nowrap justify-center items-center mb-24px xl:mb-12px">
        <FooterNavItem to="https://example.com" name="Terms of Service" />
        <FooterNavItem to="https://example.com" name="Privacy Policy" />
        <FooterNavItem to="https://example.com" name="Get Help" />
      </div>
      <div class="font-normal text-12px text-center text-white">© 2021 Ambrus Studio</div>
    </div>
  </footer>
</template>
