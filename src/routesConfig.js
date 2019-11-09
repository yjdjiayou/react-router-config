 import IndexPage from './routes/IndexPage';
import Home from './routes/Home/Home';
import ChildOne from './routes/Home/ChildOne';
import ChildTwo from './routes/Home/ChildTwo';
import User from './routes/User';
import Profile from './routes/Profile';
import Login from './routes/Login';
import Register from './routes/Register';


export default [
    {
        path: '/',
        name:'index-page-route',
        component:IndexPage,
        // component: () => import('./routes/IndexPage'),
        routes: [
            {
                path: '/home',
                name:'home-route',
                component: Home,
                // component: () => import('./routes/Home/Home'),
                routes: [
                    {
                        path: '/home/childOne',
                        name:'home-child-one-route',
                        component: ChildOne,
                        // component: () => import('./routes/Home/ChildOne'),
                    },
                    {
                        path: '/home/childTwo',
                        name:'home-child-two-route',
                        isRedirect: true,
                        component: ChildTwo,
                        // component: () => import('./routes/Home/ChildTwo'),
                    }
                ]
            },
            {
                path: '/user',
                name:'user-route',
                component: User,
                isRedirect: true,
                // component: () => import('./routes/User'),
            },
            {
                path: '/profile',
                name:'profile-route',
                component: Profile,
                isProtected:true,
                isDynamic:true,
                // component: () => import('./routes/Profile'),
            },
            {
                path: '/login',
                name:'login-route',
                component: Login,
                // component: () => import('./routes/Login'),
            },
            {
                path: '/register',
                name:'register-route',
                component: Register,
                // component: () => import('./routes/Register'),
            }
        ]
    }
]
