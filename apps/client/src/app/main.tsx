import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/shared/hooks/useTheme.tsx";
import { NuqsAdapter } from "nuqs/adapters/react";
// import { Toaster } from "sonner";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <AuthProvider> */}
      <NuqsAdapter>
        <App />
        <ToastContainer />
      </NuqsAdapter>
      {/* </AuthProvider> */}
    </ThemeProvider>
  </HelmetProvider>,
);
