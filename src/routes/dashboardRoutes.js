import Dashboard from '../components/dashboard/Dashboard';
export const dashboardRoutes = [
    {
        path: '/',
        component: Dashboard,
        exact: true,
        isPrivate: true,
    }
];
