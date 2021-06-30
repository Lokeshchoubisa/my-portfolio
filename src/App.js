import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Practice from './Pages/Practice';
function App() {
  return (
    <div className="App">

    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/resume" exact component={Resume}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/practice" exact component={Practice}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
