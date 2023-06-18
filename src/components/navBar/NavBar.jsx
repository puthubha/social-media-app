import "./navBar.scss"

import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import {DarkModeContext} from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


function NavBar(){
 
    const {toggle, darkMode } = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);


    return (
        <div className="navbar"> 
          <div className="left">
          <Link to="/" style={{textDecoration:"none"}}>
            <span>SocialWorld</span>         
          </Link>
            
            <AiOutlineHome /> 
           {darkMode ? (
            <MdOutlineWbSunny style={{cursor: "pointer"}} onClick={toggle}/>
            ) : (
            <MdOutlineDarkMode style={{cursor: "pointer"}}  onClick={toggle}/>
            )}
            <AiOutlineAppstore/>
            <div className="search">

             <AiOutlineSearch/>
             <input type="text" placeholder="Search..."></input>
        
            </div>
          </div>


          <div className="right">
  
            <BsPerson />
            <AiOutlineMail/> 
            <MdOutlineNotificationsNone/>
             
             <div className="user">
             <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
             </div>
      
          </div>
      
       </div>
    );
}

export default NavBar;