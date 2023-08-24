import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBinding2 from '../views/DataBinding2.vue'
import AboutView from '../views/AboutView.vue'
import Nested from '../components/NestedComponent.vue'
import Child from '../views/ChildComponent.vue'
import Parent from '../views/ParentComponent.vue'
import Child2 from '../views/ChildComponent2.vue'
import Parent2 from '../views/ParentComponent2.vue'
import Parent3 from '../views/ParentComponent3.vue'
import Parent4 from '../views/ParentComponent4.vue'
import Parent5 from '../views/ParentComponent5.vue'
import Composition from '../views/CompositionAPI.vue'
import Provide from '../views/CompositionAPIProvide.vue'
import Inject from '../views/CompositionAPIInject.vue'
import NaverLogin from '../views/NaverLogin.vue'
import KakaoLogin from '../views/KakaoLogin.vue'


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
    component: AboutView
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataBinding
  },
  {
    path: '/databinding2',
    name: 'DataBinding2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataBinding2
  },
  {
    path: '/nested',
    name: 'Nested',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Nested
  },
  {
    path: '/child',
    name: 'Child',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Child
  },
  {
    path: '/parent',
    name: 'Parent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Parent
  },
  {
    path: '/child2',
    name: 'Child2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Child2
  },
  {
    path: '/parent2',
    name: 'Parent2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Parent2
  },
  {
    path: '/parent3',
    name: 'Parent3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Parent3
  },
  {
    path: '/parent4',
    name: 'Parent4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Parent4
  },
  {
    path: '/parent5',
    name: 'Parent5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Parent5
  },
  {
    path: '/composition',
    name: 'composition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Composition
  },
  {
    path: '/provide',
    name: 'Provide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Provide
  },
  {
    path: '/inject',
    name: 'Inject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Inject
  },
  {
    path: '/naverlogin',
    name: 'Naverlogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NaverLogin
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: KakaoLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
