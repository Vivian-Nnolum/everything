// import propTypes from "prop-types"

function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    //     return <h2>Please log in to continue</h2>


    // return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}</h2>: <h2 className="loggin-prompt">Please log in to continue</h2>);


    const welcomeMsg =  <h2 className="welcome-msg">Welcome {props.username}</h2>
    const logginPrompt = <h2 className="loggin-prompt">Please log in to continue</h2>

    return(props.isLoggedIn ? welcomeMsg : logginPrompt );

}
// UserGreeting.proptypes={
//     isLoggedIn: propTypes.bool,
//     username: propTypes.string,
// }
// UserGreeting.defaultProps ={
//     isLoggedIn:false,
//     username: "Guest",
//     }

export default UserGreeting