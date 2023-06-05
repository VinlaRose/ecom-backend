import { useContext } from "react"
import { AuthContext } from "../../context/Authentication/AuthContext"

export const Profile = () => {
    const {user} = useContext(AuthContext);
    const { encodedToken} = user
    return(
        <div style={{marginTop: "200px"}}>
            {
            encodedToken ? (
                <div >
            <h1>Profile</h1>
            Welcome: {
  user.foundUser ? <p>{user.foundUser.firstName}</p> : <p>{user.createdUser.firstName}</p>
  }

        </div>

            ):
            (
                <div>
                   <h1>login first</h1>
                </div>
            )
        }

        </div>
        
        
    )
}