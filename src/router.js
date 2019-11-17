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
              path: 'StudentServices',
              name: 'StudentServices',
              component: () => import('./views/StudentServices/StudentServices.vue')
            },
            {
              path: 'GraduateServices',
              name: 'GraduateServices',
              component: () => import('./views/GraduateServices/GraduateServices.vue')
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
            },
            {
              path: 'tuitionFees',
              name: 'tuitionFees',
              component: () => import('./views/TuitionFees/TuitionFees.vue')
            },
            {
              path: 'StudentCard',
              name: 'StudentCard',
              component: () => import('./views/StudentCard/StudentCard.vue')
            },
            {
              path: 'certificateConcern',
              name: 'certificateConcern',
              component: () => import('./views/CertificateConcern/CertificateConcern.vue')
            },
            {
              path: 'GraduationCertificate',
              name: 'GraduationCertificate',
              component: () => import('./views/GraduationCertificate/GraduationCertificate.vue')
            },
            {
              path: 'TemporaryCertificate',
              name: 'TemporaryCertificate',
              component: () => import('./views/TemporaryCertificate/TemporaryCertificate.vue')
            },
            {
              path: 'StatementOfDegrees',
              name: 'StatementOfDegrees',
              component: () => import('./views/StatementOfDegrees/StatementOfDegrees.vue')
            }
        ]
      
      }
  ]
})
