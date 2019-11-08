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
        component:IndexPage,
        // component: () => import('./routes/IndexPage'),
        routes: [//子路由
            {
                path: '/home',
                component: Home,
                // component: () => import('./routes/Home/Home'),
                routes: [
                    {
                        path: '/home/childOne',
                        component: ChildOne,
                        // component: () => import('./routes/Home/ChildOne'),
                    },
                    {
                        path: '/home/childTwo',
                        component: ChildTwo,
                        // component: () => import('./routes/Home/ChildTwo'),
                        redirect: true,
                    }
                ]
            },
            {
                path: '/user',
                redirect: true,
                component: User,
                // component: () => import('./routes/User'),
            },
            {
                path: '/profile',
                component: Profile,
                // component: () => import('./routes/Profile'),
            },
            {
                path: '/login',
                component: Login,
                // component: () => import('./routes/Login'),
            },
            {
                path: '/register',
                component: Register,
                // component: () => import('./routes/Register'),
            }
        ]
    }
]
