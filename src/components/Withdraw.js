import React from 'react'
import '../index.css';
import { useState } from 'react';

const Withdraw = ({handleWithdraw}) => {

    const [withdrawValue, setWithdrawValue] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWithdraw(withdrawValue);
        setWithdrawValue('');
    }

    const handleChange = (e) =>{
       
        setWithdrawValue(e.target.value);
    }

  return (
    <div className='withdraw-card '>
        <p className='mb-2'>Withdraw cash</p>
  
    <form
        className='wl-form'
        onSubmit={handleSubmit}>

        <input type="text"
                id ="value"
                name="value"
                value={withdrawValue}
                onChange={handleChange}
                className='input-wl'/>


        <button type="submit" className='wl-sub'> 


            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>


        </button>

    </form>
</div>
  )
}

export default Withdraw
