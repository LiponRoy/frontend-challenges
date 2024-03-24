"use client"
import React, { useState } from 'react'

const DynamicForm = () => {
    const[formData,setFormData] = useState({
        name:"",   
        email:"",
        phone:0,   
      
    })

const handleInputChange=() => {

}

  return (
    <div className=' m-10'>
      <span className=' mb-6'>Dynamic Form </span> 
      <form>
        <div className='mb-5'>
            <p className='mb-2'>Name</p>
            <input type='text' name="name" value={formData.name} onChange={handleInputChange} placeholder='Full Name' className=' border border-slate-500 p-2'></input>
        </div>
        <div className='mb-5'>
            <p className='mb-2'>Email</p>
            <input type='text' name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' className=' border border-slate-500 p-2'></input>
        </div>
        <div className='mb-5'>
            <p className='mb-2'>Phone</p>
            <input type='number' name="phone" value={formData.phone} onChange={handleInputChange} placeholder='Phone' className=' border border-slate-500 p-2'></input>
        </div>
      </form>
    </div>
  )
}

export default DynamicForm
