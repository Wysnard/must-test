import { Token } from "../../core/domains/token.entity";
import { TokenRepository } from "../../core/port/repositories/token.repository";

export class TokenRepositoryImpl implements TokenRepository {
  base_url = "salon-3d.com/rejoindre-salon/api/token?";

  async GetToken(token: string): Promise<Token> {
    // actually hit the API
    // const res = await fetch(this.base_url + token);
    // const jsonData = await res.json();
    // return new Token(jsonData);

    return new Token({
      id: "fake",
      authorized: token.length % 2 === 0,
    });
  }
}
