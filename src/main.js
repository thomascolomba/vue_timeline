import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'
import Timeline from '@/components/Timeline/Timeline.fragment'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: function () {
    EventBus.$on(BusinessEventList.Step1Validated, this.onStep1Validated)
    EventBus.$on(BusinessEventList.Step2Validated, this.onStep2Validated)
    EventBus.$on(BusinessEventList.Step3Validated, this.onStep3Validated)
    EventBus.$on(BusinessEventList.Step4Validated, this.onStep4Validated)
    EventBus.$on(BusinessEventList.Step5Validated, this.onStep5Validated)
    EventBus.$on(BusinessEventList.ForcedNavigationToStep1, this.onNavigationToStep1Forced)
    EventBus.$on(BusinessEventList.ForcedNavigationToStep2, this.onNavigationToStep2Forced)
    EventBus.$on(BusinessEventList.ForcedNavigationToStep3, this.onNavigationToStep3Forced)
    EventBus.$on(BusinessEventList.ForcedNavigationToStep4, this.onNavigationToStep4Forced)
  },
  beforeDestroy: function () {
	EventBus.$off(BusinessEventList.Step1Validated, this.onStep1Validated)
	EventBus.$off(BusinessEventList.Step2Validated, this.onStep2Validated)
	EventBus.$off(BusinessEventList.Step3Validated, this.onStep3Validated)
	EventBus.$off(BusinessEventList.Step4Validated, this.onStep4Validated)
	EventBus.$off(BusinessEventList.Step5Validated, this.onStep5Validated)
	EventBus.$off(BusinessEventList.ForcedNavigationToStep1, this.onNavigationToStep1Forced)
    EventBus.$off(BusinessEventList.ForcedNavigationToStep2, this.onNavigationToStep2Forced)
    EventBus.$off(BusinessEventList.ForcedNavigationToStep3, this.onNavigationToStep3Forced)
    EventBus.$off(BusinessEventList.ForcedNavigationToStep4, this.onNavigationToStep4Forced)
  },
  methods: {
	  onStep1Validated: function () {
		  console.log('main.js onStep1Validated');
		  router.push({ name: 'Step2'})
	  },
	  onStep2Validated: function () {
		  console.log('main.js onStep2Validated');
		  router.push({ name: 'Step3'})
	  },
	  onStep3Validated: function () {
		  console.log('main.js onStep3Validated');
		  router.push({ name: 'Step4'})
	  },
	  onStep4Validated: function () {
		  console.log('main.js onStep4Validated');
		  router.push({ name: 'Step5'})
	  },
	  onStep5Validated: function () {
		  console.log('main.js onStep5Validated');
		  // nothing to do
	  },
	  onNavigationToStep1Forced: function () {
		  console.log('main.js onNavigationToStep1Forced');
		  router.push({ name: 'Step1'})
	  },
	  onNavigationToStep2Forced: function () {
		  console.log('main.js onNavigationToStep2Forced');
		  router.push({ name: 'Step2'})
	  },
	  onNavigationToStep3Forced: function () {
		  console.log('main.js onNavigationToStep3Forced');
		  router.push({ name: 'Step3'})
	  },
	  onNavigationToStep4Forced: function () {
		  console.log('main.js onNavigationToStep4Forced');
		  router.push({ name: 'Step4'})
	  }
  }
}).$mount('#app')
