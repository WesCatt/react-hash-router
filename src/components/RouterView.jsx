import {createContext, useEffect, useState} from "react";
import {routes} from "../index.jsx";

export const OutletContext = createContext();

export const RouterView = () => {
    const [path, setPath] = useState(window.location.hash.slice(1) || "/");
    useEffect(() => {
        const onHashChange = () => {
            setPath(window.location.hash.slice(1) || "/");
        };
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const matchRoute = (path, routerTable) => {
        for (let key in routerTable) {
            if (key === path) return routerTable[path].element;
            if (routerTable[key].children) {
                const child = matchRoute(path, routerTable[key].children);
                console.log(child)
                if (child) {
                    console.log(1);
                    return (
                        <OutletContext.Provider value={child}>{routerTable[key].element}</OutletContext.Provider>
                    )
                }
            }
        }
        return <h2>404 Not Found</h2>;
    }

    return matchRoute(path, routes);
}

