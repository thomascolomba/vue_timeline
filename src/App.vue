<template>
  <div id="app">
    <Timeline/>
    <router-view/>
  </div>
</template>
<script>
import Timeline from '@/components/Timeline/Timeline.fragment.vue'

export default {
  name: 'app',
  components: {
    Timeline
  }
}
</script>
<style>
body {
  font-family: "Times New Roman", Times, serif;
}
</style>
