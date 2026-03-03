import LoginPage from "@/modules/auth/login";
import RegisterPage from "@/modules/auth/register";
import DashboardPage from "@/modules/user/dashboard";
import RootPage from "@/modules/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error";
import Layout from "./layout";
import NotFoundPage from "./not-found";
import TermsPage from "@/modules/services/terms";
import PrivacyPage from "@/modules/services/privacy";
import ProtectedRoute from "./protectedRoute";
import EventLayout from "@/shared/layouts/EventLayout";
import WelcomePage from "@/modules/user/welcome";

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
        path: "/terms",
        element: <TermsPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
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
        element: (
          <ProtectedRoute>
            <EventLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/welcome",
            element: <WelcomePage />,
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
