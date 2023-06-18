import "./login.scss"
import  { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/authContext";

function Login(){

    const {login} = useContext(AuthContext);

    const handleLogin = ()=>(
      login()
    );

    return (
     <div className="login">
         <div className="card">
            <div className="left">
                 <h1> Hello World. </h1>
                 <p> ther are the best app for social comunication you can youse for joy and time pass,
                 many peopels are using this site and app lication so i prefer to you use.</p>         
                 <span>Don't you have an account</span>
                 <Link to="/register">
                    <button>Register</button>
                 </Link>
            </div>

            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
         </div>

      </div>
    );
}


export default Login;