import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ isAuth }) {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
