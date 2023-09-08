import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
       
          <HeaderComponent />
          <div className="container">
            
            <Switch>
              <Route exact path="/"   component={ListEmployeeComponent} />
              <Route path="/employees" component={ListEmployeeComponent} />
           {/* {step 1} */}
           
              <Route path="/add-employee/:id" component={CreateEmployeeComponent} />
              {/* <Route path="/update-employee/:id" component ={UpdateEmployeeComponent} /> */}
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
