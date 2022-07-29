import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <>
        <div>Header</div>
        <Route path="/" component={ Login } />
      </>
    );
  }
}

export default App;
