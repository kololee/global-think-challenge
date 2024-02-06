import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { TablePage } from './pages/Table.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/table',
    element: <TablePage />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
