import "./profile.scss"
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { MdMoreVert } from "react-icons/md";
import Posts from "../../components/posts/Posts.jsx";



function Profile(){
    return (
        <div className="profile"> 
         <div className="images">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdyAG3BHNMuZ417L21mydWdcJ3GOgsteNaQ&usqp=CAU" alt=""
            className="cover"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV99IJOGUBMQBy9kccOQsAyq36yzt0BRYUw&usqp=CAU" alt=""
             className="profilePic"/>
         </div>

         <div className="profileContainer">
            <div className="uInfo">
                <div className="left">
                    <a href=""> <BsFacebook size={25}/> </a>
                    <a href=""> <BsInstagram size={25}/> </a>
                    <a href=""> <BsTwitter size={25}/> </a>
                    <a href=""> <BsLinkedin size={25}/> </a>
                </div>
                <div className="center">
                    <span>Jennifer O'Connor</span>
                    <div className="info">
                        <div className="item">
                            <MdPlace/>
                            <span>USA</span>
                        </div>
                        <div className="item">
                            <MdLanguage/>
                            <span>English</span>
                        </div>                    
                    </div>
                    <button>Follow</button>
                </div>
               
                <div className="right">
                    <AiOutlineMail size={25}/>
                    <MdMoreVert size={25}/>
                </div>
            </div>
            <Posts/>
         </div>
        </div>
    );
}

export default Profile;