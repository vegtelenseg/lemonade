import React from 'react';
import Heading from './Heading';
import DeleteIcon from '@material-ui/icons/Delete';
import MuiBox from '@material-ui/core/Box';
import MuiButton from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ConfirmationDialog from './ConfirmDialog';
// import Toast from './Toast';

function LearnerDetails({ learner }) {
  return learner && learner.id && learner.name && learner.username ? (
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
  ) : null;
}

function LearnerActions({ learnerId }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();
  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:4000/learners/${learnerId}`);
      history.push('/');

      // TODO: Handle error gracefully
    } catch (error) {}
  }

  return (
    <MuiBox display="flex" flexDirection="column">
      <MuiButton
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Delete
      </MuiButton>
      <ConfirmationDialog
        message="Are you sure you want to delete this learner?"
        title="Delete Learner"
        handleConfirm={handleDelete}
        handleClose={handleClose}
        open={open}
      />
      {/* <Toast
        message="Successfully deleted user"
        openToast={openToast}
        setOpenToast={handleOpenToast}
        severity="success"
      /> */}
    </MuiBox>
  );
}

export default LearnerDetails;
