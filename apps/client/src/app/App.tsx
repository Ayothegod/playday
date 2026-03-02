import LoginPage from "@/modules/auth/login";
import RegisterPage from "@/modules/auth/register";
import DashboardPage from "@/modules/dashboard";
import RootPage from "@/modules/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error";
import Layout from "./layout";
import NotFoundPage from "./not-found";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RootPage />,
      },
      {
        children: [
          {
            path: "/auth/login",
            element: <LoginPage />,
          },
          {
            path: "/auth/register",
            element: <RegisterPage />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
