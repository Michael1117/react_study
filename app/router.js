import React from 'react';
//import { ConnectedRouter } from 'react-router-redux';
import {routerRedux, Route, Switch} from 'dva/router'
import App from './App'

const { ConnectedRouter } = routerRedux;

const RouteConfig = ({history}) => (
    <ConnectedRouter history={history}>
        <Route path="/" component={App}></Route>
    </ConnectedRouter>

)

/* const Products = (props) => (
  <h2>List of Products</h2>
);
 */
export default RouteConfig;