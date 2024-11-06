import React, { useState } from 'react';
import Login from './Login';
import '../index.css';
import Summar from './Summar';
import Transactions from './Transactions';
import Loan from './Loan';
import Withdraw from './Withdraw';
import Footer from './Footer';


const Bank = () => {

  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Yeshua Miguel Abrenica',
      username:'yma',
      password: '1234',
      transactions: [1000, 3000, -3000, 6000, -100, 900],
    }
  ]);

  const [session, setSession] = useState(null);
 
  
const handleLogin = (formData) => {

    const account = accounts.find(
        acc => acc.username === formData.name &&
            acc.password === formData.password
    );

    if (account){
        setSession(account);
    }
    else{
        alert('Invalid Credentials');
    }
}

const handleLogout = () => {
    setSession(null);
   
}

const handleWithdraw = (formData) => {
  
    setAccounts(accounts => accounts.map(acc =>
        acc.id === session.id ? 
        {
            ...acc, 
             transactions : [...acc.transactions, parseInt(formData) * - 1]
            }
            :
            acc
        
    ))

    setSession( currentSession => ({
        ...currentSession,
        transactions: [...currentSession.transactions, parseInt(formData) * - 1]
    })


    )
}
















const handleLoan = (formData) =>{

    
  
    setAccounts(prevAccounts =>
        prevAccounts.map(acc =>
            acc.id === session.id 
            ? {...acc, transactions: [...acc.transactions, parseInt(formData)]}
            : acc
        )
       );

   setSession(prevSession => ({
    ...prevSession,
    transactions : [...prevSession.transactions, parseInt(formData)]
}));

}

/*
  useEffect(() => {
    if (!session) {
      setSession(accounts[0]);
    }
  }, [accounts, session]); 
*/


  return (
    <div className='main-container'>




      <Login handleLogin = {handleLogin} session = {session} handleLogout = {handleLogout}
           />
      {!session ? (
        <div className='starter'>
        <h1 className="not-loggedin text-3xl font-semibold ">Please Login</h1>
        <p>Sample Account</p>
        <p>Username : yma</p>
        <p>Password: 1234</p>
        </div>
      ) : (
       <> 
        <Summar transactions = {session.transactions}/>

       <div className="feature-container">
            <div className="left">
                <Transactions transactions={session.transactions} />
            </div>

            <div className="right">
                <Loan  handleLoan = {handleLoan}/>
                <Withdraw  handleWithdraw={handleWithdraw}/>
            </div>
       </div>

       <div className="footer">
        <Footer transactions = {session.transactions}/>
       </div>
      
       </>
      )}
    </div>
  );
};

export default Bank;
