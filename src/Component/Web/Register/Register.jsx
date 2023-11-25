import React from "react";
import Input from "../../Pages/Input.jsx";
import { useFormik } from "formik"; 
import { registerSchema } from "../Validation/Validat.js";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Register() {

    const  initialValues={
        userName: "",
        email: "",
        password: "",
      };

    const handelFielChange = (event)=>{
        formik.setFieldValue('image',event.target.files[0]);
    }

    const onSubmit = async users=>{
        const formData = new FormData();
        formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
        formData.append("image",users.image);
        const {data} = await axios.post(` https://ecommerce-node4.vercel.app/auth/signup`,formData);
        if(data.message=='success'){
            formik.resetForm();
            toast.success('account created succesfully .pleas verify your email to login!', {
                position: "bottom-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }

  const formik = useFormik({
    initialValues, 
    onSubmit,
    validationSchema : registerSchema
  });

  const inputs = [
    {
      id: "username",
      type: "text",
      name: "userName",
      title: "user name",
      value: formik.values.userName,
    },
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
        id: "image",
        type: "file",
        name: "image",
        title: "user image",
        onChange : handelFielChange
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
      <h2>Creat acount</h2>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        {renderInputs}
        <button type='submit' disabled={!formik.isValid}>register</button>
      </form>
    </div>
  );
}
