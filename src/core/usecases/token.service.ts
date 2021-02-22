import { Token } from "../domains/token.entity";
import { TokenRepository } from "../port/repositories/token.repository";

export class GetToken {
  constructor(private tokenRepo: TokenRepository) {}

  async execute(token: string): Promise<Token> {
    return this.tokenRepo.GetToken(token);
  }
}
