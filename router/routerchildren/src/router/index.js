import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import user from '@/components/user'
import about from '@/components/about'
import document from '@/components/document'
import study from '@/view/study'
import work from '@/view/work'
import hobby from '@/view/hobby'

Vue.use(Router)
let router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      alias: '/index'
    },
    {
      path: '/about',
      component: about,
      children:[
        {
          path:'',
          component: study,
          name:'study'
        },
        {
          path:'work',
          component: work,
          name:'work'
        },
        {
          path:'hobby',
          component: hobby,
          name:'hobby'
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/document',
      name: 'document',
      component: document
    },
    /*{
      path: '*',
      name: 'home',
      component: home
    }*/
  ]
})


export default router;
