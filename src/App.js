import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'
function App() {
  var menu = routes.map((route, index) => {
    return <Route path={route.path} exact={route.exact} component={route.main} key={index}></Route>
  })
  return (

    <BrowserRouter>
      <div>
        <Menu></Menu>
        <div className="container">
          <div className="row">
           
          </div>
        </div>


        <Switch>
          {menu}
        </Switch>

      </div></BrowserRouter>



  );
}

export default App;
