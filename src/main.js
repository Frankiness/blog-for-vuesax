import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'boxicons'
import 'boxicons/css/boxicons.min.css'
import 'atropos/css'

Vue.config.productionTip = false

Vue.use(Vuesax, {})

Vue.mixin({
  methods: {
    changeTitle: function (title) {
      const Config = require('@/defaults/config.json')
      document.title = `${title} - ${Config.config.blogTitle}`
    },
    getConfig: function (name = 'config.json') {
      const Config = require(`@/defaults/${name}`)
      return Config
    }
  },
  computed: {
    tags () {
      const Posts = require('@/defaults/posts.json')

      const posts = Posts.posts
      const tags = []
      for (var i = 0; i < posts.length; i++) {
        for (var j = 0; j < posts[i].tags.length; j++) {
          let index = -1
          for (var k = 0; k < tags.length; k++) {
            if (tags[k].name === posts[i].tags[j]) {
              index = k
              break
            }
          }
          if (index === -1) {
            tags.push({
              name: posts[i].tags[j],
              posts: [posts[i]]
            })
          } else {
            tags[index].posts.push(posts[i])
          }
        }
      }
      return tags
    }
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
