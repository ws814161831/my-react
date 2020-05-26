import Home from "../view/Home";
import AddArticle from "../view/article/AddArticle";
import ArticleList from "../view/article/ArticleList";
import AddUser from "../view/user/AddUser";
import UserList from "../view/user/UserList";
import FoundList from "../view/class/FoundList";
import Login from "../view/Login";

export default [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/articleList",
    component: ArticleList,
    exact: true,
  },
  {
    path: "/foundList",
    component: FoundList,
    exact: true,
  },
];
