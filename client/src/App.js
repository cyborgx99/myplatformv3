import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Modal from './components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './actions/auth';
import Spinner from './components/Spinner/Spinner';
import SpinningModal from './components/Modal/SpinningModal';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

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
      <Route exact path='/confirm/:token' component={LandingPage} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Router>
  );
};

export default App;
