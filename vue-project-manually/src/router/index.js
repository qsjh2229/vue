import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dataginding from '../views/DataBinding.vue'
import Databinding2 from '../views/DataBinding2.vue'
import Nested from '../components/Nested.vue'
import Child from'../views/ChildComponent.vue'
import Parent from'../views/ParentComponent.vue'
import Child2 from'../views/ChildComponent2.vue'
import Parent2 from'../views/ParentComponent2.vue'
import Child3 from'../views/ChildComponent3.vue'
import Parent3 from'../views/ParentComponent3.vue'
import Child4 from'../views/ChildComponent4.vue'
import Parent4 from'../views/ParentComponent4.vue'
import Child5 from'../views/ChildComponent5.vue'
import Parent5 from'../views/ParentComponent5.vue'
import CompositionAPI from '../views/CompositionAPI.vue'
import Provide from '../views/CompositionAPIprovide.vue'
import Inject from '../views/CompositionAPIInject.vue'
import Naverlogin from '../views/NaverLogin.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'databinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dataginding
  },
  {
    path: '/databinding2',
    name: 'databinding2',
    component: Databinding2
  },
  {
    path: '/nested',
    name: 'nested',
    component: Nested
  },
  {
    path: '/parent',
    name: 'parent',
    component: Parent
  },
  {
    path: '/child',
    name: 'child',
    component: Child
  },
  {
    path: '/parent2',
    name: 'parent2',
    component: Parent2
  },
  {
    path: '/child2',
    name: 'child2',
    component: Child2
  },
  {
    path: '/child3',
    name: 'child3',
    component: Child3
  },
  {
    path: '/parent3',
    name: 'parent3',
    component: Parent3
  },
  {
    path: '/child4',
    name: 'child4',
    component: Child4
  },
  {
    path: '/parent4',
    name: 'parent4',
    component: Parent4
  },
  {
    path: '/parent5',
    name: 'parent5',
    component: Parent5
  },
  {
    path: '/child5',
    name: 'child5',
    component: Child5
  },
  {
    path: '/Composition',
    name: 'Composition',
    component: CompositionAPI
  },
  {
    path: '/inject',
    name: 'inject',
    component: Inject
  },
  {
    path: '/provide',
    name: 'provide',
    component: Provide
  },
  {
    path: '/naverlogin',
    name: 'naverlogin',
    component: Naverlogin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
