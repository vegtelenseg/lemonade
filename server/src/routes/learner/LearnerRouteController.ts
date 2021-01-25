import { Response, Request, NextFunction } from 'express';

import { AbstractRouteController } from '../AbstractRouteController';
import { LearnerService } from '../../services/leaner/LearnerService';
import { StatusConstants } from '../../constants/StatusConstants';

export class LearnerRouteController extends AbstractRouteController {
  constructor(_link: string) {
    super();
    this.path = `/learners/:learnerId`;
    this.InitializeGet();
  }

  public async runService(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const response = await LearnerService.getLearnerById(req, res, next);
      res.status(StatusConstants.code200).send(response);
    } catch (error) {
      console.log('ERR: ', error);
      // next(error);
    }
  }
}
