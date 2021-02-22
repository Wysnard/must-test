import React from "react";

interface IProps {
  id: string;
  authorized: boolean;
  requestToken: any;
}

const TokenAccess = ({ id, authorized, requestToken }: IProps) => {
  return (
    <div>
      TOKEN ID : {id}
      {/* <button onClick={() => requestToken(id)}>Refresh</button> */}
      <div>Authorized : {`${authorized}`}</div>
    </div>
  );
};

export default TokenAccess;
