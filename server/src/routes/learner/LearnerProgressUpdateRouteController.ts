import { Response, Request } from "express";

import { AbstractRouteController } from "../AbstractRouteController";
import { LearnerService } from "../../services/leaner/LearnerService";
import { StatusConstants } from "../../constants/StatusConstants";

export class LearnerProgressUpdateRouteController extends AbstractRouteController {
  constructor(_link: string) {
    super();
    this.path = `/learners/:learnerId/progress`;
    this.InitializePut();
  }

  public async runService(req: Request, res: Response): Promise<any> {
    try {
      const { learnerId } = req.params;
      const { progress, lessonId } = req.body;
      const response = await LearnerService.updateLearnerProgress(
        learnerId,
        progress,
        lessonId
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
