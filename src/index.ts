import * as dotenv from "dotenv";

dotenv.config();

import express, { json } from "express";
import routes from "./routes";
import cors from "cors";
import helmet from "helmet";

async function main() {
  const app = express();

  app.use(cors({ origin: "*" }));
  app.use(helmet());
  app.use(json());
  app.use("/api", routes);

  const port = process.env.PORT || 3003;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main();
