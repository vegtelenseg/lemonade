import { Response, Request } from "express";

import { AbstractRouteController } from "../AbstractRouteController";
import { LearnerService } from "../../services/leaner/LearnerService";
import { StatusConstants } from "../../constants/StatusConstants";

export class LearnersRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    this.path = "/learners";
    this.InitializeController(link);
  }

  public async runService(req: Request, res: Response): Promise<any> {
    try {
      const response = await LearnerService.listLearners(req, res);
      res.status(StatusConstants.code200).send(response);
    } catch (error) {
      res.status(StatusConstants.code500).send({
        name: StatusConstants.code500,
        description: StatusConstants.code500Message,
      });
    }
  }
}
