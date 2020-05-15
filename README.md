# my-react
后台：react+antd，服务端：node+koa+mysql


# 初始化目录
cd my-react
# 创建package.json 启动前后端项目使用
npm init    
# 创建.gitignore文件
/admin_app/node_modules
/admin_app/yarn.lock
# 创建后台管理
create-react-app admin
# 启动本地服务
cd admin
yarn start  默认端口
yarn dev    自定义3005端口




# antd使用
从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons。

# 路由设计思路
1.配置一个路由文件（只需要设计这一个配置文件就好了）
    路径
    组件
2.在使用的侧边栏展示菜单
    根据路由配置文件遍历循环，在layout组件中展示

