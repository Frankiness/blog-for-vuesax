<template>
  <div>
    <atropos :shadowScale="0.9">
      <router-link :to="`/posts/${post.id}`">
        <vs-card class="post-card">
          <template #title>
            <h3>{{ post.title }}</h3>
            <small>{{ post.date }}</small>
          </template>
          <template #img>
            <img :src="post.cover" alt />
          </template>
          <template #text>
            <p class="post-txt">{{ post.desc }}</p>
            <small class="post-card-tag">
              <b :key="i" v-for="(tag, i) in post.tags" style="margin-right: 5px">
                {{ tag }}
              </b>
            </small>
          </template>
          <template #interactions>
            <vs-tooltip right shadow interactivity>
              <Avatar />
              <template #tooltip>
                由<b>{{ config.username }}</b>创作
              </template>
            </vs-tooltip>
          </template>
        </vs-card>
      </router-link>
    </atropos>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import Atropos from 'atropos/vue'

export default {
  name: 'PostCard',
  props: ['post'],
  data () {
    return {
      config: this.getConfig().config
    }
  },
  components: {
    Avatar,
    Atropos
  }
}
</script>

<style>
.post-txt {
  overflow: hidden;
  text-overflow: ellipsis;
  display: auto;
}

.post-card .vs-card {
  height: 380px !important;
}

.post-card-tag {
  position: absolute;
  bottom: 20px;
}
</style>
