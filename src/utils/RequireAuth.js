import { useEffect, useState } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";

export function RequireAuth({ children }) {
  const navigate = useNavigate();
  let [isAuth, setAuth] = useState(
    JSON.parse(sessionStorage.getItem("isLogged"))
  );
  let {location} = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("isLogged") == null) {
      setAuth(false);
    }
    if (isAuth) {
      navigate('/dashboard');
    }
  }, [isAuth]);  
  
  if (isAuth === false) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

