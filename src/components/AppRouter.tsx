import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "@/routes";


const AppRouter = () => {
    return ( 
        <Routes>
            {routes.map(route => 
                <Route key={route.path} path={route.path} element={<route.component />}></Route>
            )}
            <Route path='*' element={<Navigate to={'/'} replace/> }></Route>
        </Routes>
    );
}

export default AppRouter;