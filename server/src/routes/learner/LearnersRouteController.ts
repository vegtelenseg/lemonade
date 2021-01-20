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
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  }
}
