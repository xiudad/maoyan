<template>
  <div id="app">
    <Header></Header>

    <ul>
      <router-link active-class="hehe" tag="li" to = "./rec">推荐</router-link>
      <router-link active-class="hehe" tag="li" to = "./singer">歌手</router-link>
      <router-link active-class="hehe" tag="li" to = "./rank">排行</router-link>
      <router-link active-class="hehe" tag="li" to = "./search">搜索</router-link>

    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/header";




export default {
  components: {
    Header,
  
  }
};
</script>

<style>
#app {
  background: #222;
}
ul {
  display: flex;
  list-style: none;
}
li{
  flex: 1;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #919191;
  font-size: 14px;

}
.hehe {
  color: #ffcd32;
  border-bottom:1px solid #ffcd32;

}
</style>