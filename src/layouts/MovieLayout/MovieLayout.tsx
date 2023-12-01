import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Props {
  children?: React.ReactNode;
}
// const MovieLayout = ({ children }: Props) => {};
const MovieLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MovieLayout;
