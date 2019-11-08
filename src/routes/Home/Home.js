import React from 'react';
import {renderRoutes} from "../../utils/route-loader";
import {Route, Switch} from 'react-router-dom';

function Home(props) {
    console.log(props);
    return (
    <div>
      Home
        {renderRoutes(props.routes)}
    </div>
  );
}

export default Home;
