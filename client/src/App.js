import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import Modal from './components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './actions/auth';
import Spinner from './components/Spinner/Spinner';
import SpinningModal from './components/Modal/SpinningModal';
import Dashboard from './pages/Dashboard/Dashboard';
import TeacherPage from './pages/Teacher/TeacherPage';
import ProtectedRoute from './routing/ProtectedRoute';
import FourOFour from './pages/FourOFour/FourOFour';
import CombineLessons from './pages/AllLessons/AllLessonsParent';
import Notes from './components/LessonComponents/Notes/Notes';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line
  }, []);

  if (auth.loading === true) return <Spinner />;
  return (
    <Router>
      {/*  */}
      <Route path='/'>
        <Navbar />
      </Route>
      <Route path='/'>
        <Modal />
      </Route>
      <Route path='/'>
        <SpinningModal />
      </Route>
      {/*  */}
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/confirm/:token'>
          <LandingPage />
        </Route>
        <ProtectedRoute roles={['teacher', 'qeqwe']} exact path='/dashboard'>
          <Dashboard />
        </ProtectedRoute>
        <Route exact path='/teacher'>
          <TeacherPage />
        </Route>
        <Route path='/lessons'>
          <CombineLessons />
        </Route>
        <Route path='/notes'>
          <Notes />
        </Route>
        <Route path='*'>
          <FourOFour />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
