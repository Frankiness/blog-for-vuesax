<template>
  <div class="container text-center">
    <h1>
      About Me
    </h1>
    <hr />
    <About />
  </div>
</template>

<script>
const About = require('@/defaults/about.md')

export default {
  name: 'AboutMe',
  components: {
    About: About.vue.component
  },
  mounted () {
    this.changeTitle('About')
  }
}
</script>
