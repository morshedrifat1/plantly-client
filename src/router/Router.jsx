import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ExploreGardeners from "../Pages/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips";
import ShareGardenTip from "../Pages/ShareGardenTip";
import MyTips from "../Pages/MyTips";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {index:true,Component:Home},
        {path:'/auth/login',Component:Login},
        {path:'/auth/signUp',Component:SignUp},
        {path:'/explore-gardeners',Component:ExploreGardeners},
        {path:'/tips',Component:BrowseTips},
        {path:'/share-tips',Component:ShareGardenTip},
        {path:'/my-tips',Component:MyTips}

    ]
  },
]);