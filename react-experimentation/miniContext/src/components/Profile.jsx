import UserContext from "../context/userContext"
import { useContext } from "react"

function Profile() {

  const {user} = useContext(UserContext)

  if(!user) return(
    <>
      <div>Please Login</div>
    </>
  )

  return (
    <div>
      Welcome {user.username} {user.password}
    </div>
  )
}

export default Profile
