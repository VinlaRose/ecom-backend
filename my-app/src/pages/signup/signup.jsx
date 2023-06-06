import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/Authentication/AuthContext"
import '../login/login.css';

export const SignUp = () => {
  const { 
    handleSignUp, handleSignUpSubmit, handleSinUpInputChange, signUpcreds} = useContext(
    AuthContext
  );

  return (
    <div style={{marginTop: "200px"}}>
      <div className="login-container">
      <h2>SignUp</h2>
      <form className="login-form" onSubmit={handleSignUpSubmit}>

      <div>
          <label>First Name:</label>
          <input
            type="firstName"
            name="firstName"
            value={signUpcreds.firstName}
            onChange={handleSinUpInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="lastName"
            name="lastName"
            value={signUpcreds.lastName}
            onChange={handleSinUpInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signUpcreds.email}
            onChange={handleSinUpInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signUpcreds.password}
            onChange={handleSinUpInputChange}
          />
        </div>
        <button type="submit" >submit</button>
      </form>
      <div className="login-buttons">
        <button onClick={handleSignUp}>Sign in</button>
        
       
      </div>
      <p className="login-buttons">
        Already Signed in? <Link to="/login">Login</Link>
      </p>
    </div>

    </div>
    
  );
};
