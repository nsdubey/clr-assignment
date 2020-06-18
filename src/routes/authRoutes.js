import Login from '../components/auth/Login';

export const authRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    }
];