import { Response, Request, NextFunction } from 'express';

import { AbstractRouteController } from '../AbstractRouteController';
import { LearnerService } from '../../services/leaner/LearnerService';
import { StatusConstants } from '../../constants/StatusConstants';

export class LearnersRouteController extends AbstractRouteController {
  constructor(_link: string) {
    super();
    this.path = '/learners';
    this.InitializeGet();
  }

  public async runService(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const response = await LearnerService.getLearners(req, res, next);
      res.status(StatusConstants.code200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
