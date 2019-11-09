import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import {Layout} from 'antd';
import './IndexPage.css';
import {renderAllRoutes, renderRoutes} from '../utils/route-loader';

const {Content} = Layout;

function mapStateToProps(state) {
    return state;
}

function IndexPage(props) {
    const routes = renderAllRoutes(props.routes);
    // console.log(routes);
    return (
        <Layout>
            <NavBar {...props}/>
            <Content>
                <Switch>
                    {routes}
                </Switch>
            </Content>
        </Layout>
    );
}

export default connect(mapStateToProps)(IndexPage)

