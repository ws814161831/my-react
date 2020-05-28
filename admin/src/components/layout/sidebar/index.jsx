import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import  * as Icon from '@ant-design/icons';
// import { Icon } from '@ant-design/compatible';//兼容老版本，不推荐使用
// import menu from './menu'
import menu from '../../../router/adminRouters2'
const SubMenu = Menu.SubMenu

function AdminSidebar(props) {
  function getMenuOpenKeys(menu) {
    const list = []
    menu.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          list.push({
            pathname: item.path+child.path,
            openKey: item.path
          })
        })
      }
    })
    return list
  }
  const menuMenuOpenKeys = getMenuOpenKeys(menu)

  // 菜单渲染
  function renderMenu(list) {
    const renderRoute = (item,routeContextPath) => {
      let newContextPath = item.path
      ? `${routeContextPath}/${item.path}`
      : routeContextPath;
    newContextPath = newContextPath.replace(/\/+/g, "/");
      if (item.hidden) return null
      if (item.children) {
        return (
          <SubMenu
            key={newContextPath}
            title={
              <span>
                {
                  React.createElement(
                    Icon[item.icon],
                    {style:{ fontSize: '16px', color: '#08c' }}
                  )
                }
                {/* {item.icon && <Icon type={item.icon} />} */}
                <span>{item.name}</span>
              </span>
            }>
            {item.children.map(r => renderRoute(r,newContextPath))}
          </SubMenu>
        )
      } else {
        return (
          item.name && (
            <Menu.Item key={newContextPath}>
              <NavLink to={newContextPath}>
              {
                  React.createElement(
                    Icon[item.icon],
                    {style:{ fontSize: '16px', color: '#08c' }}
                  )
                }
                {/* {item.icon && <Icon type={item.icon} />} */}
                <span>{item.name}</span>
              </NavLink>
            </Menu.Item>
          )
        )
      }
    }

    return list.map(l => renderRoute(l, '/'))
  }

  const target = menuMenuOpenKeys.find(d => d.pathname === props.selectedKeys[0])
  const openKeys = target ? [target.openKey] : []
  // console.log(menuMenuOpenKeys)
  // console.log(target)
  // console.log(props)
  return (
    <Menu
      style={{padding: "16px 0px"}}
      defaultOpenKeys={openKeys}
      // defaultSelectedKeys={props.selectedKeys}
      selectedKeys={props.selectedKeys}
      theme="dark"
      mode='inline'
      >
      {renderMenu(menu)}
    </Menu>
  )
}

export default withRouter(AdminSidebar)
