import Navbar from './Navbar';
import Hobbies from './Hobbies';
import Home from './Home';
import Contact from './Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Hobbydetails';
import Create from './Create';
import NotFound from './404page';


function App() {
  const heading = 'My First React Application';


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="head">
          <h1>{heading}</h1>
        </div>
        <Switch>
          <Route exact path="/hobbies">
            <Hobbies />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
