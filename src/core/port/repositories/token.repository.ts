import { Token } from "../../domains/token.entity";

export interface TokenRepository {
  GetToken(token: string): Promise<Token>;
}
