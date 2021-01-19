import { pool as db } from "../../db";

export class LearnerService {
  public static async listLearners(
    req: Express.Request,
    res: Express.Response
  ) {
    const { rows } = await db.query("SELECT * FROM learners");
    const learners = rows.map((row) => ({
      id: row.id,
      name: row.name,
      username: row.username,
      lastSync: row.last_sync,
    }));
    //@ts-ignore
    res.json(learners);
  }

  public static async listLearnerById(learnerId: string, res: Response) {
    const { rows } = await db.query(
      `SELECT * FROM learners where learners.id = '${learnerId}'`
    );
    const learners = rows.map((row) => ({
      id: row.id,
      name: row.name,
      username: row.username,
      lastSync: row.last_sync,
    }));
    //@ts-ignore
    res.json(learners);
  }
}
