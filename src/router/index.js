import Vue from 'vue'
import VueRouter from 'vue-router'
import Understand from '../components/understand.vue'
import CustomerInfo from "@/components/CustomerInfo";
import Overview from "@/components/Overview";

Vue.use(VueRouter)


const router = new VueRouter({
  routes : [
    {
      path: '/', name:'overview', component: Overview
    },
    {
      path: '/customerInfo/:cid', name:'customerInfo', component: CustomerInfo
    },
    {
      path: '/understand/:id', name:'understand', component: Understand
    }
  ]
})

export default router
