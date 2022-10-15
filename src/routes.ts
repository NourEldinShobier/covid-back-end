import express from "express";
import { checkJwt } from "./auth";
import {
  createLogEntry,
  getLogsStats,
  getUserLogs,
} from "./logs/logs.controller";
import { updateUser } from "./users/users.controller";

const router = express.Router();

// users
router.patch("/users", checkJwt, updateUser);

// logs
router.post("/logs", checkJwt, createLogEntry);
router.get("/logs", checkJwt, getUserLogs);
router.get("/logs/stats", getLogsStats);

export default router;
