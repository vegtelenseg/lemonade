import Heading from './Heading'
import DeleteIcon from '@material-ui/icons/Delete'
import MuiBox from '@material-ui/core/Box'
import MuiButton from '@material-ui/core/Button'

function LearnerDetails({learner}) {
  return (
    <MuiBox
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <MuiBox p={2}>
        <Heading>{learner.name}</Heading>
        <div>{learner.username}</div>
      </MuiBox>
      <MuiBox p={2}>
        <LearnerActions learnerId={learner.id} />
      </MuiBox>
    </MuiBox>
  )
}

function LearnerActions({learnerId}) {
  function handleDelete() {
    console.info('Delete clicked', learnerId)
  }

  return (
    <MuiBox display="flex" flexDirection="column">
      <MuiButton
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
      >
        Delete
      </MuiButton>
    </MuiBox>
  )
}

export default LearnerDetails
