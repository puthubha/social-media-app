import "./stories.scss"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

function Stories(){

  const {currentUser} = useContext(AuthContext);

    const stories = [
      {
        id: 1,
        name: "Pruthvi Gohil",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dF5RXo_2N5u_qbX6KJQplbshHkoFkP76JZ9UXRsu6fxBRtQ2FdZ3Gsghk2cRMnO74WE&usqp=CAU"
    },

      {
        id: 2,
        name: "Pruthvi Gohil",
        img: "data:image/jpeg;base64,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"
      },
      {
        id: 3,
        name: "Pruthvi Gohil",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEpZRqe3hJxnN4y_e8uPt3wuqOA5gamopyw&usqp=CAU"
      },
      {
        id: 4,
        name: "Pruthvi Gohil",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEhpMnxJicksC8mR8bjnVGm1K23WvN37dyjAWqo31i438YKrnuS_kw0S_1OPA7JT88Ik&usqp=CAU"
      },      
    ];

    return (
        <div className="stories">
        <div className="story">
           <img src={currentUser.profilePic} alt=""/>
           <span>{currentUser.name}</span>
           <button>+</button>
        </div>
            {stories.map( story => (
          <div className="story" key={story.id}>
           <img src={story.img} alt=""/>
           <span>{story.name}</span>
          </div>
            
            ))}
            
        </div>
    );
}

export default Stories