export const TOKEN_LOAD_REQUEST = "TOKEN_LOAD_REQUEST";
export const TOKEN_LOAD_SUCCESS = "TOKEN_LOAD_SUCCESS";
export const TOKEN_LOAD_FAILURE = "TOKEN_LOAD_FAILURE";

export type TAuthorized = boolean | undefined;

export interface ITokenState {
  loading: boolean;
  authorized?: TAuthorized;
}

interface ITokenLoadRequestAction {
  type: typeof TOKEN_LOAD_REQUEST;
}

interface ITokenLoadSuccessAction {
  type: typeof TOKEN_LOAD_SUCCESS;
  payload: {
    id: string;
    authorized: boolean;
  };
}

interface ITokenLoadFailureAction {
  type: typeof TOKEN_LOAD_FAILURE;
}

export type TTokenActionTypes =
  | ITokenLoadRequestAction
  | ITokenLoadSuccessAction
  | ITokenLoadFailureAction;
