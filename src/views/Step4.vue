<template>
  <div class="step4">
    <h1>Step 4</h1>
    <div><span>fake input : </span><input type="text"/></div>
    <div><span>fake checkbox : </span><input type="checkbox"/></div>
    <div><button @click="onStep4Next">Next</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Step4',
  methods: {
    onStep4Next: function () {
      console.log('onStep4Next')
      EventBus.$emit(BusinessEventList.Step4Validated)
    }
  }
}
</script>
