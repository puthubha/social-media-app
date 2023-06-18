import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { createBrowserRouter,Navigate,Outlet,RouterProvider } from "react-router-dom";
import NavBar from "./components/navBar/NavBar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";
import { AuthContext } from "./context/authContext.js";

function App(){

//    const chackLogin = true;

    const {currentUser} = useContext(AuthContext);


    const {darkMode} = useContext(DarkModeContext);

   

    const Layout = () => {
        return(
            <div className={`theme-${darkMode ? "dark" : "light" }`}>
                <NavBar/>
                <div style={{display: "flex"}}>
                    <LeftBar  />
                    <div style={{flex:6}}>
                       <Outlet />
                    </div>
                    <RightBar />
                </div>
            </div>
        );
    };

    const ProtectedRout = ({children}) =>{

        if(!currentUser){
            return <Navigate to="/login" />;
        }
        
        return children;
    }

    const router = createBrowserRouter([
        {
           path: "/",
           element: (
           <ProtectedRout>
            <Layout />
           </ProtectedRout>
           ),
           children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile/:id",
                element: <Profile />,
            }
           ]
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
    ]);


    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;