import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import UserList from '../view/User/UserList.vue'
import UserEdit from '../view/User/UserEdit.vue'
import Dashboard from '../view/Dashboard.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '/user',
        name: 'user',
        component: UserList,
      },
      {
        path: '/userEdit',
        name: 'user_Edit',
        component: UserEdit,
      },
      {
        path: '/userEdit',
        name: 'user_Add',
        component: UserEdit,
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;

