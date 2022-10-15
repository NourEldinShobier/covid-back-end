"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("./auth");
const logs_controller_1 = require("./logs/logs.controller");
const users_controller_1 = require("./users/users.controller");
const router = express_1.default.Router();
// users
router.patch("/users", auth_1.checkJwt, users_controller_1.updateUser);
// logs
router.post("/logs", auth_1.checkJwt, logs_controller_1.createLogEntry);
router.get("/logs", auth_1.checkJwt, logs_controller_1.getUserLogs);
router.get("/logs/stats", logs_controller_1.getLogsStats);
exports.default = router;
//# sourceMappingURL=routes.js.map