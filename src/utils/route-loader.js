import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {variableTypeUtil} from "./variable-type-util";

/**
 default: "模块内容"
 __esModule: true
 */
// 如果说引入的是一个 esModule 的话，
// 它会有一个 __esModule=true 的键值对——表示 ES6 模块；
// 有一个 default: "模块内容" 的键值对——表示 该模块的内容


export function renderAllRoutes() {
    console.log(666);
}


export function renderRoutes(routesConfig, extraProps = {}) {
    return (<Switch>
        {
            routesConfig.map((item, index) => {
                const {path, exact, isRedirect, isProtected, isDynamic, component: Component, routes = []} = item;
                if (variableTypeUtil.isFunction(Component)) {

                }
                if (isRedirect) {
                    return (<>
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            component={props => {
                                return <Component {...props} {...extraProps} routes={routes}/>;
                            }}
                        />
                        <Redirect key={path + 'redirect'} to={path}/>
                    </>);
                }
                return (<Route
                    key={path}
                    path={path}
                    exact={exact}
                    component={props => {
                        return <Component {...props} {...extraProps} routes={routes}/>;
                    }}
                />);
            })
        }
    </Switch>);

}



