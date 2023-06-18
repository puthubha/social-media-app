import "./register.scss"
import  { Link } from "react-router-dom";


function Register(){
    return (
     <div className="register">
         <div className="card">
            <div className="left">
                 <h1> social wold. </h1>
                 <p> ther are the best app for social comunication you can youse for joy and time pass,
                 many peopels are using this site and app lication so i prefer to you use.</p>         
                 <span>Do you have an account</span>
                 <Link to="/login">
                    <button>Login</button>
                 </Link>
            </div>

            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                    <button>Register</button>
                </form>
            </div>
         </div>

      </div>
    );
}


export default Register;