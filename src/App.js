import './App.css';
import QuestionList from './components/QuestionsList';
import NavBar from './components/NavBar';
import EnsureAuth from './components/EnsureAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleInitialData } from './actions/shared';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Question from './components/Question';
import NotFound from './components/NotFound';
import EnsureQuestion from './components/EnsureQuestion';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  return (
    <div className="App">
      <div>
        <EnsureAuth>
          <Router>
            <NavBar />
            <Routes >
              <Route index element={<QuestionList />} />
              <Route  path="add" element={<NewQuestion />} />
              <Route  path="LeaderBoard" element={<LeaderBoard />} />
              <Route  path="questions/:question_id" element={<EnsureQuestion><Question/></EnsureQuestion>}/>
              <Route path="404" element={<NotFound/>}/>
            </Routes>
          </Router>
        </EnsureAuth>

      </div>
    </div>
  );
}

export default App;

