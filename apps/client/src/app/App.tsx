// import { Toaster } from "@/shared/components/ui/sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import RootPage from "../modules/root";
import ErrorPage from "./error";
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
