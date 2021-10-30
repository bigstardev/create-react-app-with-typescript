import * as React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import {Layout} from 'components';
import {Home, Shop, Cart, Settings} from '../Pages';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Layout>
    </Router>
  );
}
