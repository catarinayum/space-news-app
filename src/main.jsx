import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";

const router = createBrowserRouter([
  // page components had to be created separately to re-render
  {
    path: "/",
    element: <ArticlesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog-posts",
    element: <BlogsPage />,
  },
  {
    path: "/reports",
    element: <ReportsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
