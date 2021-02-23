import React from "react";

interface IProps {
  id: string;
  authorized: boolean;
}

const TokenAccess = ({ id, authorized }: IProps) => {
  return (
    <div>
      TOKEN ID : {id}
      <div>Authorized : {`${authorized}`}</div>
    </div>
  );
};

export default TokenAccess;
