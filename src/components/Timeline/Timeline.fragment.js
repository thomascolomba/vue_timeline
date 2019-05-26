import Vue from 'vue'
import EventBus from '@/events/EventBus.js'
import BusinessEventList from '@/events/BusinessEventList.js'

const Timeline = {
  name: 'Timeline',
  data : function () {
    return {
  	  currentActiveScreen: 1,
      isTimelineScreen1Validated: false,
      isTimelineScreen2Validated: false,
      isTimelineScreen3Validated: false,
      isTimelineScreen4Validated: false,
      isTimelineScreen5Validated: false,
  	}
  },
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
    onTimelineStep1Click: function () {
      if (this.currentActiveScreen > 1) {
        EventBus.$emit(BusinessEventList.ForcedNavigationToStep1)
      }
    },
    onTimelineStep2Click: function () {
      if (this.currentActiveScreen > 2) {
        EventBus.$emit(BusinessEventList.ForcedNavigationToStep2)
      }
    },
    onTimelineStep3Click: function () {
      if (this.currentActiveScreen > 3) {
        EventBus.$emit(BusinessEventList.ForcedNavigationToStep3)
      }
    },
    onTimelineStep4Click: function () {
      if (this.currentActiveScreen > 4) {
        EventBus.$emit(BusinessEventList.ForcedNavigationToStep4)
      }
    },
    onStep1Validated: function () {
      console.log('main.js onStep1Validated');
      this.currentActiveScreen = 2
      this.isTimelineScreen1Validated = true
    },
    onStep2Validated: function () {
      console.log('main.js onStep2Validated');
      this.currentActiveScreen = 3
      this.isTimelineScreen2Validated = true
    },
    onStep3Validated: function () {
      console.log('main.js onStep3Validated');
      this.currentActiveScreen = 4
      this.isTimelineScreen3Validated = true
    },
    onStep4Validated: function () {
      console.log('main.js onStep4Validated');
      this.currentActiveScreen = 5
      this.isTimelineScreen4Validated = true
    },
    onStep5Validated: function () {
      console.log('main.js onStep5Validated');
      this.isTimelineScreen5Validated = true
    },
    onNavigationToStep1Forced: function () {
      console.log('main.js onNavigationToStep1Forced');
      this.currentActiveScreen = 1
      this.isTimelineScreen1Validated = false
      this.isTimelineScreen2Validated = false
      this.isTimelineScreen3Validated = false
      this.isTimelineScreen4Validated = false
      this.isTimelineScreen5Validated = false
    },
    onNavigationToStep2Forced: function () {
      console.log('main.js onNavigationToStep2Forced');
      this.currentActiveScreen = 2
      this.isTimelineScreen1Validated = true
      this.isTimelineScreen2Validated = false
      this.isTimelineScreen3Validated = false
      this.isTimelineScreen4Validated = false
      this.isTimelineScreen5Validated = false
    },
    onNavigationToStep3Forced: function () {
      console.log('main.js onNavigationToStep3Forced');
      this.currentActiveScreen = 3
      this.isTimelineScreen1Validated = true
      this.isTimelineScreen2Validated = true
      this.isTimelineScreen3Validated = false
      this.isTimelineScreen4Validated = false
      this.isTimelineScreen5Validated = false
    },
    onNavigationToStep4Forced: function () {
      console.log('main.js onNavigationToStep4Forced');
      this.currentActiveScreen = 4
      this.isTimelineScreen1Validated = true
      this.isTimelineScreen2Validated = true
      this.isTimelineScreen3Validated = true
      this.isTimelineScreen4Validated = false
      this.isTimelineScreen5Validated = false
    }
  }
}

export default Timeline
