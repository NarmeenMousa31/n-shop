import React from 'react'

export default function Input({id,name,type,title,onChange,value,errors,onBlur,touched}) {
  return (
    <>
    <div className="input-group mb-3">
    <label htmlFor={id}>{title}</label>
    <input name={name} id={id} type={type} className="form-control" onChange={onChange} value={value} onBlur={onBlur}/>
    {errors[name]&&touched[name]&&<p className='text text-danger'>{errors[name]}</p>}
    </div>
    </>
  )
}
