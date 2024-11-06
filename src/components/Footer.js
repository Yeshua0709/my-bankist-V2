import React from 'react'

const Footer = ({transactions}) => {

    let inMoney = 0;
    let outMoney = 0;
  return (
    <div>
    


      {transactions.map((transaction,index) =>{

        transaction > 0 ? inMoney  += transaction : outMoney +=transaction;

      })}

        <div className="money-movement">

            <div className="window">

                <p className='label'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#09d0a3" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
                    </svg>

                </p>
                <p className='value up'>₱{inMoney}</p>

            </div>

            <div className="window">

                <p className='label'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ef4444" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>

                </p>
                <p className='value down'>₱{outMoney * -1}</p>

            </div>

        </div>

    
    </div>
  )
}

export default Footer
