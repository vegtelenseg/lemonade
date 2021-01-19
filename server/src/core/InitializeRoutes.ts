import { Express } from "express";

import { LearnersRouteController } from "../routes/learner/LearnersRouteController";
import { AbstractRouteController } from "../routes/AbstractRouteController";
import { LearnerByIdRouteController } from "../routes/learner/LearnerRouteController";
export class InitializeRoutes {
  public static async Initialize(app: Express, link: string) {
    const routes = await this.getRoutes(link);
    routes.forEach((rc) => {
      app.use("/", rc.router);
    });
  }

  public static async getRoutes(link: string) {
    const routes: Array<AbstractRouteController> = [
      new LearnersRouteController(link),
      new LearnerByIdRouteController(link),
    ];

    return Promise.resolve(routes);
  }
}
