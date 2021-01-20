import { pool as db } from "../../db";
import { StatusConstants } from "../../constants/StatusConstants";
import { Request, Response } from "express";
export class LearnerService {
  public static async listLearners(req: Request, res: Response) {
    try {
      const { rows } = await db.query("SELECT * FROM learners");
      const learners = rows.map((row) => ({
        id: row.id,
        name: row.name,
        username: row.username,
        lastSync: row.last_sync,
      }));
      return learners;
    } catch (error) {
      return {
        errorCode: StatusConstants.code500,
        errorDescription: StatusConstants.code500Message,
      };
    }
  }

  public static async getLearnerProgress(learnerId: string, res: Response) {
    try {
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
      return {
        errorCode: StatusConstants.code500,
        errorDescription: StatusConstants.code500Message,
      };
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
