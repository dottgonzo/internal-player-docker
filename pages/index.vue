<template>
<div>
  <section class="container" style="min-height:90vh;margin-bottom:100px">

    <div>
      <h1 style="text-align:center;margin:3vh">Internal Player</h1>



      <br />
      <div style="text-align:center;width:100%">

      <div style="max-width:600px;margin:auto" id="streamvideo"></div>
</div>
<!--

      <h1 class="title">
        sassariinternalplayer
      </h1>
      -->


    </div>
  </section>
<div class="container">
<FooterComponent style="width:100%" />
</div>
  </div>
</template>

<script>
// import Headerbar from '~/components/Headerbar.vue'
import FooterComponent from '~/components/Footer.vue'

export default {
  components: {
    FooterComponent
  },
  mounted() {
    let hlsPort = 1980
    let streamhost
    let streamchannel
    if (window.location.href.split('streamPort=').length > 1) {
      hlsPort = window.location.href.split('streamPort=')[1].split('&')[0]
    }

    if (window.location.href.split('streamUrl=').length > 1) {
      streamhost = window.location.href.split('streamUrl=')[1].split('&')[0]
    } else {
      streamhost = window.location.href.split('//')[1].split('/')[0].split(':')[0]
    }

    if (window.location.href.split('channel=').length > 1) {
      streamchannel = window.location.href.split('channel=')[1].split('&')[0]
    } else {
      streamchannel = 'test'
    }

    const options = {
      channel: streamchannel,
      ratio43: true,
      poster: false,
      el: 'streamvideo', // default is videojs
      hostname: streamhost,
      swfLib: '/bower/streampagelib/dist/GrindPlayer.swf',
      hlsPort: hlsPort,
      autoplay: true
    }
    window.SPlayer(options)
  }
}
</script>

<style>


</style>
