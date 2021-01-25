import React from 'react';
import Heading from './Heading';
import LearnersTable from './LearnersTable';
import MuiBox from '@material-ui/core/Box';
import MuiContainer from '@material-ui/core/Container';
import axios from 'axios';

function LearnerListPage() {
  const [learners, setLearners] = React.useState([]);
  React.useEffect(() => {
    const getLearners = async () => {
      const results = await axios.get('http://localhost:4000/learners');
      setLearners(results.data);
    };
    getLearners();
  }, []);
  return (
    <MuiContainer component="main" mt={4}>
      <MuiBox display="flex" justifyContent="center" mt={4}>
        <Heading>Learner Dashboard</Heading>
      </MuiBox>
      <MuiBox mt={4}>
        <LearnersTable learners={learners} />
      </MuiBox>
    </MuiContainer>
  );
}

export default LearnerListPage;
