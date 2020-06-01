import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

// import { loginout } from '@/redux/user/actions'
import { logoutUser } from '../../../store/actions/user';
// import { connect } from 'react-redux'  //引入连接器


import { Dropdown, Menu,  Avatar } from 'antd'
// import logo from '@/assets/images/avatar.jpeg'
import { DownOutlined } from '@ant-design/icons'


function AdminHeader(props) {
  const dispatch = useDispatch()
  const history = useHistory()

  const userInfo = useSelector(state => state.user.user)
  console.log(userInfo)
  const menu = (
    <Menu className='menu'>
      <Menu.Item>
        <span onClick={e => history.push('/home')}>
          返回主页
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={e => {
            dispatch(logoutUser())
            history.push('/')
          }}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <div className='admin-header'>
        {/* <img src={logo} alt='pvmed' /> */}
        <span className='header-title'>后台管理系统</span>
        <div className="header-right">
          <Dropdown overlay={menu} className='header-dropdown'>
            <a className='ant-dropdown-link'>
            <img src={userInfo.avatar} alt='pvmed' />
              {userInfo.name} 
              <DownOutlined />
            </a>
          </Dropdown>
        </div>

      </div>
    </>
  )
}

export default AdminHeader
