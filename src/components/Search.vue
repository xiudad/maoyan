<template>
  <div class="search">
    <div class="box">
      <i></i>
      <input type="text" placeholder="搜索歌曲,歌手">
    </div>
    <div class="hot-key">
      <h5>热门搜索</h5>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.search{
        width: 100%;
        height: 500px;
        background-color: #222;
    }

.box{
  width: 335px;
  height: 40px;
  border-radius: 6px;
  margin: 20px 15px 0 20px;
  background-color:#333;
  display:flex;
}
.box>i{
  width:24px;
  height: 25px;
  background-color:#567;
  margin:6px 0 8px 10px; 
}
.box>input{
  width:289px;
  height: 18px;
  background-color: #333;
  border: none;
  margin: 10px 6px 8px 10px;
}
.hot-key{
  color: #626262;
  margin-top: 25px;
  margin-left: 20px
}
.hot-key>h5{
  font-size: 14px;
  color: #919191;
}
</style>