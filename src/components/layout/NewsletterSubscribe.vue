<template>
  <div class="flex flex-col">
    <form>
      <label for="newsletter-email-input">
        <p class="hidden xl:block font-medium text-16px leading-28px text-white uppercase">
          Newsletter
        </p>
        <div class="flex flex-row flex-nowrap items-center">
          <input
            class="flex flex-row flex-nowrap items-center px-16px py-10px font-normal text-14px leading-28px text-black bg-white placeholder:text-grey-light"
            type="email"
            name=""
            id="newsletter-email-input"
            placeholder="Your email"
          />
          <button
            class="flex flex-row flex-nowrap items-center px-16px py-10px font-semibold text-14px leading-28px text-white uppercase bg-rust"
          >
            Subscribe
          </button>
        </div>
      </label>
    </form>
  </div>
</template>

<style scoped>
#newsletter-email-input:focus-visible {
  outline: none;
}
</style>
