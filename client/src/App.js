import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <Router>
      <Route path='/' component={Navbar} />
      <Route path='/' component={Modal} />
      <Route exact path='/' component={LandingPage} />
    </Router>
  );
}

export default App;
