import logo from './logo.svg';
import './App.css';

import { Button } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Route path="/" exact component={Home} />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
