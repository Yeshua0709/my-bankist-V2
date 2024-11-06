import React, { useState } from 'react'

const Loan = ({ handleLoan }) => {

    
    const [loanValue, setLoanValue] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        handleLoan(loanValue);
        setLoanValue('');
    }

    const handleChange = (e) =>{

        setLoanValue(e.target.value);

    }



  return (
    <div className='loan-card'>

        <p>Request a loan</p>
        <form onSubmit={handleSubmit}
        className='wl-form'>
            <input 
                    type="text" 
                    id="value"
                    name="value"
                    value = {loanValue}
                    onChange={handleChange}
                    className='input-wl'></input>
            <button type="submit" className='wl-sub'> 


            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>


            </button>
        </form>
    </div>
  )
}

export default Loan
