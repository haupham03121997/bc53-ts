import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Header: React.FC = (): JSX.Element => {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return <div>Header {currentUser?.hoTen}</div>;
};

export default Header;
