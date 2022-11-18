<template>
  <div>
    <div id="home-background">
        <h1>{{ config.name }}<br/>{{ config.description }}</h1>
      </div>
    <div class="container">
      <h2>Latest Posts</h2>
      <hr/>
      <div class="grid-3_xs-1_sm-2_md-2" v-if="posts.length">
        <div
          :key="index"
          v-for="(post, index) in posts.slice(Math.max(posts.length - 6, 0)).reverse()"
          class="col"
        >
          <PostCard :post="post" class="center" />
        </div>
      </div>
      <Nothing v-else />
    </div>
  </div>
</template>

<script>
// import Avatar from '@/components/Avatar.vue'
import PostCard from '@/components/PostCard.vue'
import Nothing from '@/components/Nothing.vue'

import { butterfliesBackground } from 'threejs-toys'

export default {
  name: 'Home',
  components: {
    // Avatar,
    PostCard,
    Nothing
  },
  data () {
    return {
      posts: this.getConfig('posts.json').posts,
      config: this.getConfig().config
    }
  },
  methods: {
    createBackground () {
      butterfliesBackground({
        el: document.getElementById('home-background'),
        gpgpuSize: 64,
        background: 0xffffff,
        material: 'basic', // 'basic', 'phong', 'standard'
        materialParams: { transparent: true, alphaTest: 0.5 },
        texture: 'images/texture/butterflies.png',
        textureCount: 4,
        wingsScale: [1, 1, 1],
        wingsWidthSegments: 8,
        wingsHeightSegments: 8,
        wingsSpeed: 0.75,
        wingsDisplacementScale: 1.25,
        noiseCoordScale: 0.01,
        noiseTimeCoef: 0.0005,
        noiseIntensity: 0.0025,
        attractionRadius1: 100,
        attractionRadius2: 150,
        maxVelocity: 0.1
      })
    }
  },
  mounted () {
    this.createBackground()
  }
}
</script>

<style>
#home-background{
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;
  touch-action: pan-up;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  text-shadow: 0 0 5px #000000, 0 0 20px #000;
  user-select: none;
}
h1 {
  position: absolute;
  width: auto;
  height: 340px;
  line-height: 70px;
  margin: 20px auto 0;
  font-size: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
