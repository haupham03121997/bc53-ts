import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import classes from "./styles.module.scss";

const Header: React.FC = (): JSX.Element => {
  const { currentUser } = useAppSelector((state) => state.user);
  useDispatch();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: "<h1>Login cỷe</h1>" }}
      className={classes.root}
    >
      Header {currentUser?.hoTen}
    </div>
  );
};

export default Header;
