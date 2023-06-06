import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/Authentication/AuthContext"
import './login.css';

export const LoginPage = () => {
  const {  handleSubmit, handleInputChange, handleLogin, logoutHandler, creds, handleGuestLogin } = useContext(
    AuthContext
  );

  return (
    <div style={{marginTop: "200px"}}>
      <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={creds.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" style={{ display: 'none' }}></button>
      </form>
      <div className="login-buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
        <button onClick={handleGuestLogin}>Guest Login</button>
      </div>
      <p className="login-buttons">
        New User? <Link to="/signup">Sign up</Link>
      </p>
    </div>

    </div>
    
  );
};
