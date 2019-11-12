<template>
  <div class="singer">
      <div class="hot">热门</div>
      <div class="per">
          <div class="photo"></div>
          <p>薛之谦</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .singer{
        width: 100%;
        height: 500px;
        background-color: #333;
    }

    .hot{
        width: 100%;
        height: 30px;
        background-color:#333;
        font-size: 14px;
        color:#919191;
        line-height: 30px;
        padding-left: 15px;
    }
    .per{
        display: flex;
        background-color: #222;
    }
    .photo{
        width: 50px;
        height: 50px;
        background: #666;
        border-radius: 50px;
        margin: 20px
    }
    .per>p{
        line-height: 90px;
        color: #8C8C8C;
        font-size: 14px;
    }

</style>