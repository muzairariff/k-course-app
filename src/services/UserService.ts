import { injectable } from "inversify";
import { IUserService } from "../interfaces/IUserService";

@injectable()
export class UserService implements IUserService {
  getUser(): string {
    return "Rayra  from DI!";
  }
}
