import { Token } from "../domains/token.entity";
import { TokenRepository } from "../port/repositories/token.repository";
import { GetToken } from "./token.service";

test("Authorize token", async () => {
  const tokenRepo: TokenRepository = {
    async GetToken() {
      return new Token({
        id: "test",
        authorized: true,
      });
    },
  };
  const tokenService = new GetToken(tokenRepo);

  const expected_result = new Token({
    id: "test",
    authorized: true,
  });
  expect(await tokenService.execute("test")).toEqual(expected_result);
});
