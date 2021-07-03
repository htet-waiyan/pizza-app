import React from 'react';
import Home from './pages/Home/index';
import FooterNav from './components/FooterNav';
import HeaderNav from './components/HeaderNav';
import {
  Route, Switch
} from 'react-router-dom';
import ProfilePage from './pages/Profile';
import BillListPage from './pages/Bill/List';
import GroupPage from './pages/Group/List';
import GroupForm from './components/Group/Form';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
              <Switch>
                <Route path="/bill"><BillListPage /></Route>
                <Route path="/profile"><ProfilePage /></Route>
                <Route path="/groups"><GroupPage /></Route>
                <Route path="/newgroup"><GroupForm /></Route>"
                <Route path="/"><Home /></Route>
              </Switch>
              {/* <BillList /> */}
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}

export default App;
