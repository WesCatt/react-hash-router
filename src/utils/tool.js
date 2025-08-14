// // 简易匹配路由方法
// import {OutletContext} from "../components/RouterView.jsx";
//
// export function matchRoute(path, routerTable) {
//     for (let key in routerTable) {
//         if (key === path) return routerTable[path].element;
//         if (routerTable[key].children) {
//             const child = matchRoute(path, routerTable[key].children);
//             if (child) {
//                 return (
//                     <OutletContext.Provider value={child}>{routerTable[key].element}</OutletContext.Provider>
//                 )
//             }
//         }
//     }
//     return <h2>404 Not Found</h2>;
// }