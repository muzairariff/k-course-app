import type { NextApiRequest, NextApiResponse } from "next";
import { container } from "../../../src/inversify.config";
import { IUserService } from "../../interfaces/IUserService";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userService = container.get<IUserService>("UserService");
  const user = userService.getUser();

  res.status(200).json({ user });
}
