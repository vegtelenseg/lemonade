import { Response, Request } from "express";

import { AbstractRouteController } from "../AbstractRouteController";
import { LearnerService } from "../../services/leaner/LearnerService";
import { StatusConstants } from "../../constants/StatusConstants";

export class LearnerDeleteRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = `/learners/:learnerId`;
    this.InitializeController(link);
  }

  public async runService(req: Request, res: Response): Promise<any> {
    try {
      const { learnerId } = req.params;
      const response = await LearnerService.deleteLearner(
        learnerId,
        // @ts-ignore
        res
      );
      res.status(StatusConstants.code204).send(response);
    } catch (error) {
      res.status(StatusConstants.code500).send({
        errorCode: StatusConstants.code500,
        errorDescription: StatusConstants.code500Message,
      });
    }
  }
}
