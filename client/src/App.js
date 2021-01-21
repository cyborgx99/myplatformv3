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
import FourOFour from './pages/FourOFour';

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
      <Route path='/' component={Navbar} />
      <Route path='/' component={Modal} />
      <Route path='/' component={SpinningModal} />
      <Route exact path='/' component={LandingPage} />
      <Switch>
        <Route exact path='/confirm/:token' component={LandingPage} />
        <ProtectedRoute
          roles={['teacher2', 'qeqwe']}
          studentId='6001cb3660727627d8737b09'
          exact
          path='/dashboard'
          component={Dashboard}
        />
        <Route exact path='/teacher' component={TeacherPage} />
        <Route path='*' component={FourOFour} />
      </Switch>
    </Router>
  );
};

export default App;
