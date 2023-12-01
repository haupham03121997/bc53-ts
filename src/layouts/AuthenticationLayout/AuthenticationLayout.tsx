import React from "react";
import { Outlet } from "react-router-dom";

const AuthenticationLayout: React.FC = (): JSX.Element => {
  return (
    <div>
      AuthenticationLayout
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
