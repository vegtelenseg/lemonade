import { Express } from "express";

import { LearnersRouteController } from "../routes/learner/LearnersRouteController";
import { AbstractRouteController } from "../routes/AbstractRouteController";
import { LearnerProgressRouteController } from "../routes/learner/LearnerProgressRouteController";
import { LearnerDeleteRouteController } from "../routes/learner/LearnerDeleteRouteController";
export class InitializeRoutes {
  public static Initialize(app: Express, link: string) {
    const routes = this.getRoutes(link);
    routes.forEach((rc) => {
      app.use(rc.router);
    });
  }

  public static getRoutes(link: string) {
    const routes: Array<AbstractRouteController> = [
      new LearnersRouteController(link),
      new LearnerProgressRouteController(link),
      new LearnerDeleteRouteController(link),
    ];

    return routes;
  }
}
