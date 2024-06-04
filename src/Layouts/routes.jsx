import { createBrowserRouter } from "react-router-dom";
import HomeDashbord from "./../Component/Dashbord/Home/Home.jsx";
import CategoriesDashbord from "./../Component/Dashbord/Categories/Categories.jsx";
import Home from "./../Component/Web/Home/Home.jsx";
import Categories from "./../Component/Web/Categories/Categories.jsx";
import Layout from "./Layout.jsx";
import DashboardLayouts from "./DashboardLayouts.jsx";
import Register from "../Component/Web/Register/Register.jsx";
import Login from "../Component/Web/Login/Login.jsx";
import Cart from "./../Component/Web/Cart/Cart";
import CategoriesDetalis from "../Component/Web/Categories/CategoriesDetalis.jsx";
import Product from "../Component/Web/Product/Product.jsx";
import ProtectedRout from "../Component/Web/ProtectedRout/ProtectedRout.jsx";
import Profile from "../Component/Web/Profile/Profile.jsx";
import UserInfo from "../Component/Web/Profile/UserInfo.jsx";
import UserContact from "../Component/Web/Profile/UserContact.jsx";
import SendCode from "../Component/Web/Auth/SendCode.jsx";
import ForgotPassword from "../Component/Web/Auth/ForgotPassword.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "sendCode",
        element: <SendCode />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: 
          <ProtectedRout>
            <Profile />
          </ProtectedRout>,
          children:[
            {
              path:'info',
              element:<UserInfo />
            },
            {
              path:'contact',
              element:<UserContact />
            }     
          ]
      },
      {
        path: "cart",
        element: (
          <ProtectedRout>
            <Cart />
          </ProtectedRout>
        ),
      },
      {
        path: "Categories",
        element: <Categories />,
      },
      {
        path: "products/category/:CategoriesID",
        element: <CategoriesDetalis />,
      },
      {
        path: "product/:ProductID",
        element: <Product />,
      },
    ],
  },

  {
    path: "/Dashbord",
    element: <DashboardLayouts />,
    children: [
      {
        path: "home",
        element: <HomeDashbord />,
      },
      {
        path: "Categories",
        element: <CategoriesDashbord />,
      },
    ],
  },
]);
