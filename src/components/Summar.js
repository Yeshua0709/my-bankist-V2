import React, { useEffect, useState } from 'react'

const Summar = ({transactions}) => {

    const [time,setTime] = useState(new Date());

    let total = transactions;
   

    
  const totalSum = total.reduce((acc, value) => acc + value, 0);
    useEffect( () => {
        const timer = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    })
  return (
    <div className='summary'>

<div className="summary-left">
<p className='title'>Current Balance</p>
<p>As of {time.toLocaleString()}</p>
</div>
   

<div className="summary-right">
  <p>₱ {totalSum}</p>
</div>

      
    </div>
  )
}

export default Summar
