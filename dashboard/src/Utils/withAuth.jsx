import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    useEffect(() => {
      console.log(token);
      // if(token)
      if (!token) {
        window.location.href =
          "https://zerodha-clone-ten-weld.vercel.app/OpenAccount/login";
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
