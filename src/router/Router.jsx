import { createBrowserRouter } from "react-router";
import LoadingSpiner from "../Components/LoadingSpiner";
import MainLayout from "../Layout/MainLayout";
import BrowseTips from "../Pages/BrowseTips";
import ErrorPage from "../Pages/ErrorPage";
import ExploreGardeners from "../Pages/ExploreGardeners";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyTips from "../Pages/MyTips";
import ShareGardenTip from "../Pages/ShareGardenTip";
import SignUp from "../Pages/SignUp";
import TipsDetails from "../Pages/TipsDetails";
import UpdateTips from "../Pages/UpdateTips";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
        loader: () => fetch("https://plantly-server.vercel.app/gardeners/active"),
      },
      { path: "/auth/login", Component: Login },
      { path: "/auth/signUp", Component: SignUp },
      {
        path: "/explore-gardeners",
        Component: ExploreGardeners,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
        loader: () => fetch("https://plantly-server.vercel.app/gardeners"),
      },
      { path: "/tips", Component: BrowseTips },
      {
        path: "/share-tips",
        element: (
          <PrivateRoute>
            <ShareGardenTip></ShareGardenTip>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-tips/:id",
        element: <PrivateRoute><UpdateTips></UpdateTips></PrivateRoute>,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
        loader: ({ params }) =>
          fetch(`https://plantly-server.vercel.app/update-tips/${params.id}`),
      },
      {
        path: "/tips/:id",
        Component: TipsDetails,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
        loader: ({ params }) =>
          fetch(`https://plantly-server.vercel.app/tips/${params.id}`),
      },
    ],
  },
]);
