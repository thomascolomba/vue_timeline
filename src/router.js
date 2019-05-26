import Vue from 'vue'
import Router from 'vue-router'
import Step1 from './views/Step1.vue'
import Step2 from './views/Step2.vue'
import Step3 from './views/Step3.vue'
import Step4 from './views/Step4.vue'
import Step5 from './views/Step5.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Step1
    },
    {
	  path: '/step1',
	  name: 'Step1',
	  component: Step1
	},
    {
	  path: '/step2',
	  name: 'Step2',
	  component: Step2
	},
    {
	  path: '/step3',
	  name: 'Step3',
	  component: Step3
	},
    {
	  path: '/step4',
	  name: 'Step4',
	  component: Step4
	},
    {
	  path: '/step5',
	  name: 'Step5',
	  component: Step5
	}
  ]
})
