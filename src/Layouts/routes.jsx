import { createBrowserRouter} from "react-router-dom";
import HomeDashbord from "./../Component/Dashbord/Home/Home.jsx";
import CategoriesDashbord from "./../Component/Dashbord/Categories/Categories.jsx";
import Home from './../Component/Web/Home/Home.jsx';
import Categories from './../Component/Web/Categories/Categories.jsx';
import Layout from './Layout.jsx';
import DashboardLayouts from './DashboardLayouts.jsx';
import Register from "../Component/Web/Register/Register.jsx";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path : 'register',
        element : <Register />
      },
      {
        path :'home',
        element : <Home /> 
      },
      {
        path : 'Categories',
        element : <Categories />
      }
    ]
  },

  {
    path: '/Dashbord',
    element: <DashboardLayouts />,
    children:[
      {
        path:'home',
        element: <HomeDashbord />
      },
      {
        path:'Categories',
        element: <CategoriesDashbord />
      }
    ]
  }
]);