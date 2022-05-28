import { Outlet, Navigate } from "react-router";

export const PrivateRoute = ({ authed }) => (
    authed ? <Outlet /> : <Navigate to="/" replace />
);
