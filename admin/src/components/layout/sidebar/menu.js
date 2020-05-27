const menu = [
  // {
  //   path: '/admin',
  //   icon: 'home',
  //   name: '首页'
  // },
  // {
  //   path: '/admin/article',
  //   icon: 'switcher',
  //   name: '文章',
  //   children: [
  //     {
  //       path: '/admin/article/manager',
  //       icon: 'folder',
  //       name: '管理'
  //     },
  //     {
  //       path: '/admin/article/add',
  //       icon: 'edit',
  //       name: '新增'
  //     }
  //   ]
  // },
  // {
  //   path: '/admin/user',
  //   icon: 'user',
  //   name: '用户管理'
  // }

  {
    path: "/admin",
    name: '首页',
    icon: 'home',
    children: [
        {
            path: "/admin/home",
            name: 'home',
            icon: 'switcher',
            exact: true,
        },
    ]
  },
  {
    path: '/admin/article',
    name: '文章管理',
    children: [
        {
            path: "/admin/addArticle",
            name: 'addArticle',
            icon: 'switcher',
            exact: true,
        },
        {
            path: "/admin/articleList",
            name: 'articleList',
            icon: 'switcher',
            exact: true,
        }
    ]
  },
  {
    path: '/admin/found',
    name: '资金管理',
    children: [
        {
            path: "/admin/foundList",
            name: 'foundList',
            icon: 'switcher',
            exact: true,
        }
    ]
  }

]

export default menu
