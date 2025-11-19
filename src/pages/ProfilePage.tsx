import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router"

const ProfilePage = () => {

  const { user, logout } = useAuth()

  const navigate = useNavigate()


  if(!user) return

  return (
    <div className="container">
      <div className="profile-page">
        
       
        <div className="info-card">
          <div>
            <p className="name-text">Welcome, {user.name}!</p>
          </div>
          <div className="lay">

            <div className="info-flex">
              <div className="info-container">
                <p className="label">Email:</p>
                <div className="info-box">
                  <p className="text">{user.email}</p>
                </div>
              </div>

              <div className="info-container">
                <p className="label">Username:</p>
                <div className="info-box">
                  <p className="text">{user.name}</p>
                </div>
              </div>

              <div className="info-container">
                <p className="label">Is host:</p>
                <div className="info-box">
                  {user.isHost ? <p className="text">Yes</p> : <p className="text">No</p>}
                </div>
              </div>
            </div>

            <div className="btn-flex">
              {user.isHost ? <button className="listing-btn">My listings</button> : <button>Create a listing</button>}
              <button onClick={() => {logout(); navigate('/')}} className="logout-btn">Logout</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ProfilePage
