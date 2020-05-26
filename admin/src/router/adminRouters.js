import Home from "../view/Home";
import AddArticle from "../view/article/AddArticle";
import ArticleList from "../view/article/ArticleList";
import AddUser from "../view/user/AddUser";
import UserList from "../view/user/UserList";
import FoundList from "../view/class/FoundList";
import Layout from "../components/layout";
/**
 * 注意：swtich路由最外层path需要不一样，要不然渲染出来的菜单，子路由切换时没有效果
 */
export default [
  {
    path: "/home",
    name: '首页',
    icon: 'home',
    hidden: true,
    component: Layout,
    children: [
        {
            path: "/home",
            name: 'home',
            icon: 'switcher',
            component: Home,
            exact: true,
        },
    ]
  },
  {
    path: '/user',
    name: '用户管理',
    component: Layout,
    children: [
        {
            path: "/addUser",
            name: '添加用户',
            icon: 'switcher',
            component: AddUser,
            exact: true,
        },
        {
            path: "/userList",
            name: '用户列表列表',
            icon: 'switcher',
            component: UserList,
            exact: true,
        }
    ]
  },
  {
    path: '/article',
    name: '文章管理',
    component: Layout,
    children: [
        {
            path: "/addArticle",
            name: '添加文章',
            icon: 'switcher',
            component: AddArticle,
            exact: true,
        },
        {
            path: "/articleList",
            name: '文章列表',
            icon: 'switcher',
            component: ArticleList,
            exact: true,
        }
    ]
  },
  {
    path: '/found',
    name: '资金管理',
    component: Layout,
    children: [
        {
            path: "/foundList",
            name: '资金列表',
            icon: 'switcher',
            component: FoundList,
            exact: true,
        }
    ]
  }

];
