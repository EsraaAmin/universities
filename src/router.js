import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import i18n from './i18n'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}`
    },
      {
        path: '/:lang',
        component: {
          render (c){ return c('router-view')}
        },
        children:[
            {
              path: '/',
              name: 'home',
              component: Home
            },
            {
              path: 'login',
              name: 'login',
              component: () => import('./views/Login/Login.vue')
            },
            {
              path: 'register',
              name: 'register',
              component: () => import('./views/Registration/Register.vue')
            },
            {
              path: 'WhoAreYou',
              name: 'WhoAreYou',
              component: () => import('./views/WhoAreYou/WhoAreYou.vue')
            },
            {
              path: 'student',
              name: 'student',
              component: () => import('./views/Student/Student.vue')
            },
            {
              path: 'graduate',
              name: 'graduate',
              component: () => import('./views/Graduate/Graduate.vue')
            },
            {
              path: 'masterStudent',
              name: 'masterStudent',
              component: () => import('./views/MasterStudent/MasterStudent.vue')
            },
            {
              path: 'facultyMember',
              name: 'facultyMember',
              component: () => import('./views/FacultyMember/FacultyMember.vue')
            }
        ]
      
      }
  ]
})
