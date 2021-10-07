import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import ClassComponent from './components/ClassComponent';
import LifecycleComponent from './components/LifecycleComponent';

function App() {
  return (
    <div className="App">
      <h1>Class Based Components</h1>
      <Router>
        <nav>
          <Link to="/lifecycle">Lifecycle Component</Link>
          <br />
          <Link to="/classcomponent">Class-based Component</Link>
        </nav>
        <Switch>
          <Route path="/lifecycle">
            <LifecycleComponent />
          </Route>
          <Route path="/classcomponent">
             <ClassComponent someProp="oh yeah, i'm just a prop"/>    
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
