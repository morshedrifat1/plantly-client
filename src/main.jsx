import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import AuthProvider from "./Context/AuthProvider";
import { ToastContainer } from "react-toastify";
import {HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
