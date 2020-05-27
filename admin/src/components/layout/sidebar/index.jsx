import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import menu from './menu'
// import menu from '../../../router/adminRouters'
const SubMenu = Menu.SubMenu

function AdminSidebar(props) {
  function getMenuOpenKeys(menu) {
    const list = []
    menu.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          list.push({
            pathname: child.path,
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
    const renderRoute = (item) => {
      if (item.hidden) return null
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                {/* {item.icon && <Icon type={item.icon} />} */}
                <span>{item.name}</span>
              </span>
            }>
            {item.children.map(r => renderRoute(r))}
          </SubMenu>
        )
      } else {
        return (
          item.name && (
            <Menu.Item key={item.path}>
              <NavLink to={item.path}>
                {/* {item.icon && <Icon type={item.icon} />} */}
                <span>{item.name}</span>
              </NavLink>
            </Menu.Item>
          )
        )
      }
    }

    return list.map(l => renderRoute(l))
  }

  const target = menuMenuOpenKeys.find(d => d.pathname === props.selectedKeys[0])
  const openKeys = target ? [target.openKey] : []
  // console.log(menuMenuOpenKeys)
  // console.log(target)
  // console.log(props)
  return (
    <Menu
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
