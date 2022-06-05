import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = {
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import("@/views/Home")
    },
    {
      path: '/home',
      component: () => import("@/views/Home")
    },
    {
      path: '/login',
      component: () => import("@/views/Login")
    },
    {
      path: '/register',
      component: () => import("@/views/Register")
    },
    {
      path: '/profile',
      component: () => import("@/views/Profile")
    },
    {
      path: '/admin',
      component: () => import("@/views/BoardAdmin")
    },
    {
      path: '/mod',
      component: () => import("@/views/BoardModerator")
    },
    {
      path: '/user',
      component: () => import("@/views/BoardUser")
    }
  ]

};

const Router =  new VueRouter(router);

Router.beforeEach((to,from,next) => {
  const publicPages = ['/login','/register','/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if(authRequired && !loggedIn) {
    next('/login');
  }
  else {
    next();
  }
})

export default Router;

