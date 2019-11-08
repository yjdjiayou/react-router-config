import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {ConnectedRouter} from 'connected-react-router';
import history from './store/history';


import {renderRoutes} from "./utils/route-loader";
import routesConfig from "./routesConfig";


function App() {
  return (
      <Provider store={store}>
          <ConnectedRouter history={history}>
              {renderRoutes(routesConfig)}
          </ConnectedRouter>
      </Provider>
  );
}

export default App;
