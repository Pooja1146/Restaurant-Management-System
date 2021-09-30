import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from "./component/user/HomeComponent";
import AdminUserComponent from "./component/user/AdminUserComponent";
import ListUserComponent from "./component/user/ListUserComponent";
import ListMenuComponent from "./component/menu/ListMenuComponent";
import ListOrderComponent from "./component/order/ListOrderComponent";
import ListTaxComponent from './component/tax/ListTaxComponent';
import AddUserComponent from "./component/user/AddUserComponent";
import AddMenuComponent from "./component/menu/AddMenuComponent";
import AddOrderComponent from "./component/order/AddOrderComponent";
import AddTaxComponent from './component/tax/AddTaxComponent';
import EditUserComponent from "./component/user/EditUserComponent";
import EditMenuComponent from "./component/menu/EditMenuComponent";
import EditTaxComponent from './component/tax/AddTaxComponent';
import WaiterUserComponent from "./component/user/WaiterUserComponent";
import CashierUserComponent from "./component/user/CashierUserComponent";
import HomeHeader from './component/HomeHeader';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
<div>
    
      <div className="container" >
           
          <Router>
          <HomeHeader/>
              <div  > 
               
                  <Switch>
                      <Route path="/logout" exact component={HomeComponent} />
                      {/* <Route path="/admin" component={AdminUserComponent} /> */}
                      <Route path="/getAllUsers" component={ListUserComponent} />
                      <Route path="/getAllMenus" component={ListMenuComponent} />
                      <Route path="/getAllOrders" component={ListOrderComponent} />
                      <Route path="/getAllTaxes" component={ListTaxComponent} />
                      <Route path="/addUser" component={AddUserComponent} />
                      <Route path="/addMenu" component={AddMenuComponent} />
                      <Route path="/addTax" component={AddTaxComponent} />
                      <Route path="/addOrder" component={AddOrderComponent} />
                      <Route path="/editUser" component={EditUserComponent} />
                      <Route path="/editMenu" component={EditMenuComponent} />
                      <Route path="/editTax" component={EditTaxComponent} />
                      {/* <Route path="/waiter" component={WaiterUserComponent} /> */}
                      {/* <Route path="/Cashier" component={CashierUserComponent} /> */}
                  </Switch>
              </div>
          </Router>
      </div>
      </div>
  );
}

export default App;
