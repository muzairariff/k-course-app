import "reflect-metadata";
import { Container } from "inversify";
import { IUserService } from "./interfaces/IUserService";
import { UserService } from "./services/UserService";

const container = new Container();
container.bind<IUserService>("UserService").to(UserService);

export { container };
