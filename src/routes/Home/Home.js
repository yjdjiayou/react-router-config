import React from 'react';
import {renderRoutes,renderAllRoutes} from "../../utils/route-loader";
import {Route, Switch} from 'react-router-dom';


function Home(props) {
    const routes = renderAllRoutes(props.routes);
    // console.log(routes);
    return (
    <div>
      Home
        <Switch>
            {routes}
        </Switch>
    </div>
  );
}

export default Home;
