import App from '../app'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/signout', //退出
                component: resolve => require(['../pages/signout/'], resolve)
            },
            {
                path: '/home', //个人主页
                component: resolve => require(['../pages/home/'], resolve)
            },
            {
                path: '/', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/movie', //视频
                meta: { auth: false },
                component: resolve => require(['../pages/movie/'], resolve)
            },
            {
                path: '/videoDetail', //视频
                meta: { auth: false },
                component: resolve => require(['../pages/videoDetail/'], resolve)
            },
            {
                path: '/newcar', //新车
                meta: { auth: false },
                component: resolve => require(['../pages/newcar/'], resolve)
            },
            {
                path:'/newCarDetail',
                name:'newCarDetail',
                meta: { auth: false },
                component: resolve  => require(['../pages/newCarDetail/'], resolve)
            },
            {
                path: 'industry', //行业
                meta: { auth: false },
                component: resolve => require(['../pages/industry/'], resolve)
            },
            {
                path: 'guide', //导购
                meta: { auth: false },
                component: resolve => require(['../pages/guide/'], resolve)
            },
            {
                path: 'search', //导购
                meta: { auth: false },
                component: resolve => require(['../pages/search/'], resolve)
            }
            // {
            //     path: '*', //其他页面，强制跳转到登录页面
            //     redirect: '/login'
            // }
        ]
    }
]