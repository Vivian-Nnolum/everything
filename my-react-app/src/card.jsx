import profilePic from "./assets/pic.png"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" width={200} height={150}/>
            <h2 className="card-title">Vivian</h2>
            <p className="card-text">Computer scientist</p>
        </div>
    )
}

export default Card