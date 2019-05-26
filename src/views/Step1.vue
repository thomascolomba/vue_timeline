<template>
  <div class="step1">
    <h1>Step 1</h1>
    <div><span>fake input : </span><input type="text"/></div>
    <div><span>fake checkbox : </span><input type="checkbox"/></div>
    <div><button @click="onStep1Next">Next</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Step1',
  methods: {
    onStep1Next: function () {
      console.log('onStep1Next')
      EventBus.$emit(BusinessEventList.Step1Validated)
    }
  }
}
</script>
