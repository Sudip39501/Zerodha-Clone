import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    function getCookie(name) {
      const cookies = document.cookie.split(";");

      for (let cookie of cookies) {
        const [key, value] = cookie.trim().split("=");

        if (key === name) {
          return value;
        }
      }
      return null;
    }

    const token = getCookie("token");

    useEffect(() => {
      if (!token) {
        window.location.href = "https://zerodha-clone-ten-weld.vercel.app/OpenAccount/login";
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
