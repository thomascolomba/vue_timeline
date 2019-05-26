<template>
  <div class="step2">
    <h1>Step 2</h1>
    <div><span>fake input : </span><input type="text"/></div>
    <div><span>fake checkbox : </span><input type="checkbox"/></div>
    <div><button @click="onStep2Next">Next</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Step2',
  methods: {
    onStep2Next: function () {
      console.log('onStep2Next')
      EventBus.$emit(BusinessEventList.Step2Validated)
    }
  }
}
</script>
