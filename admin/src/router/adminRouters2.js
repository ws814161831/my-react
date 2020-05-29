// import Home from "../view/Home";
// import AddArticle from "../view/article/AddArticle";
// import ArticleList from "../view/article/ArticleList";
// import AddUser from "../view/user/AddUser";
// import UserList from "../view/user/UserList";
// import FoundList from "../view/class/FoundList";
// import Layout from "../components/layout";

import React from 'react';
const Home = React.lazy(() => import('../view/Home'));
const AddArticle = React.lazy(() => import('../view/article/AddArticle'));
const ArticleList = React.lazy(() => import('../view/article/ArticleList'));
const AddUser = React.lazy(() => import('../view/user/AddUser'));
const UserList = React.lazy(() => import('../view/user/UserList'));
const FoundList = React.lazy(() => import('../view/class/FoundList'));

/**
 * 此方式和umi-antd-pro比较像：F:\web-project\react-project\react-blog-biaochenxuying\blog-react-admin\config\router.config.js
 * 这里只添加菜单项需要的路由，在Main.js中遍历循环并在<Layout>{child}</Layout>
 *
 *
 */
export default [
  {
    path: "/",
    name: "home",
    icon: "HomeOutlined",
    component: Home,
    exact: true,
    hidden: true,
  },
  {
    path: "/home",
    name: "home",
    icon: "HomeOutlined",
    component: Home,
    exact: true,
  },
  {
    path: "/user",
    name: "用户管理",
    icon: "SettingFilled",
    children: [
      {
        path: "/addUser",
        name: "添加用户",
        icon: "SmileOutlined",
        component: AddUser,
        exact: true,
      },
      {
        path: "/userList",
        name: "用户列表列表",
        icon: "SmileOutlined",
        component: UserList,
        exact: true,
      },
    ],
  },
  {
    path: "/article",
    name: "文章管理",
    icon: "SettingFilled",
    children: [
      {
        path: "/addArticle",
        name: "添加文章",
        icon: "SmileOutlined",
        component: AddArticle,
        exact: true,
      },
      {
        path: "/articleList",
        name: "文章列表",
        icon: "SmileOutlined",
        component: ArticleList,
        exact: true,
      },
    ],
  },
  {
    path: "/found",
    name: "类方式组件",
    icon: "SettingFilled",
    children: [
      {
        path: "/foundList",
        name: "资金列表",
        icon: "SmileOutlined",
        component: FoundList,
        exact: true,
      },
    ],
  },
  {
    path: "/one",
    name: "一级",
    icon: "SettingFilled",
    children: [
      {
        path: "/foundList1",
        name: "二级1",
        icon: "SmileOutlined",
        children: [
          {
            path: "/foundList",
            name: "三级",
            icon: "SmileOutlined",
            component: FoundList,
            exact: true,
          },
        ],
      },
      {
        path: "/foundList2",
        name: "二级2",
        icon: "SmileOutlined",
        component: FoundList,
        exact: true,
      },
    ],
  },
];
