import LearnerDetails from './LearnerDetails'
import LearnerProgress from './LearnerProgress'
import MuiBox from '@material-ui/core/Box'
import MuiContainer from '@material-ui/core/Container'
import MuiDivider from '@material-ui/core/Divider'
import MuiPaper from '@material-ui/core/Paper'

function LearnerPage() {
  const placeholderLearner = {
    id: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
    name: 'Olivia Moore',
    username: 'livvy18',
    lastSync: '2020-04-22T07:17:23.000Z',
  }
  const placeholderProgress = [
    {
      learnerId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      moduleId: 1,
      lessonId: 1,
      progress: 1,
    },
    {
      learnerId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      moduleId: 1,
      lessonId: 2,
      progress: 1,
    },
    {
      learnerId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      moduleId: 1,
      lessonId: 3,
      progress: 1,
    },
    {
      learnerId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      moduleId: 2,
      lessonId: 1,
      progress: 1,
    },
    {
      learnerId: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      moduleId: 2,
      lessonId: 2,
      progress: 0.25,
    },
  ]
  return (
    <MuiContainer component="main" mt={4}>
      <MuiPaper>
        <MuiBox mt={4}>
          <LearnerDetails learner={placeholderLearner} />
          <MuiDivider light />
          <LearnerProgress progress={placeholderProgress} />
        </MuiBox>
      </MuiPaper>
    </MuiContainer>
  )
}

export default LearnerPage
