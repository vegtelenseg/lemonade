import { Response, Request } from "express";

import { AbstractRouteController } from "../AbstractRouteController";
import { LearnerService } from "../../services/leaner/LearnerService";
import { StatusConstants } from "../../constants/StatusConstants";

export class LearnerByIdRouteController extends AbstractRouteController {
  constructor(link: string) {
    super();
    /**
     * According to the API spec, this should be
     * /learner/:learnerId
     * But I think /leaner is enough since we
     * the learnerId can be sent via headers of the request
     * instead of a URL param
     *  */
    this.path = `/learner`;
    this.InitializeController(link);
  }

  public async runService(req: Request, res: Response): Promise<any> {
    try {
      // TODO: Get this from request headers or
      // or somewhere else safer.
      const { learnerId } = req.body;
      const response = await LearnerService.listLearnerById(
        learnerId,
        // @ts-ignore
        res
      );
      res.status(StatusConstants.code200).send(response);
    } catch (error) {
      res.status(StatusConstants.code500).send({
        name: StatusConstants.code500,
        description: StatusConstants.code500Message,
      });
    }
  }
}
