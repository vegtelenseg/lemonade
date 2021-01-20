import { Express } from "express";

import { CommonMiddleware } from "../middleware/CommonMiddleware";
import { ErrorHandlingMiddleware } from "../middleware/ErrorHandlingMiddleware";

export class InitializeMiddleWare {
  public static InitializeCommonMiddleware(app: Express) {
    const middleware = new CommonMiddleware(app);

    middleware.useBodyParser();
    middleware.useURLencoded();
    middleware.useCors();
    middleware.logRequests();
  }

  public static InitializeErrorHandlingMiddleware(app: Express) {
    const errorMiddleware = new ErrorHandlingMiddleware(app);

    errorMiddleware.handle404Error();
    errorMiddleware.handle500Error();
  }
}
