import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
// import Home from '../views/Home.vue'
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
  mode: 'history',
  routes
})

export default router
