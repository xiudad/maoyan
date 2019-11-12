<template>
  <div class="rec">
    <div class="banner"></div>

    <div class="top">热门歌单推荐</div>

    <div class="verb" v-for = 'item in 100'>
      {{item}}
      <div class="pic"></div>
      <div class="con">
        <p class="one">QQ音乐VIP</p>
        <p>明天有空没？一起去旅行吧</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rec {
  width: 100%;
  height: 500px;
  background-color: #222;
}
.banner {
  width: 100%;
  height: 150px;
  background-color: #333;
}
.top {
  width: 100%;
  height: 65px;
  background-color: #222;
  text-align: center;
  line-height: 64px;
  font-size: 14px;
  color: #ffcd32;
}
.verb {
  width: 100%;
  height: 110px;
  background-color: #222;
  display: flex;
}

.verb > .pic {
  width: 62px;
  height: 62px;
  background-color: #666;
  margin-left: 20px;
}

.con > p {
  padding: 2px;
  line-height: 26px;
  font-size: 14px;
  color: #656565;
  padding: 2px 0px 0px 15px;
}
.verb > .con > .one {
  color: #fff;
  padding-top: 5px;
}
</style>