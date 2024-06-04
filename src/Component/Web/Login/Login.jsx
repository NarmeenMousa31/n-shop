import React, { useContext } from "react";
import Input from "../../Pages/Input.jsx";
import { useFormik } from "formik"; 
import { loginSchema } from "../Validation/Validat.js";
import axios from "axios";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/User.jsx";

export default function Login() {    
  const navigat = useNavigate();
  let {userToken,setUserToken} = useContext(UserContext);

  console.log(userToken);
  /*if(userToken == null){
    navigat(-1);
  }*/
    const initialValues={
        email: "",
        password: "",
      };

    const onSubmit = async users=>{
        const {data} = await axios.post(` https://ecommerce-node4.vercel.app/auth/signin`,users);
        console.log(data);
        if(data.message=='success'){
            localStorage.setItem("usertoken",data.token); 
            setUserToken(data.token);
            toast.success('succesfully login', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                navigat('/');
        }
    }

  const formik = useFormik({
    initialValues, 
    onSubmit,
    validationSchema : loginSchema,
  });

  const inputs = [
    {
      id: "email",
      type: "email",
      name: "email",
      title: "user email",
      value: formik.values.email,
    },
    {
      id: "password",
      type: "password",
      name: "password",
      title: "user password",
      value: formik.values.password,
    }
  ];

  const renderInputs = inputs.map((input, index) => (
    <Input
      type={input.type}
      name={input.name}
      id={input.id}
      title={input.title}
      onChange={formik.handleChange}
      value={input.value}
      errors={formik.errors}
      onBlur={formik.handleBlur}
      touched={formik.touched}
      key={index}
    />
  ));

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderInputs}
        <button type='submit' disabled={!formik.isValid}>Login</button>
        <Link to='/sendCode'>Reset Password</Link>
      </form>
    </div>
  );
}
