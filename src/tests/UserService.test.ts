import "reflect-metadata";
import { Container } from "inversify";
import { IUserService } from "../interfaces/IUserService";
import { UserService } from "../services/UserService";

describe("UserService DI Test", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.bind<IUserService>("UserService").to(UserService);
  });

  it("should return expected string from UserService via DI", () => {
    const userService = container.get<IUserService>("UserService");
    const result = userService.getUser();
    expect(result).toBe("Rayra  for DI!");
  });
});
