import React from "react";
import Input from "../../Pages/Input.jsx";
import { useFormik } from "formik"; 
import { forgotPasswordSchema } from "../Validation/Validat.js";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const  initialValues={
        email: "",
        password: "",
        code: "",
      };

    const onSubmit = async users=>{
        const {data} = await axios.patch(` https://ecommerce-node4.vercel.app/auth/forgotPassword`,users);
        console.log(data);
        if(data.message=='success'){
            toast.success('password update', {
                position: "bottom-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                navigate('/login');
        }
    }

  const formik = useFormik({
    initialValues, 
    onSubmit,
    validationSchema : forgotPasswordSchema
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
    },
    {
        id: "code",
        type: "text",
        name: "code",
        title: "Code",  
    }
  ];

  const renderInputs = inputs.map((input, index) => (
    <Input
      type={input.type}
      name={input.name}
      id={input.id}
      title={input.title}
      onChange={input.onChange || formik.handleChange}
      value={input.value}
      errors={formik.errors}
      onBlur={formik.handleBlur}
      touched={formik.touched}
      key={index}
    />
  ));

  return (
    <div className="container">
      <h2>Update password</h2>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        {renderInputs}
        <button type='submit' disabled={!formik.isValid}>register</button>
      </form>
    </div>
  );
}
