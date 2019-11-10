import React from 'react';
import styles from './index.less';
import {Route, Switch, Link} from 'react-router-dom';
import {Menu, Layout} from 'antd';

let {Header} = Layout;
let {Item} = Menu;

const NavBar = (props) => {
    const {router: {location}} = props;
    return (
        <Header className={styles.header}>
            <Menu className={styles.menu} mode="horizontal" selectedKeys={location.pathname}>
                <Item key="/home"><Link to="/home">首页</Link></Item>
                <Item key="/user"><Link to="/user">用户管理</Link></Item>
                <Item key="/profile"><Link to="/profile">个人中心</Link></Item>
                <Item key="/register"><Link to="/register">注册</Link></Item>
                <Item key="/login"><Link to="/login">登录</Link></Item>
            </Menu>
        </Header>
    );
};

export default NavBar;
