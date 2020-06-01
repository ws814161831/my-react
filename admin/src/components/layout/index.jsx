import React from 'react'

import { useLocation, Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';
import { Layout } from 'antd'
import AdminSideBar from './sidebar'
import AdminHeader from './header'
// import Breadcrumb from '@/components/Breadcrumb'
import Breadcrumb from './breadcrumb'
const { Sider, Header, Content, Footer } = Layout

/**
 * router 将在这几个地方为您提供一个 location 对象：
      Route component as this.props.location
      Route render as ({ location }) => ()
      Route children as ({ location }) => ()
      withRouter as this.props.location
 */

const AdminLayout = props => {
  const location = useLocation()
  console.log(location)
  console.log(props.location)
  return (
      <Layout>
        <Sider width={256} style={{ minHeight: "100vh" }}>
          {/* <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px",
            }}
          /> */}
          <div className='logo' id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>Ant Design</h1>
          </Link>
        </div>
          <AdminSideBar selectedKeys={[location.pathname]} />
        </Sider>

        <Layout className='admin-content-wrap'>
          <Header style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            <AdminHeader />
          </Header>
          <Breadcrumb selectedKeys={[location.pathname]} />
          <Content className='admin-content' style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>

      </Layout>

  )
}

export default AdminLayout
