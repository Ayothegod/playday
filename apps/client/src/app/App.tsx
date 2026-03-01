import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./error";
import NotFoundPage from "./not-found";
import RootPage from "@/modules/root";
import { Toaster } from "@/shared/components/ui/sonner";

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
        // element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
          },
          {
            path: "/auth/register",
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}
