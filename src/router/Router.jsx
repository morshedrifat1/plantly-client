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
        loader: () => fetch("http://localhost:5000/gardeners/active"),
      },
      { path: "/auth/login", Component: Login },
      { path: "/auth/signUp", Component: SignUp },
      {
        path: "/explore-gardeners",
        Component: ExploreGardeners,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
        loader: () => fetch("http://localhost:5000/gardeners"),
      },
      { path: "/tips", Component: BrowseTips },
      { path: "/share-tips", Component: ShareGardenTip },
      { path: "/my-tips", Component: MyTips },
      {
        path: "/update-tips/:id",
        Component: UpdateTips,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update-tips/${params.id}`),
      },
      {
        path: "/tips/:id",
        Component: TipsDetails,
        hydrateFallbackElement: <LoadingSpiner></LoadingSpiner>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tips/${params.id}`),
      },
    ],
  },
]);
