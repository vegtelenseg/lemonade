import { Express, Response, Request } from "express";

import { StatusConstants } from "../constants/StatusConstants";

export class ErrorHandlingMiddleware {
  app: Express;

  constructor(_app: Express) {
    this.app = _app;
  }

  public handle404Error() {
    this.app.use((_req: Request, resp: Response) => {
      resp.send({
        errorCode: StatusConstants.code404,
        errorDescription: StatusConstants.code404Message,
      });
    });
  }
  public handle500Error() {
    this.app.use((_req: Request, resp: Response) => {
      resp.send({
        errorCode: StatusConstants.code500,
        errorDescription: StatusConstants.code500Message,
      });
    });
  }
}
