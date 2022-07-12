<template>
  <main id="main" class="pt-100px bg-black-bg bg-cover bg-top bg-repeat-y">
    <div class="max-w-1264px mx-auto">
      <slot />
    </div>
  </main>
</template>

<style scoped>
#main {
  background-image: url('~@/assets/images/bg/bg-page.png');
  background-image: image-set(
    url('~@/assets/images/bg/bg-page.png') 1x,
    url('~@/assets/images/bg/bg-page@2x.png') 2x,
    url('~@/assets/images/bg/bg-page@3x.png') 3x
  );
}
</style>
