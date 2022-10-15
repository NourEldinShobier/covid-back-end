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
exports.getLogsStats = exports.getUserLogs = exports.createLogEntry = void 0;
const logs_service_1 = require("./logs.service");
const createLogEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const userId = req.auth.sub;
    const data = req.body;
    const service = new logs_service_1.LogsService();
    data.userId = userId;
    service.createLogEntry(data);
    res.status(201).send();
});
exports.createLogEntry = createLogEntry;
const getUserLogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const userId = req.auth.sub;
    const service = new logs_service_1.LogsService();
    const logs = yield service.getUserLogs(userId);
    res.status(200).send({ data: logs });
});
exports.getUserLogs = getUserLogs;
const getLogsStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new logs_service_1.LogsService();
    const logs = yield service.getLogsStats();
    res.status(200).send({ data: logs });
});
exports.getLogsStats = getLogsStats;
//# sourceMappingURL=logs.controller.js.map