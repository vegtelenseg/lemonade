import { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { Logger } from '../utils/logger/Logger';

export class CommonMiddleware {
  app: Express;

  constructor(_app: Express) {
    this.app = _app;
  }

  public useBodyParser() {
    this.app.use(bodyParser.json());
  }

  public useURLencoded() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
  }

  public useCors() {
    this.app.use(cors());
  }

  public logRequests() {
    const logger = Logger.getLogger();
    this.app.use((req, res, done) => {
      logger.info(req.originalUrl);
      done();
    });
  }
}
