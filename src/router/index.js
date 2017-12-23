import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DashboardComponent from '@/components/DashboardComponent'
import ArticleItemComponent from '@/components/ArticleItemComponent'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
    	path: '/',
    	name: 'DashboardComponent',
    	component: DashboardComponent
    },
    {
        path: '/ArticleItemComponent',
        name: 'ArticleItemComponent',
        component: ArticleItemComponent
    }
  ]
})
