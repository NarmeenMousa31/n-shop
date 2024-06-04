import * as yup from 'yup';
import SendCode from './../Auth/SendCode';
 
export const registerSchema = yup.object({
    userName:yup.string().required("username is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char")
})

export const loginSchema = yup.object({
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char")
})

export const SendCodeSchema = yup.object({
    email:yup.string().required("email is required").email()
})

export const forgotPasswordSchema = yup.object({
    code:yup.string().required("username is required").length(4,"must be 4 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char")
})