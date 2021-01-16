const db = require('../db')

exports.listLearners = async (req, res) => {
  const {rows} = await db.query('SELECT * FROM learners')
  const learners = rows.map((row) => ({
    id: row.id,
    name: row.name,
    username: row.username,
    lastSync: row.last_sync,
  }))
  res.json(learners)
}
