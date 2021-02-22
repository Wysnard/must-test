import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { requestToken } from "../app/token/token.actions";
import TokenAccess from "../components/tokenAccess";
import Modal from "../components/modal";
import useQuery from "../utils/useQuery";

interface IProps {
  authorized: boolean;
  requestToken: any;
}

const RejoindreSalon = ({ authorized, requestToken }: IProps) => {
  const query = useQuery();
  const queryStr: string = query.toString();
  const id = queryStr.substr(0, queryStr.length - 1);
  console.log(id);
  const history = useHistory();

  useEffect(() => {
    requestToken(id);
  }, []);

  useEffect(() => {
    if (authorized) history.push(`/salon/${id}`);
  }, [authorized, id, history]);

  return (
    <>
      <div>Rejoindre un salon</div>
      <TokenAccess
        id={id}
        authorized={authorized}
        requestToken={requestToken}
      />
      <Modal open={!authorized} />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  authorized: state.token.authorized,
});

const mapDispatchToProps = (dispatch: any) => ({
  requestToken: (id: string) => dispatch(requestToken(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RejoindreSalon);
