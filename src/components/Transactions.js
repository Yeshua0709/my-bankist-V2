
const Transactions = ({ transactions }) => {

 
  let runningTotal = 0;

  return (
    <div className='transaction-container'>
   

      {transactions.slice().reverse().map((card, index) => {
      
         runningTotal += card;

        return (
          <div className="card" key={index}>
            <div className="status">

                <p className={card < 0 ? "withdraw transaction_status" : "deposit transaction_status"}>{index + 1} {card < 0 ? "Withdraw" : "Deposit"}</p>
                <p className='amount'>  {card < 0 ? "-₱"+card*-1: "₱"+card }  </p>
                <p className="running-total"> ₱{runningTotal} </p>
              <p>
                
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
