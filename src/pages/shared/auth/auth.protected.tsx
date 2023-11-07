import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.hook";

interface AuthProps {
  component?: React.ReactElement;
  roles?: string;
}


export const AuthProtected: React.FC<AuthProps> = (props): any => {
  const auth = useAuth();

  if (!auth?.isAuthenticated)
    return <Navigate to="/auth/sign-in"></Navigate>;

  // check if route is restricted by role
  if (props.roles && !props.roles.includes(auth?.user.roles)) {
    // role not authorised so redirect to home page
    return <Navigate to="/" />
  }

  if (!auth?.user.emailConfirmed && window.location.pathname !== "/cofirm-email")
    return <Navigate to={`/confirm-email/${auth?.user.email}`}></Navigate>;

  return props.component;
};

// export default AuthProtected;

