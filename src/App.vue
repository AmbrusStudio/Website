<template>
  <header>
    <div class="info">
      <img src="https://ambrus.s3.amazonaws.com/1654419946121_0.88_logo.png" alt="" class="logo" />
      <div class="middle-box">
        <nav>
          <router-link to="/" :class="routeType === 'home' ? 'has-act active' : 'has-act'"
            >HOME</router-link
          >
          <div class="show-games">
            <div :class="routeType === 'game' ? 'show-info has-act active' : 'show-info has-act'">
              <!-- <div class="show-info"> -->
              E4C: GAMES
              <img
                src="https://ambrus.s3.amazonaws.com/1654419946109_0.85_header-arrow-1.png"
                alt=""
              />
              <!-- <span class="soon">soon</span> -->
            </div>
            <div class="games-list-box hidden">
              <div class="games-list clearfix">
                <div class="games-list-info">
                  <div class="games-text">Games</div>
                  <div
                    @click="toUrl(v.url)"
                    @mouseover="onMouseOverGame('games', i, v.img)"
                    v-for="(v, i) in headerGameInfo.games"
                    :key="i"
                    :class="
                      headerGameAct.type === 'games' && headerGameAct.index === i
                        ? 'games-info-name active'
                        : 'games-info-name'
                    "
                    v-html="v.name"
                  ></div>
                </div>
                <div class="games-mob-img-list">
                  <div
                    class="games-mob-img"
                    v-for="(v, i) in headerGameInfo.games"
                    @click="toUrl(v.url)"
                    :key="i"
                    :style="`background-image: url(${
                      v.img.material_mob.url ? v.img.material_mob.url : v.img.material_pc.url
                    })`"
                  ></div>
                </div>
                <div class="games-list-exp">
                  <div class="games-text">Gaming Experience</div>
                  <div
                    :class="
                      headerGameAct.type === 'exp' && headerGameAct.index === i
                        ? 'games-exp-name active'
                        : 'games-exp-name'
                    "
                    v-for="(v, i) in headerGameInfo.exp"
                    @click="toUrl(v.url)"
                    @mouseover="onMouseOverGame('exp', i, v.img)"
                    :key="i"
                    v-html="v.name"
                  ></div>
                </div>
                <div
                  class="games-list-img"
                  :style="`background-image: url(${headerGameAct.img.material_pc.url}) `"
                ></div>
              </div>
            </div>
          </div>
          <router-link
            to="/worldview"
            :class="routeType === 'worldview' ? 'has-act active' : 'has-act'"
            >E4C: VERSE</router-link
          >
          <router-link to="/aboutus" :class="routeType === 'aboutus' ? 'has-act active' : 'has-act'"
            >ABOUT US</router-link
          >
        </nav>
        <div class="top-right clearfix">
          <div class="link-list">
            <a :href="v.url" target="_blank" v-for="(v, i) in headerLink" :key="i">
              <img :src="v.material_list.material.url" alt="" />
            </a>
            <!-- <a href="javascript:;">
                <img src="https://ambrus.s3.amazonaws.com/1654419946116_0.54_link-2.png" alt="" />
              </a> -->
            <!-- <a href="javascript:;">
                <img src="https://ambrus.s3.amazonaws.com/1654419946119_0.41_link-4.png" alt="" />
              </a> -->
          </div>
          <div class="language">Eng</div>
          <div class="user-btn-box">
            <a href="javascript:;" class="btn login-btn">Connect Wallet</a>
            <!-- <div class="btn user-btn">0x80 ... E417</div>
              <a href="javascript:;" class="logout-btn hidden">Disconnect</a> -->
          </div>
        </div>
      </div>
      <div class="menu-box">
        <img
          src="https://ambrus.s3.amazonaws.com/1653214835453_0.82_header-menu.png"
          alt=""
          class="header-menu"
        />
        <img
          src="https://ambrus.s3.amazonaws.com/1653214835454_0.97_header-menu-close.png"
          alt=""
          class="header-menu-close hidden"
        />
      </div>
    </div>
  </header>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!-- <keep-alive> -->
  <!-- <router-view /> -->
  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view> -->
  <!-- </keep-alive> -->
  <footer>
    <div class="info">
      <img
        src="https://ambrus.s3.amazonaws.com/1653214835428_0.14_footer-logo-1.png"
        alt=""
        class="logo"
      />
      <div class="sub-box">
        <!-- <div class="sub-title">Newsletter</div>
          <div class="sub-input-box clearfix">
            <input type="text" placeholder="Your email" class="sub-input" />
            <div class="sub-btn">Subscribe</div>
          </div> -->
      </div>
      <div class="link-list">
        <a :href="v.url" target="_blank" v-for="(v, i) in footerLink" :key="i">
          <img :src="v.material_list.material.url" alt="" />
        </a>
        <!-- <a href="javascript:;">
            <img src="https://ambrus.s3.amazonaws.com/1653214783662_0.80_footer-link-2.png" alt="" />
          </a> -->
        <!-- <a href="javascript:;">
            <img src="https://ambrus.s3.amazonaws.com/1653214783664_0.75_footer-link-4.png" alt="" />
          </a> -->
      </div>
      <div class="footer-logo">
        <img src="https://ambrus.s3.amazonaws.com/1653214835436_0.79_footer-logo-2.png" alt="" />
      </div>
      <div class="help-link-list">
        <a href="javascript:;">Terms of Service</a>
        <a href="javascript:;">Privacy Policy</a>
        <a href="javascript:;">Get Help</a>
      </div>
      <div class="copyright">© 2021 Ambrus Studio</div>
    </div>
  </footer>
</template>
<script>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import $ from 'jquery'
import { onCheckMaterial } from '@/utils/index.js'
import { getBlockInfoApi } from '@/api/block/index'
import store from '@/store/index'

export default defineComponent({
  name: 'App',
  setup() {
    const headerLink = ref([])
    const footerLink = ref([])
    const isWap = ref(false)
    const headerGameInfo = ref({
      games: [],
      exp: []
    })
    const headerGameAct = ref({
      type: 'games',
      index: 0,
      img: {
        material: {
          type: '',
          url: ''
        },
        material_pc: {
          type: 'image',
          url: ''
        },
        material_mob: {
          type: '',
          url: ''
        }
      }
    })

    const getScrollbarWidth = () => {
      const outer = document.createElement('div')
      outer.style.overflow = 'scroll'
      outer.style.height = '200px'
      outer.style.width = '100px'
      outer.style.position = 'absolute'
      outer.style.top = '-10000px'
      outer.style.left = '-10000px'
      document.body.appendChild(outer)
      const widthNoScroll = outer.offsetWidth
      const inner = document.createElement('div')
      inner.style.width = '100%'
      outer.appendChild(inner)
      const widthWithScroll = inner.offsetWidth
      const scrollBarWidth = widthNoScroll - widthWithScroll
      outer.parentNode.removeChild(outer)
      return scrollBarWidth
    }

    const thisWidth = $(window).width() + getScrollbarWidth()
    if ($('.loading-main').length > 0 && !$('.loading-main').is(':hidden')) {
      $('html').css({ 'overflow-y': 'hidden' })
    } else {
      $('html').css({ 'overflow-y': 'auto' })
    }
    if (thisWidth > 960 && thisWidth < 1440) {
      $('html').css({ 'font-size': `${(thisWidth / 1440) * 62.5}%` })
    } else {
      console.log(1)
      if ($('.loading-main').length > 0 && !$('.loading-main').is(':hidden')) {
        $('html').attr('style', 'overflow-y:hidden;display:block;')
      } else {
        $('html').attr('style', 'overflow-y:auto;display:block;')
      }
    }
    $('html').show()

    onMounted(async () => {
      window.onload = () => {}

      const headerLinkRes = await getBlockInfoApi('headerIcon')
      if (headerLinkRes.code === 200) {
        headerLink.value = []
        headerLinkRes.data.forEach((v) => {
          headerLink.value.push({
            url: v.url,
            material_list: onCheckMaterial(v.material, v.material_mob)
          })
        })
        console.log(headerLink)
      }

      const headerGameRes = await getBlockInfoApi('headerGame')
      if (headerGameRes.code === 200) {
        headerGameInfo.value.games = []
        headerGameInfo.value.exp = []
        headerGameRes.data.forEach((v) => {
          if (v.sort < 200) {
            headerGameInfo.value.games.push({
              url: v.url,
              name: v.name,
              img: onCheckMaterial(v.material, v.material_mob)
            })
          } else {
            headerGameInfo.value.exp.push({
              url: v.url,
              name: v.name,
              img: onCheckMaterial(v.material, v.material_mob)
            })
          }
        })
        headerGameAct.value = {
          type: 'games',
          index: 0,
          img: headerGameInfo.value.games[0].img
        }
      }

      const footerLinkRes = await getBlockInfoApi('footerIcon')
      if (footerLinkRes.code === 200) {
        footerLink.value = []
        footerLinkRes.data.forEach((v) => {
          footerLink.value.push({
            url: v.url,
            name: v.name,
            material_list: onCheckMaterial(v.material, v.material_mob)
          })
        })
      }

      $('.show-games .show-info').bind('click', () => {
        $('.games-list-box').toggle()
        if ($('.games-list-box').is(':visible')) {
          $('header').addClass('games-bg')
          $('.show-info img').addClass('show')
        } else {
          $('header').removeClass('games-bg')
          $('.show-info img').removeClass('show')
        }
      })

      $('.show-games').bind('mouseleave', () => {
        if ($(window).width() + getScrollbarWidth() > 960) {
          $('.games-list-box').hide()
        }
        $('header').removeClass('games-bg')
        $('.show-info img').removeClass('show')
      })
      $('.menu-box').bind('click', () => {
        $('.middle-box').toggle()
        if ($('.middle-box').is(':hidden')) {
          $('header').removeClass('mob-bg')
        } else {
          $('header').addClass('mob-bg')
        }
        $('.header-menu,.header-menu-close').toggle()
      })
      function checkFontSize() {
        const width = $(window).width() + getScrollbarWidth()
        if ($('.loading-main').length > 0 && !$('.loading-main').is(':hidden')) {
          $('html').css({ 'overflow-y': 'hidden' })
        } else {
          $('html').css({ 'overflow-y': 'auto' })
        }
        if (width > 960 && width < 1440) {
          $('html').css({ 'font-size': `${(width / 1440) * 62.5}%` })
        } else {
          console.log(1)
          if ($('.loading-main').length > 0 && !$('.loading-main').is(':hidden')) {
            $('html').attr('style', 'overflow-y:hidden;display:block;')
          } else {
            $('html').attr('style', 'overflow-y:auto;display:block;')
          }
        }

        $('html').show()

        if (width > 960) {
          isWap.value = false
          $('.middle-box').attr('style', '')
          $('.header-menu').show()
          $('header').removeClass('mob-bg')
          $('.header-menu-close').hide()
        } else {
          isWap.value = true
        }
        if (width <= 960) {
          $('.top-right').css('top', `${window.innerHeight - 87}px`)
        } else {
          $('.top-right').css('top', `unset`)
        }
        // setTimeout(() => {
        //   $('html').show()
        // }, 3000)
      }
      function htmlshow() {
        checkFontSize()
      }
      $(document).ready(htmlshow)
      $(window).resize(checkFontSize)
      if ($(window).width() - getScrollbarWidth() <= 960) {
        $('.top-right').css('top', `${window.innerHeight - 87}px`)
      } else {
        $('.top-right').css('top', `unset`)
      }
    })
    const router = useRouter()
    const routeType = ref('')
    watch(
      () => router.currentRoute.value.name,
      (newValue, oldValue) => {
        store.commit('SET_PATH', oldValue)
        routeType.value = router.currentRoute.value.meta.type
        console.log(routeType.value)
        if (isWap.value) {
          $('.middle-box').hide()
          $('.header-menu').show()
          $('.header-menu-close').hide()
          $('header').removeClass('mob-bg')
        }
      },
      { immediate: true }
    )
    const toUrl = (path) => {
      if (path) {
        router.push({
          path
        })
        if ($(window).width() - getScrollbarWidth() > 960) {
          $('.games-list-box').hide()
        } else {
          $('.middle-box').hide()
          $('.header-menu').show()
          $('.header-menu-close').hide()
          $('header').removeClass('mob-bg')
        }
        $('header').removeClass('games-bg')
        $('.show-info img').removeClass('show')
      }
    }
    const onMouseOverGame = (type, index, img) => {
      headerGameAct.value = {
        type,
        index,
        img
      }
    }
    return {
      toUrl,
      routeType,
      headerLink,
      footerLink,
      headerGameInfo,
      headerGameAct,
      onMouseOverGame
    }
  }
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300;400;500;600;700&display=swap');
</style>
<style lang="less">
header,
section,
footer,
aside,
nav,
article,
figure {
  display: block;
}
li {
  list-style: none;
}
img {
  vertical-align: middle;
}
i {
  font-style: normal;
}
input,
textarea {
  border: none;
  outline: none;
  resize: none;
}
a {
  color: #333;
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  box-sizing: border-box;
  // touch-action: none;
  margin: 0;
  padding: 0;
}
html {
  display: none;
  overflow: hidden;
  font-size: 62.5%;
}
// html {
//   font-size: 62.5%;
//   display: none;
//   // overflow-y: auto;
// }
// @font-face {
//   font-family: 'Montserrat';
//   src: url(https://ambrus.s3.amazonaws.com/1653215851675_0.59_Montserrat-Regular-8.otf);
//   font-weight: 400;
// }
// @font-face {
//   font-family: 'Teko';
//   src: url(https://ambrus.s3.amazonaws.com/1653215921732_0.59_Teko-Regular-2.ttf);
//   font-weight: 400;
// }
body {
  font-family: -apple-system, BlinkMacSystemFont, Montserrat, Teko, 'PingFang SC', 'Helvetica Neue',
    STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;
  font-size: 1.4rem;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  background: #f0f0f0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: white;
  background-color: #2a2a2a;
  // background-image: url(https://ambrus.s3.amazonaws.com/1654997771178_0.80_BG-PATTERN.png);
  background-size: 100% auto;
  background-position: top;
}
.clearfix {
  display: block;
  &:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
.hidden {
  display: none;
}
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat"); */

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
}
.btn {
  position: relative;
  background-image: linear-gradient(
    60deg,
    #f0f0f0,
    #f0f0f0 10%,
    #ff4125 10%,
    #ff4125 10.5%,
    #f0f0f0 10.5%,
    #f0f0f0 11.2%,
    #f43619 11.2%,
    #ff4125 13%,
    #ff4125 89%,
    #f43619 90.8%,
    #f0f0f0 90.8%,
    #f0f0f0 91.5%,
    #ff4125 91.5%,
    #ff4125 92%,
    #f0f0f0 92%,
    #f0f0f0 100%
  );
  background-size: 150%;
  background-position: center;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.25s all ease-in-out;
  text-align: center;
  color: white;
  font-family: Montserrat, sans-serif;
  user-select: none;
  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 1.2rem;
    background-size: 100%;
  }
  &:active {
    transform: scale(0.95);
    box-shadow: none;
    background-size: 150%;
  }
  span {
    font-weight: 600;
  }
}

.graybtn {
  background-color: #a0a4b0;
  background-image: unset;
  &:hover {
    transform: unset;
    box-shadow: unset;
    background-size: unset;
  }
  &:active {
    transform: unset;
    box-shadow: unset;
    background-size: unset;
  }
}

.loading-main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1c1a1c;
  z-index: 1000000000;
  background: url(https://ambrus.s3.amazonaws.com/1655095833723_0.31_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220613124516.jpg);
  background-size: cover;
  background-position: bottom center;
  .video-box {
    position: relative;
    height: 100vh;
    overflow: hidden;
    .video-background {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 100vh;
    }
  }
  .loading-box {
    margin: 0 auto;
    .loading-info {
      position: absolute;
      width: 88%;
      bottom: 8.8rem;
      left: 6%;
      .loading-text {
        font-family: Teko;
        font-weight: 400;
        font-size: 4.8rem;
        line-height: 6.9rem;
        color: #fff;
        padding-bottom: 0.4rem;
        span {
          color: #ff4125;
        }
      }
      .loading-skip {
        width: 50%;
      }
      #nprogress {
        position: relative;
        width: 100%;
        height: 1rem;
        background: rgba(255, 255, 255, 0.1);
        -webkit-transform: skew(-45deg);
        -moz-transform: skew(-45deg);
        -o-transform: skew(-45deg);
        overflow: hidden;
        .spinner {
          display: none;
        }
        .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 10rem;
          height: 100%;
          box-shadow: 0 0 10px #fff, 0 0 5px #fff;
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0, -0.4rem);
          -ms-transform: rotate(3deg) translate(0, -0.4rem);
          transform: rotate(3deg) translate(0, -0.4rem);
        }
        .bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 1rem;
          width: 100%;
          background: #eeeeee;
          box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 9.9rem;
  z-index: 99999999;
  display: none;
  &.bg {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
  }
  &.games-bg {
    height: 58.9rem;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
  }
  .info {
    position: relative;
    height: 9.9rem;
    .logo {
      position: absolute;
      width: 4rem;
      height: 4rem;
      top: 3rem;
      left: 3.2rem;
    }
    .middle-box {
      nav {
        margin-left: 8.8rem;
        > a,
        .show-info {
          position: relative;
          font-size: 1.4rem;
          font-family: Montserrat;
          font-weight: 400;
          text-align: center;
          text-transform: uppercase;
          color: #fff;
          flex: none;
          order: 0;
          flex-grow: 0;
          padding: 0 2.4rem;
          line-height: 9.9rem;
          display: block;
          float: left;
          cursor: pointer;
          > img {
            width: 0.8rem;
            margin-left: 0.8rem;
            &.show {
              transform: rotate(180deg);
            }
          }
          .soon {
            display: block;
            position: absolute;
            top: 6.8rem;
            left: 50%;
            margin-left: -2.45rem;
            width: 4.9rem;
            height: 1.4rem;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 0.4rem;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 0.8rem;
            line-height: 1.4rem;
            text-align: center;
            text-transform: uppercase;
          }
          &.has-act:not(.active):hover {
            font-weight: 600;
            color: #ff4125;
          }
          &.active {
            position: relative;
            font-family: Montserrat;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            // > img {
            //   transform: rotate(180deg);
            // }
            &::before {
              content: '';
              position: absolute;
              top: 4.85rem;
              left: 0;
              width: 100%;
              height: 0.2rem;
              background: red;
              position: absolute;
              background: #ff4125;
              z-index: -1;
            }
          }
        }
      }
      .top-right {
        position: absolute;
        right: 3.2rem;
        .link-list {
          float: left;
          a {
            padding: 0 1.35rem;
            height: 9.9rem;
            line-height: 9.9rem;
            img {
              width: 2.4rem;
            }
          }
        }
        .language {
          display: none;
          float: left;
          width: 5.7rem;
          height: 3.6rem;
          line-height: 3.6rem;
          background: #ffffff;
          border-radius: 0.4rem;
          font-family: Montserrat;
          font-weight: 400;
          text-align: center;
          color: #465358;
          cursor: pointer;
          margin: 3.15rem 1.2rem 0 1.35rem;
        }
        .user-btn-box {
          display: none;
          float: left;
          margin-top: 3.15rem;
          position: relative;
          .login-btn,
          .user-btn {
            display: block;
            width: 18.5rem;
            height: 3.6rem;
            line-height: 3.6rem;
            /* background: #ff4125; */
            border-radius: 0.4rem;
            font-family: Montserrat;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
          }

          .logout-btn {
            position: absolute;
            right: 0;
            top: 3.6rem;
            width: 18.5rem;
            height: 3.6rem;
            line-height: 3.6rem;
            background: #ffffff;
            border-radius: 0.4rem;
            position: absolute;
            font-family: Montserrat;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;
            color: #ff4125;
            z-index: 9999;
          }
        }
      }
    }

    .games-list-box {
      position: absolute;
      top: 9.9rem;
      left: 0;
      width: 100%;
      height: 49rem;
      text-align: left;
      box-sizing: border-box;
      .games-list {
        padding: 0 0 0 8.8rem;
        height: 52.5rem;
        margin: 0 auto;
        .games-list-info {
          float: left;
          width: 36rem;
          margin-right: 2.4rem;
          .games-text {
            font-family: Montserrat;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 1.7rem;
            text-transform: uppercase;
            color: #a0a4b0;
            padding: 4.8rem 0 0 2.4rem;
          }
          .games-info-name {
            display: block;
            width: 36rem;
            height: 6rem;
            border-radius: 0.8rem;
            margin-top: 1.2rem;
            font-family: Montserrat;
            font-weight: 700;
            font-size: 2rem;
            line-height: 6rem;
            text-transform: uppercase;
            padding: 0 2.4rem;
            color: #ffffff;
            cursor: pointer;
            &.active {
              background: #2a2a2a;
            }
            span {
              font-size: 1.2rem;
              text-transform: uppercase;
              color: #ff4125;
              margin-left: 1rem;
              vertical-align: top;
            }
          }
        }
        .games-mob-img-list {
          display: none;
        }
        .games-list-exp {
          float: left;
          width: 30rem;
          margin-right: 2.4rem;
          .games-text {
            font-family: Montserrat;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 1.7rem;
            text-transform: uppercase;
            color: #a0a4b0;
            padding: 4.8rem 0 0 2.4rem;
          }
          .games-exp-name {
            display: block;
            width: 30rem;
            height: 6rem;
            border-radius: 0.8rem;
            margin-top: 1.2rem;
            font-family: Montserrat;
            font-weight: 700;
            font-size: 2rem;
            line-height: 6rem;
            text-transform: uppercase;
            padding: 0 2.4rem;
            color: #ffffff;
            &.active {
              background: #2a2a2a;
            }
            span {
              font-size: 1.2rem;
              text-transform: uppercase;
              color: #ff4125;
              margin-left: 1rem;
              vertical-align: top;
            }
          }
        }
        .games-list-img {
          float: left;
          margin-top: 7.7rem;
          width: 55.6rem;
          height: 36rem;
          background: linear-gradient(229.11deg, #393939 1.23%, #4f4f4f 73.2%);
          background-size: cover;
          background-position: center;
          border-radius: 0.4rem;
          border: 0.2rem solid rgba(160, 164, 176, 0.2);
          img {
            width: 100%;
          }
        }
      }
    }

    .menu-box {
      display: none;
    }
  }
}

.main {
  display: none;
  width: 100%;
  min-height: 60rem;
}

footer {
  display: none;
  width: 100%;
  height: 40.1rem;
  background: #465358;
  .info {
    position: relative;
    height: 40.1rem;
    /* margin: 0 auto; */
    .logo {
      position: absolute;
      width: 11.7rem;
      left: 8.8rem;
      top: 4.8rem;
    }
    .sub-box {
      position: absolute;
      left: 22.9rem;
      top: 6.7rem;
      .sub-title {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.8rem;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 0.4rem;
      }
      .sub-input-box {
        .sub-input {
          width: 25.8rem;
          height: 4.8rem;
          padding-left: 1.6rem;
          float: left;
          border: none;
          outline: none;
          font-family: Montserrat;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 2.8rem;
          &::-webkit-input-placeholder,
          &:-moz-placeholder,
          &::-moz-placeholder,
          &:-ms-input-placeholder {
            font-family: Montserrat;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 2.8rem;
            color: #a8a8a8;
          }
        }

        .sub-btn {
          width: 11.7rem;
          height: 4.8rem;
          line-height: 4.8rem;
          background: #ff4125;
          font-family: Montserrat;
          font-weight: 600;
          font-size: 1.4rem;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
          float: left;
        }
      }
    }
    .link-list {
      position: absolute;
      right: 8.95rem;
      top: 10.1rem;
      a {
        img {
          width: 2.4rem;
          margin-left: 2.7rem;
        }
      }
    }
    .footer-logo {
      text-align: center;
      padding: 18.9rem 0 0;
      img {
        width: 24rem;
      }
    }
    .help-link-list {
      text-align: center;
      padding: 3.6rem 0 1.2rem;
      height: 6.6rem;
      a {
        border-right: 0.1rem solid #2a2a2a;
        display: inline-block;
        padding: 0 2.4rem;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #a0a4b0;
        flex: none;
        order: 0;
        flex-grow: 0;
        display: none;
        &:last-child {
          border-right: 0;
        }
      }
    }
    .copyright {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: #ffffff;
      text-align: center;
    }
  }
}
.empty-main {
  width: 144rem;
  height: 60vh;
  background: rgba(0, 0, 0, 0.7);
  padding: 6rem;
  margin: 10rem auto;
  box-sizing: border-box;
}
@media screen and (max-width: 960px) {
  html {
    font-size: 62.5%;
    display: block;
  }
  .empty-main {
    width: 100%;
    padding: 0;
  }
  .loading-main {
    .loading-box {
      .loading-info {
        width: 81.8%;
        bottom: 9.6vw;
        left: 9.6%;
        .loading-text {
          font-size: 2.4rem;
          line-height: 3.4rem;
          padding-bottom: 1.2rem;
        }
        .loading-skip {
          width: 100%;
        }
      }
    }
  }
  header {
    width: 100vw;
    height: 6.8rem;
    // background: rgba(0, 0, 0, 0.4);
    // backdrop-filter: blur(1rem);
    &.bg {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(1rem);
    }
    &.mob-bg {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(1rem);
      -webkit-backdrop-filter: blur(1rem);
      height: 100vh;
    }
    .info {
      width: 100%;
      height: 6.8rem;
      .logo {
        position: unset;
        width: 4rem;
        height: 4rem;
        margin: 1.4rem;
      }
      .middle-box {
        display: none;
        nav {
          margin-left: 0;
          position: fixed;
          top: 6.8rem;
          left: 0;
          width: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          // background: rgba(0, 0, 0, 0.4);
          // backdrop-filter: blur(1rem);
          height: calc(100vh - 6.8rem - 8.7rem);
          > a,
          .show-info {
            float: unset;
            margin: 0 32%;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 8rem;
            color: #fff;
            padding: 0;
            .soon {
              top: 6rem;
            }
            &.active::before {
              top: 3.9rem;
            }
          }
        }
        .top-right {
          position: fixed;
          /* top: calc(100vh - 17.5rem); */
          top: calc(100vh - 8.7rem);
          left: 0;
          right: unset;
          background: #2a2a2a;
          text-align: center;
          width: 100%;
          .link-list {
            background: #2a2a2a;
            position: unset;
            top: unset;
            right: unset;
            text-align: center;
            padding-top: 3.9rem;
            padding-bottom: 2.4rem;
            float: unset;
            margin-right: 0;
            a {
              line-height: unset;
            }
          }
          .language {
            display: none;
          }
          .user-btn-box {
            position: relative;
            background: #f0f0f0;
            padding: 2.8rem 3.2rem 3.6rem;
            float: unset;
            margin-top: 0;
            .login-btn,
            .user-btn {
              display: block;
              position: unset;
              top: unset;
              right: unset;
              width: 100%;
              height: 4.8rem;
              line-height: 4.8rem;
            }
            .logout-btn {
              width: calc(100% - 6.4rem);
              top: 7rem;
              right: unset;
            }
          }
        }
      }

      .games-list-box {
        position: unset;
        top: unset;
        height: unset;
        .games-list {
          height: unset;
          width: unset;
          padding: 0 2.4rem;
          .games-list-info {
            display: none;
          }
          .games-mob-img-list {
            display: block;
            padding-top: 0.7rem;
            .games-mob-img {
              margin-top: 2.4rem;
              width: 100%;
              height: 53.33vw;
              background: linear-gradient(229.11deg, #393939 1.23%, #4f4f4f 73.2%);
              border-radius: 0.4rem;
              border: 0.2rem solid rgba(160, 164, 176, 0.2);
              background-size: cover;
              background-position: center;
              img {
                width: 100%;
              }
            }
          }
          .games-list-exp {
            float: unset;
            width: 100%;
            margin-right: 0;
            .games-text {
              font-family: Montserrat;
              font-weight: 500;
              font-size: 1.4rem;
              line-height: 1.7rem;
              text-transform: uppercase;
              color: #a0a4b0;
              padding: 2.4rem 0 1.2rem 0;
            }
            .games-exp-name {
              display: block;
              width: 100%;
              gap: 1rem;
              height: 6rem;
              border-radius: 0.8rem;
              margin-top: 0;
              font-family: Montserrat;
              font-weight: 700;
              font-size: 2rem;
              padding: 0;
              margin-bottom: 0.3rem;
              &.active {
                background: unset;
              }
            }
          }
          .games-list-img {
            display: none;
          }
        }
        // .games-list {
        //   height: unset;
        //   width: unset;
        //   padding: 0 2.4rem;
        //   .games-img-text {
        //     display: none;
        //   }
        //   .games-img-list {
        //     .games-img-box {
        //       width: calc(100vw - 4.8rem);
        //       margin-bottom: 1.2rem;
        //     }
        //   }
        // }
      }

      .menu-box {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        img {
          &.header-menu {
            width: 2.4rem;
            margin-top: 2.4rem;
            margin-right: 2.5rem;
          }
          &.header-menu-close {
            width: 2rem;
            margin-top: 2.4rem;
            margin-right: 2.5rem;
          }
        }
      }
    }
  }

  footer {
    position: relative;
    width: 100%;
    height: 37.8rem;
    background: #465358;
    padding: 4rem 2.4rem 3.6rem;
    .info {
      position: unset;
      width: 100%;
      height: unset;
      .logo {
        position: absolute;
        width: 6rem;
        left: 2.4rem;
        top: 2.4rem;
      }
      .sub-box {
        position: unset;
        left: unset;
        top: unset;
        height: 9.2rem;
        .sub-title {
          font-size: 1.4rem;
          margin-bottom: 1.6rem;
          text-align: center;
        }
        .sub-input-box {
          max-width: 50rem;
          margin: 0 auto;
          .sub-input {
            width: 64.2%;
            -webkit-appearance: none;
            border-radius: 0;
            line-height: normal;
          }
          .sub-btn {
            width: 35.8%;
          }
        }
      }

      .link-list {
        position: unset;
        right: unset;
        top: unset;
        margin: 4rem 0;
        text-align: center;
        a {
          img {
            margin: 0 1.35rem;
          }
        }
      }
      .footer-logo {
        text-align: center;
        padding: 0;
        img {
          width: 10.8rem;
        }
      }
      .help-link-list {
        padding: 2.4rem 0;
        a {
          padding: 0 2rem;
          font-size: 1rem;
          line-height: 1.2rem;
          &:last-child {
            padding-right: 0;
            border-right: 0;
          }
          &:first-child {
            padding-left: 0;
          }
        }
      }
    }
  }
}

.inside {
  position: relative;
  text-align: center;
  font-family: Teko, sans-serif;
  font-size: 6.4rem;
  filter: grayscale(100%);
  transition: all 0.3s;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -99;
    background: url(https://ambrus.s3.amazonaws.com/1654419946140_0.44_Square.png);
    background-size: auto 60px;
    background-position: center;
    background-repeat: no-repeat;
    animation: square infinite 1s;
  }
}

@keyframes square {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (min-width: 1440px) {
  html {
    display: block;
  }
}
@media screen and (min-width: 640px) and (max-width: 960px) {
  html {
    font-size: 125%;
    display: block;
  }
  .loading-main {
    .loading-box {
      .loading-info {
        width: 81.25%;
        bottom: 9.375vw;
        left: 9.375%;
        .loading-text {
          font-size: 4.8rem;
          line-height: 6.9rem;
          padding-bottom: 1.2rem;
        }
      }
    }
  }
}
@media screen and (min-width: 640px) and (max-width: 720px) {
  html {
    font-size: 106%;
    display: block;
  }
}
</style>
