

function ProfilePic(){

const imageurl= './src/assets/pic.png';

// const handleClick=()=> console.log("OUCH!");
const handleClick=(e)=> e.target.style.display= "none";

    return(
        <>
            <img src={imageurl} width={250} onClick={(e)=> handleClick(e)}></img>
        </>
    );
}

export default ProfilePic