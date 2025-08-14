import {Link} from "../components/Link.jsx";
import {Outlet} from "../components/Outlet.jsx";

const Contact = () => {


    return (
        <>
            <div>
                <Link to={'/contact/test1'}>contact1</Link>
                <Link to={'/contact/test2'}>contact2</Link>
                <Link to={'/contact/test3'}>contact3</Link>
            </div>
            <div>Hello,This is Contact</div>
            <Outlet/>
        </>
    )
}

export default Contact;