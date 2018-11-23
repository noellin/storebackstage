import Vue from 'vue'
import VueRouter from 'vue-router'
//  官方的元件

// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import Orders from '@/components/pages/Orders'
import Coupons from '@/components/pages/Coupons'
import CustomerOrders from '@/components/pages/CustomerOrders'
import CustomerCheckout from '@/components/pages/CustomerCheckout'

//  自訂的分頁

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      // 進入的不是設定的路徑時，重新導向
      path: '*',
      redirect: '/'
    },
    // {
    //   name: 'HelloWorld', // 元件呈現的名稱
    //   path: '/', // 對應的虛擬路徑
    //   component: HelloWorld, // 對應的元件
    //   meta: { requiresAuth: true }
    // },
    {
      name: 'Login', // 元件呈現的名稱
      path: '/login', // 對應的虛擬路徑
      component: Login // 對應的元件
    },
    {
      name: 'Dashboard', // 元件呈現的名稱
      path: '/admin', // 對應的虛擬路徑
      component: Dashboard, // 對應的元件
      children: [
        {
          name: 'Products', // 元件呈現的名稱
          path: 'products', // 對應的虛擬路徑
          component: Products, // 對應的元件
          meta: { requiresAuth: true }
        },
        {
          name: 'Orders',
          path: 'orders',
          component: Orders,
          meta: { requiresAuth: true }
        },
        {
          name: 'Coupons',
          path: 'coupons',
          component: Coupons,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrders',
          component: CustomerOrders
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout
        }
      ]
    }
  ]
})
