<template>
  <div class="rank">
    <div class="cone">
      <div class="pic"></div>
      <div class="noun">
        <p>1 念想 -易洋千玺</p>
        <p>2 心引力 -王俊凯/蔡依林</p>
        <p>3 你的答案 -阿冗</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style>
.rank {
  width: 100%;
  height: 500px;
  background-color: #222;
}
.cone {
  display: flex;
  height: 100px;
  background-color: #222;
  margin-top: 20px;
}
.pic {
  width: 100px;
  height: 100px;
  background-color: #444;
  margin-left: 20px;
}
.noun {
  font-size: 12px;
  color: #6A6A6A;
  width: 235px;
  background-color: #333;
}
.noun>p{
  margin: 10px;
}
</style>