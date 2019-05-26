<template>
  <div class="step3">
    <h1>Step 3</h1>
    <div><span>fake input : </span><input type="text"/></div>
    <div><span>fake checkbox : </span><input type="checkbox"/></div>
    <div><button @click="onStep3Next">Next</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Step3',
  methods: {
    onStep3Next: function () {
      console.log('onStep3Next')
      EventBus.$emit(BusinessEventList.Step3Validated)
    }
  }
}
</script>
