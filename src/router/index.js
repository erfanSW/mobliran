import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Header,
    children: [
      {
        path: '',
        component: HelloWorld,
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
