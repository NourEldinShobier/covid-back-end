import { LogEntry } from "@prisma/client";
import { prisma } from "../prisma-client";
import { CreateLogEntryDto } from "./dtos";
import { LogEntrySummary } from "./interfaces";

export class LogsService {
  async createLogEntry(createLogEntryDto: CreateLogEntryDto) {
    try {
      await prisma.logEntry.create({ data: { ...createLogEntryDto } });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserLogs(userId: string): Promise<LogEntry[]> {
    return await prisma.logEntry.findMany({
      where: { userId },
    });
  }

  async getLogsStats(): Promise<LogEntrySummary[]> {
    const logs = await prisma.logEntry.findMany();

    const logsSummary: LogEntrySummary[] = logs.map((entry) => {
      return {
        location: entry.location,
        temperature: entry.temperature,
        symptoms: entry.symptoms,
        date: entry.date,
      };
    });

    return logsSummary;
  }
}
