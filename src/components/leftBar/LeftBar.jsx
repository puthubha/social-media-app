import "./leftBar.scss"
import Friends from "./images/friends.png"
import Event from "./images/event.png"
import Cources from "./images/cources.png"
import Gallery from "./images/gallery.png"
import Gaming from "./images/gaming.png"
import Group from "./images/group.png"
import Marketplace from "./images/marketplace.png"
import Memories from "./images/memories.png"
import Messages from "./images/messages.png"
import Tutorial from "./images/tutorial.png"
import Video from "./images/video.png"
import Watch from "./images/watch.png"
import { AuthContext } from "../../context/authContext"  
import { useContext } from "react"

function LeftBar(){

const {currentUser} = useContext(AuthContext);


    return (
        <div className="leftBar"> 
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src={currentUser.profilePic}
                     alt=""/>
                    <span>{currentUser.name}</span>
                </div>

                <div className="item">
                    <img src={Friends} alt=""/>
                    <span>Friends</span>                   
                </div>

                <div className="item">
                    <img src={Group} alt=""/>
                    <span>Group</span>                   
                </div>

                <div className="item">
                    <img src={Marketplace} alt=""/>
                    <span>Marketplace</span>                   
                </div>

                <div className="item">
                    <img src={Watch} alt=""/>
                    <span>Watch</span>                   
                </div>

                <div className="item">
                    <img src={Memories} alt=""/>
                    <span>Memories</span>                   
                </div>
            </div>

            <hr/>
             
             <div className="menu">
            
                  <span>Your Shortcuts</span>        

                <div className="item">
                    <img src={Event} alt=""/>
                    <span>Events</span>                   
                </div>

                <div className="item">
                    <img src={Gaming} alt=""/>
                    <span>Gaming</span>                   
                </div>

                <div className="item">
                    <img src={Gallery} alt=""/>
                    <span>Gallery</span>                   
                </div>

                <div className="item">
                    <img src={Video} alt=""/>
                    <span>Video</span>                   
                </div>

                <div className="item">
                    <img src={Messages} alt=""/>
                    <span>Messages</span>                   
                </div>
            </div>

            <hr/>
   
            <div className="menu">
              
              <span>Others</span>           

              <div className="item">
                    <img src={Tutorial} alt=""/>
                    <span>Tutorial</span>                   
                </div>

                <div className="item">
                    <img src={Cources} alt=""/>
                    <span>Cources</span>                   
                </div>


            </div>



        </div>
      </div>
    );
}

export default LeftBar;