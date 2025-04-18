import { useLocation, Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../store";

export const RequireAuth = () => {
    const auth = useAppSelector(state => state.auth);
    
    const location = useLocation();

    return auth?.email || auth?.address ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
};


