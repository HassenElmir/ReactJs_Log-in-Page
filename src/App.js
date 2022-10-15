import logo from './logo.svg';
import {Routes, Route, useNavigate} from 'react';
import './App.css';
import google from './google.png'
import facebook from './facebook.png'
import pinterest from './pinterest.png'
import {useState} from 'react'
function App() {
  const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

// Generate JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
 


  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid email",
    pass: "invalid password"
  };
  
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
  
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderForm = (

    <div className='container'>

     
    <div className='container1'>
    <form onSubmit={handleSubmit}>
      <h1>Business App</h1>
      <h2>Email</h2>
      <input className='email' placeholder='you@example.com' type='text' name="uname" required />
      {renderErrorMessage("uname")}
      <h2>Password</h2>
      <input className='pass' placeholder='Enter 6 character or more' type='password' name="pass" required />
      {renderErrorMessage("pass")}
      <input type="submit" value="Log In" />
      </form>
      <h3>Or login with</h3>
     <div className='icon-group'>
      <img src={google}/>
      <img src={facebook} />
      <img src={pinterest}/>
     </div>
     <h4>You don't have an account? Sign up</h4>
      

    </div>
    
   
  </div>
  


  )


  
  return (
    
   
    <div className="app">
    <div className="login-form">
      
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  </div>

  );
}

export default App;
