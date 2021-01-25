import { pool as db } from '../../db';
import { StatusConstants } from '../../constants/StatusConstants';
import { Request, Response, NextFunction } from 'express';
export class LearnerService {
  public static async getLearnerById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { learnerId } = req.params;
    const { rows } = await db.query('SELECT * from learners where id = $1', [
      learnerId,
    ]);
    const learner = rows.map((row) => ({
      id: row.id,
      name: row.name,
      username: row.username,
      lastSync: row.last_sync,
    }));
    return learner;
  }
  public static async getLearners(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { rows } = await db.query('SELECT * FROM learners');
      const learners = rows.map((row) => ({
        id: row.id,
        name: row.name,
        username: row.username,
        lastSync: row.last_sync,
      }));
      return learners;
    } catch (error) {
      next(error);
    }
  }

  public static async getLearnerProgress(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { learnerId } = req.params;
      const { rows } = await db.query(
        `SELECT
          learners.id AS learner_id,
          modules.id AS module_id,
          lessons.id AS lesson_id,
          progress,
          username
         FROM public.learners
         LEFT JOIN learner_lesson
         ON learner_id = learners.id
         LEFT JOIN lessons
         ON lessons.id = lesson_id
         LEFT JOIN modules
         ON modules.id = lessons.module_id
         WHERE learners.id = $1`,
        [learnerId]
      );
      const learners = rows.map((row) => ({
        learnerId: row.learner_id,
        moduleId: row.module_id,
        lessonId: row.lesson_id,
        progress: row.progress,
      }));
      return learners;
    } catch (error) {
      res.status(500).send(error.message);
      // next(error.message);
    }
  }

  public static async updateLearnerProgress(
    learnerId: string,
    progress: number,
    lessonId: number
  ) {
    try {
      const { rows } = await db.query(
        `
        UPDATE learner_lesson
        SET progress = $1
        WHERE learner_id = $2
        AND lesson_id = $3`,
        [progress, learnerId, lessonId]
      );
      const learners = rows.map((row) => ({
        learnerId: row.learner_id,
        moduleId: row.module_id,
        lessonId: row.lesson_id,
        progress: row.progress,
      }));
      return learners;
      // TODO: Catch error
    } catch (error) {}
  }

  public static async deleteLearner(learnerId: string, res: Response) {
    try {
      const {
        rows,
      } = await db.query(`DELETE FROM learners WHERE learners.id = $1`, [
        learnerId,
      ]);
      return [];
    } catch (error) {
      return {
        errorCode: StatusConstants.code500,
        errorDescription: StatusConstants.code500Message,
      };
    }
  }
}
