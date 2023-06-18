import "./post.scss"
import { FiMoreHorizontal } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";





const Post = ({post}) => {
   
    const[commentOpen,setCommentOpen] = useState(false);

    const [liked, setLiked] = useState(false);

    return(
    <div className="post">
       <div className="container">

          <div className="user">
              
              <div className="userInfo">
                  <img src={post.profilePic} alt=""/>
                
                <div className="details">
                  <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                  <span className="name">{post.name}</span>
                 </Link>
                 <span className="date"> 1 min ago</span>
                </div>

            </div>
          

            <FiMoreHorizontal/>
          
          </div>
           <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt=""/>
           </div>
           <div className="info">
            <div className="item" onClick={() => setLiked(!liked)}>
                {liked ? <FcLike/> : <MdFavoriteBorder/> }
                12 Likes
            </div>
            
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                <BiCommentDetail/>
                6 Comments
            </div>

            <div className="item">
                <BsShare/>
                Share
            </div>
           </div>
           {commentOpen && <Comments/>}
       </div>
    </div>
    );
};

export default Post;