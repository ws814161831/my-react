import React, { useState, useEffect } from 'react'

import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'

import { Layout } from 'antd'
import AdminSideBar from './sidebar'
// import AdminHeader from './header'
// import Breadcrumb from '@/components/Breadcrumb'

const { Sider, Header, Content, Footer } = Layout

const AdminLayout = props => {
  const location = useLocation()
  console.log(location)
  return (


      <Layout>
        <Sider width={256} style={{ minHeight: "100vh" }}>
          <div
            style={{
              height: "32px",
              background: "rgba(255,255,255,.2)",
              margin: "16px",
            }}
          />
          <AdminSideBar selectedKeys={[location.pathname]} />
        </Sider>

        <Layout className='admin-content-wrap'>
          <Header
            style={{ background: "#fff", textAlign: "center", padding: 0 }}
          >
            Header
          </Header>
          {/* <Breadcrumb /> */}
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
