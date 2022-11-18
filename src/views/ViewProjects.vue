<template>
  <div class="container">
    <ProjectDes class="text-center" />
    <br />
    <div class="grid-3_xs-1_sm-2_md-2" v-if="projects.length">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col center"
      >
        <atropos :shadowScale="0.9">
          <a :href="project.link" target="_blank">
          <vs-card
            type="5"
          >
            <template #title>
              <h3>{{ project.name }}</h3>
            </template>
            <template #text>
              <p>
                {{ project.desc }}
              </p>
            </template>
            <template #img>
              <img :src="project.img" />
            </template>
          </vs-card>
        </a>
        </atropos>
      </div>
    </div>
    <Nothing v-else />
  </div>
</template>

<script>
import Nothing from '@/components/Nothing.vue'
import Atropos from 'atropos/vue'

const ProjectDes = require('@/defaults/project-desc.md')

export default {
  name: 'ViewProjects',
  components: {
    ProjectDes: ProjectDes.vue.component,
    Nothing,
    Atropos
  },
  data () {
    return {
      projects: this.getConfig('projects.json').projects
    }
  },
  mounted () {
    this.changeTitle('Projects')
  }
}
</script>
