import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { PieChartOutlined, BarsOutlined } from "@ant-design/icons";

import Home from "../../view/Home";
import AddArticle from "../../view/article/AddArticle";
import ArticleList from "../../view/article/ArticleList";
import AddUser from "../../view/user/AddUser";
import UserList from "../../view/user/UserList";

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px",
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/dashboard">
                <PieChartOutlined />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <BarsOutlined />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/user/addUser">添加用户</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/user/userList">用户列表</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <BarsOutlined />
                  <span>文章管理</span>
                </span>
              }
            >
              <Menu.Item key="4">
                <Link to="/article/addArticle">添加文章</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/article/articleList">文章列表</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <div>
                <Route path="/" exact component={Home} />
                <Route path="/user/addUser" exact component={AddUser} />
                <Route path="/user/userList" exact component={UserList} />
                <Route
                  path="/article/addArticle"
                  exact
                  component={AddArticle}
                />
                <Route
                  path="/article/articleList"
                  exact
                  component={ArticleList}
                />
                
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
