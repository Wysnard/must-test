import {
  TOKEN_LOAD_REQUEST,
  TOKEN_LOAD_SUCCESS,
  TOKEN_LOAD_FAILURE,
} from "./token.types";
import { TTokenActionTypes, ITokenState } from "./token.types";

const initialState = {
  loading: false,
  authorized: undefined,
};

function token(
  state: ITokenState = initialState,
  action: TTokenActionTypes
): ITokenState {
  switch (action.type) {
    case TOKEN_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TOKEN_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case TOKEN_LOAD_SUCCESS:
      return {
        ...state,
        authorized: action.payload.authorized,
        loading: false,
      };

    default:
      return state;
  }
}

export default token;
