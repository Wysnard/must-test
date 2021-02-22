import { TokenRepositoryImpl } from "./token.implementation";

test("odd token length check", async () => {
  const tokenRepoImpl = new TokenRepositoryImpl();

  const result = await tokenRepoImpl.GetToken("123");

  expect(result.authorized).toBe(false);
});

test("even token length check", async () => {
  const tokenRepoImpl = new TokenRepositoryImpl();

  const result = await tokenRepoImpl.GetToken("1234");

  expect(result.authorized).toBe(true);
});
