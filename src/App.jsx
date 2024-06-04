import { RouterProvider} from "react-router-dom";
import { useContext, useEffect} from 'react';
import { CartContext, CartContextProvider } from "./Component/Web/Context/Cart.jsx";
import UserContextProvider, { UserContext } from "./Component/Web/Context/User.jsx";
import {router} from "./Layouts/routes";
export default function App() { 

  let {setUserToken} = useContext(UserContext);
  let {count,setCount,getCartContext} = useContext(CartContext);
  useEffect( ()=> {
    if(localStorage.getItem("usertoken") != null){
      setUserToken(localStorage.getItem("usertoken"));
      setCount(getCartContext().count);
    }
  },[])

  return (
    <UserContextProvider>
          <CartContextProvider>
          <RouterProvider router={router} />
          </CartContextProvider> 
    </UserContextProvider>



  )
}
