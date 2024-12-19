import { Helmet } from "components";
import { FC } from "react";
import { LoginContainer } from "./css/login.style";

const Login: FC = () => {

  return (
    <LoginContainer>
      <Helmet title="ورود" />
      <h1>Login</h1>
    </LoginContainer>
  );
};

export default Login;
