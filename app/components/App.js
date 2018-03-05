var React = require("react");
var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require("./Nav");
var Home = require("./Home");
import Header from './Header'
import Restaurant from './Restaurant'

class App extends React.Component {
  render() {
    return (
     
      <Router>
        <div className="container">
        <Header />
          <Switch>
            <Route exact path="/" component={Restaurant} />
            <Route render={function (){
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
