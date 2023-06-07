import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/Authentication/AuthContext"
import './login.css';

export const LoginPage = () => {
  const { user, handleSubmit, handleInputChange, handleLogin, creds, handleGuestLogin } = useContext(
    AuthContext
  );

  const navigate = useNavigate()

  return (
    <div style={{marginTop: "200px"}}>
       {
            user.encodedToken && (
              <>
                <div >
           
            Logged in as: {
  user.foundUser ? <span>{user.foundUser.firstName}</span> : <span>{user.createdUser.firstName}</span>
  }

        </div>
        <div>
          <button onClick={() => navigate("/explore")}>Explore Products</button>
        </div>
        </>

            )
        }

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
        {/* <button onClick={logoutHandler}>Logout</button> */}
        <button onClick={handleGuestLogin}>Guest Login</button>
      </div>
      <p className="login-buttons">
        New User? <Link to="/signup">Sign up</Link>
      </p>
    </div>
   

    </div>
    
  );
};
