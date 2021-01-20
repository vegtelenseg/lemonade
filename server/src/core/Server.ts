import express from "express";

import { InitializeMiddleWare } from "./InitializeMiddleware";
import { InitializeRoutes } from "./InitializeRoutes";
import ServerConfig from "../../config/ServerConfig.json";

export const server = async () => {
  const app = express();

  // TODO: Add convict
  const { host, port } = ServerConfig;

  const link = "http://" + host + ":" + port.toString();

  await InitializeMiddleWare.InitializeCommonMiddleware(app);
  await InitializeRoutes.Initialize(app, link);
  await InitializeMiddleWare.InitializeErrorHandlingMiddleware(app);

  app.listen(port, host, () => {
    console.log(`Server listening at ${host} on ${port} port.`);
  });

  return app;
};
