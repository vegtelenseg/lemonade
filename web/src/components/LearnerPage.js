import LearnerDetails from './LearnerDetails'
import LearnerProgress from './LearnerProgress'

function LearnerPage() {
  const placeholderLearner = {
    id: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
    name: 'Olivia Moore',
    username: 'livvy18',
    lastSync: '2020-04-22T07:17:23.000Z',
  }
  return (
    <>
      <LearnerDetails learner={placeholderLearner} />
      <LearnerProgress progress={[]} />
    </>
  )
}

export default LearnerPage
