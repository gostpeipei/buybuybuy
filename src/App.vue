<template>
  <div id="app">
    <input type="button" value="Add" class="btn btn-primary" />
    <span class="icon lnr lnr-home"></span>
    <span class="icon lnr lnr-cart"></span>
    <i class="fa fa-search font-16"></i>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}

// <!-- Owl Carousel -->
// <link href="assets/vendors/owl-carousel/owl.carousel.min.css" rel="stylesheet">
// <link href="assets/vendors/owl-carousel/owl.theme.min.css" rel="stylesheet">

// <!-- Flex Slider -->
// <link href="assets/vendors/flexslider/flexslider.css" rel="stylesheet">

// <!-- Template Stylesheet -->
// <link href="assets/css/base.css" rel="stylesheet">
// <link href="assets/css/style.css" rel="stylesheet">
</script>

<style lang="scss">
// @import '@/assets/vendors/linearicons/linearicons.scss';
// @import '@/assets/vendors/font-awesome/font-awesome.min.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
