import "./posts.scss"
import Post from "../post/Post";

function Posts(){

    const posts = [
        {
          id: 1,
          name: "Jennifer O'Connor",
          profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV99IJOGUBMQBy9kccOQsAyq36yzt0BRYUw&usqp=CAU",
          desc: "this was my firs image , and i am very happy",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNAiOzvk4IyYc5AiyD5PGsocvBTXC2Pe64A&usqp=CAU"
        },
        {
            id: 2,
            name: "George Thomas",
            profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-QgBlLOHMcF27Gg6DWSG0PDN2EUwzV9D0A&usqp=CAU",
            desc: "The “compelling reasons” are the main feature of strong product descriptions. There’s a common misconception that product descriptions need to describe the product. Their main job is actually to persuade customers to buy,which is more likely to happen when they focus on benefits, not features.",
            
        }
    ];

    return (
        <div className="posts">
            {posts.map(post =>(

                <Post post={post} key={post.id} />

            ))}
        </div>
    );
}

export default Posts