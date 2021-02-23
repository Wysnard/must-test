import {
  TOKEN_LOAD_REQUEST,
  TOKEN_LOAD_SUCCESS,
  TOKEN_LOAD_FAILURE,
} from "./token.types";
import { GetToken } from "../../core/usecases/token.service";
import { TokenRepositoryImpl } from "../../adapters/repositories/token.implementation";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export const requestToken = (id: string) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  dispatch({ type: TOKEN_LOAD_REQUEST });

  try {
    const tokenRepo = new TokenRepositoryImpl();
    const tokenService = new GetToken(tokenRepo);
    const token = await tokenService.execute(id);
    dispatch({ type: TOKEN_LOAD_SUCCESS, payload: token });
  } catch (error) {
    dispatch({ type: TOKEN_LOAD_FAILURE, error });
  }
};
