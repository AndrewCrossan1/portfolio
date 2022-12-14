import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '@/store';
import {seoGuardWithNext} from '@aminoeditor/vue-router-seo';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false,
      seo: {
        title: 'Home | Andrew Crossan',
        metaTags: [
          {
            name: 'description',
            content: 'The homepage of my portfolio'
          }
        ]
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(seoGuardWithNext)

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    if (store.getters.isLoggedIn) {
      return next({name: 'home'})
    } else {
      next()
    }
  } else  if (to.meta && to.meta.requiresAuth === false) {
    next()
  } else {
    if (store.getters.isLoggedIn) {
      next()
    } else {
      next({name: 'login'})
    }
  }
});

export default router
