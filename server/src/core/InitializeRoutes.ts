import { Express } from 'express';

import { LearnersRouteController } from '../routes/learner/LearnersRouteController';
import { AbstractRouteController } from '../routes/AbstractRouteController';
import { LearnerProgressRouteController } from '../routes/learner/LearnerProgressRouteController';
import { LearnerDeleteRouteController } from '../routes/learner/LearnerDeleteRouteController';
import { LearnerProgressUpdateRouteController } from '../routes/learner/LearnerProgressUpdateRouteController';
import { LearnerRouteController } from '../routes/learner/LearnerRouteController';
export class InitializeRoutes {
  public static Initialize(app: Express, link: string) {
    const learnersRouteController = new LearnersRouteController(link);
    const learnerProgressRouteController = new LearnerProgressRouteController(
      link
    );
    const learnerRouteController = new LearnerRouteController(link);
    const learnerDeleteRouteController = new LearnerDeleteRouteController(link);
    const learnerProgressUpdateRouteController = new LearnerProgressUpdateRouteController(
      link
    );
    app.get(learnersRouteController.path, learnersRouteController.router);
    app.get(
      learnerProgressRouteController.path,
      learnerProgressRouteController.router
    );
    app.get(learnerRouteController.path, learnerRouteController.router);
    app.delete(
      learnerDeleteRouteController.path,
      learnerDeleteRouteController.router
    );
    app.put(
      learnerProgressUpdateRouteController.path,
      learnerProgressUpdateRouteController.router
    );
  }
}
