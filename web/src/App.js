import LearnersPage from './components/LearnersPage'
import LearnerPage from './components/LearnerPage'
import NotFoundPage from './components/NotFoundPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LearnersPage />
        </Route>
        <Route path="/learners/:learnerId">
          <LearnerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
