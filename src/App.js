import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Volunteer from "./components/Volunteer/Volunteer";
import Login from "./components/Login/Login";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/volunteer">
            <Volunteer></Volunteer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/detail/:serviceId">
            <Detail></Detail>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
