<template>
  <div
    class="notFound-wrap"
    :style="{height: (windowHeight - 150) + 'px'}"
  >
    <div class="textWrap">
      <h2>404 Not Found</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      windowHeight: window.innerHeight
    }
  }
}
</script>

<style lang="scss">
.notFound-wrap {
  width: 100%;
  text-align: center;
  position: relative;

  h2,
  p {
    font-size: 40px;
  }

  .textWrap {
    width: 100%;
    top: 40%;
    position: absolute;
    color: #409eff;
  }
}
</style>
