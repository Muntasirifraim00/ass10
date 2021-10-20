import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import Booking from './components/booking/Booking';
import Topyogatrainer from './components/Topyogatrainer/Topyogatrainer';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
             <Login></Login>
          </Route>
          <Route path="/workouts">
            <Services></Services>
          </Route>
          <Route path="/Topyogatrainer">
            <Topyogatrainer></Topyogatrainer>
          </Route>
          <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
