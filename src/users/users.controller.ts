import { Request, Response } from "express";

import { UpdateUserDto } from "./dtos";
import { UsersService } from "./users.service";

export const updateUser = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.auth.sub as string;
  const data = req.body as UpdateUserDto;

  const service = new UsersService();

  service.updateUser(userId, data);

  res.status(200).send();
};
