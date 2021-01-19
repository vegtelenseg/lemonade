import Heading from './Heading'
import LearnerList from './LearnerList'
import MuiBox from '@material-ui/core/Box'
import MuiContainer from '@material-ui/core/Container'

function LearnerListPage() {
  const placeholderLearners = [
    {
      id: '2ab1fa1b-048a-4b50-8a25-2ff947bd612d',
      name: 'Olivia Moore',
      username: 'livvy18',
      lastSync: '2020-04-22T07:17:23.000Z',
    },
    {
      id: 'e2ef8a4e-836e-4c3c-b0e4-67eee4b284e7',
      name: 'Alice Moore',
      username: 'RainbowPony3',
      lastSync: '2020-04-20T12:34:59.000Z',
    },
    {
      id: '164ac478-8c14-4e2f-a86f-a7f5ec49916b',
      name: 'Oliver Watts',
      username: 'dinosaurs_are_cool',
      lastSync: '2020-03-22T07:12:40.000Z',
    },
  ]
  return (
    <MuiContainer component="main" mt={4}>
      <MuiBox display="flex" justifyContent="center" mt={4}>
        <Heading>Learner Dashboard</Heading>
      </MuiBox>
      <MuiBox mt={4}>
        <LearnerList learners={placeholderLearners} />
      </MuiBox>
    </MuiContainer>
  )
}

export default LearnerListPage
