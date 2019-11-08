import React from 'react';
import {renderAllRoutes} from "../../utils/route-loader";
import {Route, Switch} from 'react-router-dom';

function Home(props) {
  return (
    <div>
      Home
      <Switch>
        {/*{renderAllRoutes(props.routes, props.app)}*/}
      </Switch>
    </div>
  );
}

export default Home;
