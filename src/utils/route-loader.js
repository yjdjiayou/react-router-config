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

export function renderAllRoutes(routesConfig, extraProps) {
    let routes = renderRoutes(routesConfig, extraProps);
    let redirect = renderRedirect(routesConfig);
    return [...routes, redirect];
}

export function renderRoutes(routesConfig, extraProps = {}) {
    return routesConfig.map((item, index) => {
        const {path, exact,  isProtected, isDynamic, component: Component, routes = []} = item;

        /*if (isRedirect) {
            // 看 Switch 的源码，就知道为什么这里不能这样写了
            // Switch 里面只能放 Route ，不能放别的，哪怕是 React.Fragment
            return (<React.Fragment key={path} path={path} exact={exact}>
                <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={props => {
                        return <Component {...props} {...extraProps} routes={routes}/>;
                    }}
                />
                <Redirect key={path + 'redirect'} to={path}/>
            </React.Fragment>);
        }*/
        return (<Route
            key={path}
            path={path}
            exact={exact}
            component={props => {
                if (isDynamic) {
                    return <React.Suspense fallback="正在加载中...">
                        <Component {...props} {...extraProps} routes={routes}/>
                    </React.Suspense>
                }
                return <Component {...props} {...extraProps} routes={routes}/>;
            }}
        />);
    })

}

export function renderRedirect(routes) {
    let {path} = routes.find(route => route.isRedirect) || routes[0];
    return <Redirect key={path + '-redirect'} to={path}/>
}


