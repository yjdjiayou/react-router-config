/**
 * 如果路由组件使用动态加载的话，那么下面就不要再引入了，否则动态加载失效了
 */

import React from 'react';
import IndexPage from './routes/IndexPage';
// import Home from './routes/Home/Home';
// import ChildOne from './routes/Home/ChildOne';
// import ChildTwo from './routes/Home/ChildTwo';
// import User from './routes/User';
// import Profile from './routes/Profile';
// import Login from './routes/Login';
// import Register from './routes/Register';

export default [
    {
        path: '/',
        name: 'index-page-route',
        component: IndexPage,
        routes: [
            {
                path: '/home',
                isDynamic: true,
                loadingFallback: '不一样的 loading 内容...',
                // component: Home,
                component: React.lazy(() => new Promise(resolve =>
                    setTimeout(() =>
                        resolve(import(/* webpackChunkName: "home-route"*/'./routes/Home')), 2000)
                )),
                // component:React.lazy(() => import(/* webpackChunkName: "home-route"*/'./routes/Home')),
                routes: [
                    {
                        path: '/home/childOne',
                        isDynamic: true,
                        // component: ChildOne,
                        component: React.lazy(() => import(/* webpackChunkName: "childOne-route"*/'./routes/Home/ChildOne'))
                    },
                    {
                        path: '/home/childTwo',
                        isRedirect: true,
                        isDynamic: true,
                        // component: ChildTwo,
                        component: React.lazy(() => import(/* webpackChunkName: "childTwo-route"*/'./routes/Home/ChildTwo'))
                    }
                ]
            },
            {
                path: '/user',
                isRedirect: true,
                isDynamic: true,
                // component: User,
                component: React.lazy(() => import(/* webpackChunkName: "user-route"*/'./routes/User')),
            },
            {
                path: '/profile',
                isProtected: true,
                isDynamic: true,
                // component: Profile,
                component: React.lazy(() => import(/* webpackChunkName: "profile-route"*/'./routes/Profile')),
            },
            {
                path: '/login',
                isDynamic: true,
                // component: Login,
                component: React.lazy(() => import(/* webpackChunkName: "login-route"*/'./routes/Login')),
            },
            {
                path: '/register',
                isDynamic: true,
                // component: Register,
                component: React.lazy(() => import(/* webpackChunkName: "register-route"*/'./routes/Register')),
            }
        ]
    }
]
