import './App.css'
import {RouterView} from "./components/RouterView.jsx";
import {Link} from "./components/Link.jsx";

function App() {

    return (
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <RouterView></RouterView>
        </>
    )
}

export default App
