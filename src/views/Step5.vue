<template>
  <div class="step5">
    <h1>Step 5</h1>
    <div><span>fake input : </span><input type="text"/></div>
    <div><span>fake checkbox : </span><input type="checkbox"/></div>
    <div><button @click="onStep5Next">Finalize form</button></div>
  </div>
</template>

<script>
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

export default {
  name: 'Step5',
  methods: {
    onStep5Next: function () {
      console.log('onStep5Next')
      EventBus.$emit(BusinessEventList.Step5Validated)
    }
  }
}
</script>
