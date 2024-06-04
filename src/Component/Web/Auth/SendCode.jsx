import React, { useContext } from "react";
import Input from "../../Pages/Input.jsx";
import { useFormik } from "formik"; 
import { SendCodeSchema} from "../Validation/Validat.js";
import axios from "axios";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/User.jsx";

export default function SendCode() {    
  const navigat = useNavigate();

    const initialValues={
        email: "",
      };

    const onSubmit = async users=>{
        const {data} = await axios.patch(` https://ecommerce-node4.vercel.app/auth/sendcode`,users);
        console.log(data);
        if(data.message=='success'){
            toast.success('succesfully sended code', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                navigat('/forgotPassword');
        }
    }

  const formik = useFormik({
    initialValues, 
    onSubmit,
    validationSchema : SendCodeSchema,
  });

  const inputs = [
    {
      id: "email",
      type: "email",
      name: "email",
      title: "user email",
      value: formik.values.email,
    },
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
      <h2>Send Code</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderInputs}
        <button type='submit' disabled={!formik.isValid}>Send</button>
      </form>
    </div>
  );
}
