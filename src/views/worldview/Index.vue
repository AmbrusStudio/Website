<template>
  <!-- <section class="main empty-main">
    <router-link to="/worldview/organization/16" style="color: #fff">organiztion ></router-link
    ><br /><br />
    <router-link to="/worldview/ranger/6" style="color: #fff">ranger ></router-link>
  </section> -->
  <iframe
    class="worldview"
    title="Worldview page"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    :src="worldviewUrl"
  ></iframe>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import $ from 'jquery'

const worldviewUrl = import.meta.env.VITE_WORLDVIEW_URL

export default defineComponent({
  name: 'WorldviewIndex',
  setup() {
    const isWap = ref(false)
    onMounted(async () => {
      $('html').attr({ style: 'overflow-y:auto' })
      $('header,.main,footer').show()

      function checkFontSize() {
        const oldIsWap = isWap.value
        isWap.value = !($(window).width() > 960)
        if (isWap.value !== oldIsWap) {
          console.log('change')
        }
      }
      $(document).ready(checkFontSize)
      $(window).resize(checkFontSize)
    })
    return {
      worldviewUrl
    }
  }
})
</script>
<style lang="less" scoped>
.worldview {
  width: 100vw;
  height: calc(100vh - 9.9rem);
  border: none;
  margin-top: 9.9rem;
}
</style>
