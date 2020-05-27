import Home from "../view/Home";
import AddArticle from "../view/article/AddArticle";
import ArticleList from "../view/article/ArticleList";
import AddUser from "../view/user/AddUser";
import UserList from "../view/user/UserList";
import FoundList from "../view/class/FoundList";
import Layout from "../components/layout";
/**
 * 注意：swtich路由最外层path需要不一样，要不然渲染出来的菜单，子路由切换时没有效果
 * 
 * 点击切换其他菜单时，自动关闭了：是因为这里的路由遍历，嵌套多层？
 *     -->原因：相当于在layout中两个根路径遍历循环，一般一个菜单只有一个，所以点击切换的时候在不同根目录下会关闭其他路由，（https://preview.pro.ant.design/）也有这个问题
 *              <Route path="/"  component={BasicLayout} />
                <Route path="/a"  component={BasicLayout} />
 * 
 */
export default [

  {
    path: "/admin",
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
        },
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
        },
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
