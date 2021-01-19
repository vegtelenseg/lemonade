import {Link} from 'react-router-dom'

function LearnerList({learners}) {
  return (
    <ul>
      {learners.map((learner) => (
        <li key={learner.id}>
          <Link to={`/learners/${learner.id}`}>{learner.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default LearnerList
