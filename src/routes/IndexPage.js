import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import {Layout} from 'antd';
import './IndexPage.css';
import {renderAllRoutes, renderRoutes} from '../utils/route-loader';
import routesConfig from "../routesConfig";

const {Content} = Layout;

function mapStateToProps(state) {
    return state;
}

function IndexPage(props) {
    console.log(props);
    return (
        <Layout>
            <NavBar {...props}/>
            <Content>
                {/*<Switch>*/}
                {/*    {renderRoutes(routesConfig)}*/}
                {/*</Switch>*/}
            </Content>
        </Layout>
    );
}

export default connect(mapStateToProps)(IndexPage)

