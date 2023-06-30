import { Navigate, useRoutes } from 'react-router-dom';
import Main from './pages/Main';
import Condition from './pages/Condition';
import Auth from './pages/Auth';

export default function Router() {
  return useRoutes([
    // {
    //   path: '/dashboard',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: 'app', element: <DashboardApp /> },
    //     { path: 'user', element: <User /> },
    //     { path: 'products', element: <Products /> },
    //     { path: 'goods', element: <Goods /> },
    //     { path: 'currency', element: <Currency /> },
    //     { path: 'accounts', element: <Accounts /> },
    //     { path: 'users', element: <Users /> }

    //   ]
    // },
    {
      path: '/',
     // element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Condition /> },
        { path: '/main', element: <Main /> },
        { path: '/auth', element: <Auth /> },
        // { path: 'login', element: <Login /> },
        // { path: 'register', element: <Register /> },
        // { path: '404', element: <NotFound /> },
        // { path: '*', element: <Navigate to='/404' /> }
      ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
  ]);
}
