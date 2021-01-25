import React from 'react';
import LearnerDetails from './LearnerDetails';
import LearnerProgress from './LearnerProgress';
import MuiBox from '@material-ui/core/Box';
import MuiContainer from '@material-ui/core/Container';
import MuiDivider from '@material-ui/core/Divider';
import MuiPaper from '@material-ui/core/Paper';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function LearnerPage() {
  const [learner, setLearner] = React.useState([]);
  const [learnerProgress, setLearnerProgress] = React.useState([]);
  const { learnerId } = useParams();
  React.useEffect(() => {
    const getLearner = async () => {
      if (learnerId) {
        const learner = await axios.get(
          `http://localhost:4000/learners/${learnerId}`
        );
        const learnerProgress = await axios.get(
          `http://localhost:4000/learners/${learnerId}/progress`
        );
        setLearner(learner.data);
        setLearnerProgress(learnerProgress.data);
      }
    };
    getLearner();
  }, [learnerId]);
  return (
    <MuiContainer component="main" mt={4}>
      <MuiPaper>
        <MuiBox mt={4}>
          <LearnerDetails learner={learner[0]} />
          <MuiDivider light />
          <LearnerProgress progress={learnerProgress} />
        </MuiBox>
      </MuiPaper>
    </MuiContainer>
  );
}

export default LearnerPage;
