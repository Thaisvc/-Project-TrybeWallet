import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import WalletFormEditar from './pages/WalletFormEditar';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/Editar/:id" component={ WalletFormEditar } />
        <Route path="/carteira" component={ Wallet } />
        <Route path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
