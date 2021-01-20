import { Response, Request } from "express";

import { AbstractRouteController } from "../AbstractRouteController";
import { LearnerService } from "../../services/leaner/LearnerService";
import { StatusConstants } from "../../constants/StatusConstants";

export class LearnerProgressRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = `/learners/:learnerId/progress`;
    this.InitializeController(link);
  }

  public async runService(req: Request, res: Response): Promise<any> {
    try {
      // TODO: Get this from request headers or
      // or somewhere else safer.
      const { learnerId } = req.params;
      const response = await LearnerService.getLearnerProgress(
        learnerId,
        // @ts-ignore
        res
      );
      res.status(StatusConstants.code200).send(response);
    } catch (error) {
      res.status(StatusConstants.code500).send({
        errorCode: StatusConstants.code500,
        errorDescription: StatusConstants.code500Message,
      });
    }
  }
}
