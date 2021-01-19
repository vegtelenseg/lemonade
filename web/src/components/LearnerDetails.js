function LearnerDetails({learner}) {
  return (
    <>
      <div>
        <h1>{learner.name}</h1>
        <div>{learner.username}</div>
      </div>
      <div>
        <LearnerActions learnerId={learner.id} />
      </div>
    </>
  )
}

function LearnerActions({learnerId}) {
  function handleDelete() {
    console.info('Delete clicked', learnerId)
  }

  return (
    <ul>
      <li>
        <button onClick={handleDelete}>Delete</button>
      </li>
    </ul>
  )
}

export default LearnerDetails
