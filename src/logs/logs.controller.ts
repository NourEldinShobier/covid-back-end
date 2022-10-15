import { Request, Response } from "express";
import { CreateLogEntryDto } from "./dtos";
import { LogsService } from "./logs.service";

export const createLogEntry = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.auth.sub as string;
  const data = req.body as CreateLogEntryDto;
  const service = new LogsService();

  data.userId = userId;

  service.createLogEntry(data);

  res.status(201).send();
};

export const getUserLogs = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.auth.sub as string;
  const service = new LogsService();

  const logs = await service.getUserLogs(userId);

  res.status(200).send({ data: logs });
};

export const getLogsStats = async (req: Request, res: Response) => {
  const service = new LogsService();
  const logs = await service.getLogsStats();

  res.status(200).send({ data: logs });
};
