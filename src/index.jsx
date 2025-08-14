import Home from "./view/Home.jsx";
import About from "./view/About.jsx";
import Contact from "./view/Contact.jsx";
import Contact1 from "./view/Contact1.jsx";
import Contact3 from "./view/Contact3.jsx";
import Contact2 from "./view/Contact2.jsx";

export const routes = {
    "/": {
        element: <Home/>
    },
    "/about": {
        element: <About/>
    },
    '/contact':{
        element:<Contact/>,
        children:{
            '/contact/test1':{
                element:<Contact1/>
            },
            '/contact/test2':{
                element:<Contact2/>
            },
            '/contact/test3':{
                element:<Contact3/>
            }
        }
    }
}