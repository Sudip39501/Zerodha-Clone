import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    

    useEffect(() => {
      console.log(token);
      let isToken = lolocalStorage.getItem("token") ? true : false;
      if (!isToken) {
        window.location.href =
          "https://zerodha-clone-ten-weld.vercel.app/OpenAccount/login";
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
