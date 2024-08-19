import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../pages/Login/Login.vue')
    },
    {
      path: '/create-account',
      name: 'CreateAccount',
      component: () => import('../pages/Login/CreateAccount.vue')
    },
    {
      path: '/logged-layout',
      name: 'LoggedLayout',
      component: () => import('../layout/LoggedLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('../pages/Home/Home.vue')
        },
        {
          path: '/my-profile',
          name: 'Profile',
          component: () => import('../pages/Profile/Profile.vue')
        },
        {
          path: '/add-vehicle',
          name: 'AddVehicle',
          component: () => import('../pages/AddVehicle/AddVehicle.vue')
        },
      ]
    }
  ]
})

export default router
