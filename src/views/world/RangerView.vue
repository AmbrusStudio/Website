<template>
  <main>
    <div class="top">
      <div class="shadow"></div>
      <div class="hashtag text-white">
        <span>E4C: Verse</span>
        <span class="hashtag-slash">/</span>
        <span>Rangers - Rin</span>
      </div>
      <div class="information">
        <div class="number">
          <div class="number-line"></div>
          <div class="number-text"><span>E4C Ranger 001</span></div>
          <div class="number-rec"></div>
        </div>
        <div>
          <div class="name">
            <div class="rin">Rin</div>
            <div class="heir">Heir of Musashi</div>
          </div>
          <div class="ability-wrapper">
            <div class="ability-number">
              <span>Abilities + Powers</span>
              <span>1/4</span>
            </div>
            <div class="ability">
              <div class="ability-title">
                <span>Kendo</span>
                <span>劍道</span>
              </div>
              <p class="ability-desc">
                Rin is from a traditional samurai family. When training with her father as a child,
                she showed great talent while her father was the only person she was unable to beat
                in duels. However, she didn’t get a chance to beat him before his death.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="quote">
      <p>
        “My katana is embossed in chaos, death, and soon… your blood and the tears of your worst
        nightmare. ”
      </p>
    </div>
    <div class="intro"></div>
  </main>
</template>

<script>
export default {
  name: 'RangerView'
}
</script>

<style scoped>
.shadow {
  background: url('/src/assets/images/女武士2 1.png') center no-repeat;
  height: 1024px;
  z-index: 1;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}

main {
}

.top {
  background-color: #d24f6e;
  height: 924px;
  font-weight: 500;
  padding-top: 24px;
  color: white;
}

.hashtag {
  z-index: 2;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  background: #9d3b52;
  margin-left: 88px;
  width: 248px;
  height: 41px;
  padding: 12px 24px;
}

.hashtag-slash {
  margin: 12px;
}

.information {
  margin-left: 80px;
  display: flex;
  gap: 30px;
  z-index: 2;
}

.number {
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  gap: 24px;
  width: 52px;
  height: 770px;
  justify-items: center;
  align-items: center;
}

.number-rec {
  width: 24px;
  height: 24px;
  background: #edb8c5;
  flex: 0 0 24px;
}

.number-text {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.number-text > span {
  font-family: var(--ft);
  font-weight: 300;
  font-size: 36px;
  line-height: 52px;
  transform: rotate(-90deg);
  white-space: nowrap;
  text-transform: uppercase;
}

.number-line {
  flex: 0 1 494px;
  width: 2px;
  background: #edb9c5;
}

.name {
  z-index: 0;
  width: 240px;
  height: 156px;
  font-style: italic;
  text-transform: uppercase;
}

.rin {
  font-weight: 700;
  font-size: 128px;
  line-height: 156px;
  text-transform: uppercase;
}

.heir {
  margin-top: -20px;
  font-size: 24px;
  line-height: 29px;
}

.ability-wrapper {
  width: 440px;
  height: 231px;
  margin-top: 356px;
}

.ability-number {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: -10px;
  text-transform: uppercase;
}

.ability-number *:nth-child(1) {
  margin-right: 12px;
}

.ability-number *:nth-child(2) {
  font-weight: 700;
}

.ability-title {
  font-size: 72px;
  font-weight: 700;
  text-transform: uppercase;
}

.ability-title *:nth-child(1) {
  line-height: 88px;
  font-family: var(--fm);
  margin-right: 15px;
  font-weight: inherit;
}

.ability-title *:nth-child(2) {
  font-family: var(--fz);
  line-height: 104px;
  font-weight: inherit;
}

.ability-desc {
  font-family: var(--fm);
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}

.quote {
  height: 360px;
  background-color: white;
  font-family: var(--ft);
  font-weight: 400;
  font-size: 64px;
  line-height: 60px;
  color: #2a2a2a;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.quote p {
  flex: 0 1 1000px;
}

.intro {
  /*1805+795+1504-1024-360*/
  height: 2720px;
  background: #272727;
}
</style>
