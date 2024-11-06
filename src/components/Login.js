import React, { useState } from 'react'

const Login = ({handleLogin, session, handleLogout}) => {


    const [formData , setFormData ] = useState({

        name: '',
        password: '',

    })


    
  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleLogin(formData); 

    setFormData({
        name:'',
        password:''
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, 
    });
  };


  return (
    
    <div className="login-container flex-auto">


        <div className="name">

            {!session ? (<p>Please login your account</p>) : 
            (
                <p>Hi, {session.name}</p>  
            )}
                    
        </div>
        
        <div className="login-form">


            {!session ? (
            <form onSubmit={handleSubmit}>

            <input
                type="text"
                id="name"
                name="name"
                value = {formData.name}
                onChange={handleChange}
                placeholder='Username'
                className='form-input' /> 

            <input
                type="password"
                id="password"
                name="password"
                value = {formData.password} 
                onChange={handleChange}
                placeholder='password'
                className='form-input'
                /> 

                <button
                type='submit'
                className='submit-btn'
              
                >

Login

                </button>
            </form>

) : ( 





<button className='submit-btn'
  onClick={()=>handleLogout()}>Logout</button>


)}
        </div>
        
    </div>
  )
}

export default Login
