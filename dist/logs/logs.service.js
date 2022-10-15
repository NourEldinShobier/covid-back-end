"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsService = void 0;
const prisma_client_1 = require("../prisma-client");
class LogsService {
    createLogEntry(createLogEntryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_client_1.prisma.logEntry.create({ data: Object.assign({}, createLogEntryDto) });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getUserLogs(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_client_1.prisma.logEntry.findMany({
                where: { userId },
            });
        });
    }
    getLogsStats() {
        return __awaiter(this, void 0, void 0, function* () {
            const logs = yield prisma_client_1.prisma.logEntry.findMany();
            const logsSummary = logs.map((entry) => {
                return {
                    location: entry.location,
                    temperature: entry.temperature,
                    symptoms: entry.symptoms,
                    date: entry.date,
                };
            });
            return logsSummary;
        });
    }
}
exports.LogsService = LogsService;
//# sourceMappingURL=logs.service.js.map