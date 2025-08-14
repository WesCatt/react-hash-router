import {useContext} from "react";
import {OutletContext} from "./RouterView.jsx";


export const Outlet = () => {
    const outlet = useContext(OutletContext);

    return outlet || null;
}
