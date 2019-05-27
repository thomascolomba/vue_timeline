<template>
  <div id="app">
    <RoutingManager/>
    <Timeline/>
    <router-view/>
  </div>
</template>
<script>
import Timeline from '@/components/Timeline/Timeline.fragment.vue'
import RoutingManager from '@/components/RoutingManager/RoutingManager.fragment.vue'

export default {
  name: 'app',
  components: {
    Timeline,
    RoutingManager
  }
}
</script>
<style>
body {
  font-family: "Times New Roman", Times, serif;
}
</style>
