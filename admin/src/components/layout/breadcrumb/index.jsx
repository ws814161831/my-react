import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import menu from '../../../router/adminRouters2'
import { HomeOutlined } from '@ant-design/icons'

/**
 * 面包屑
*/
function PvBreadcurmb(props) {

  function getMenuBreadcrumb(menu) {
    const list = []
    menu.forEach(item => {
      if (item.children) {
        item.children.forEach(child => {
          list.push({
            pathname: item.path+child.path,
            names: [item.name,child.name]
          })
        })
      }
    })
    return list
  }
  const breadcrumbList = getMenuBreadcrumb(menu)

  console.log(breadcrumbList)
  const breadcrumb = breadcrumbList.find(d => d.pathname === props.selectedKeys[0])
  const breadNames = breadcrumb ? breadcrumb.names : [] 
  const breadPath =breadcrumb ?  breadcrumb.pathname : '/home'
  // const breadcrumbList = list.length > 0 ? [{ path: '/home', name: '首页' }].concat(list) : []
  // console.log(breadNames)
  /**
   *  forEach()方法不会返回执行结果,所以需要定义一个变量返回新数组，没有map方便
   */
  // let arr = []
  return (
    <Breadcrumb style={{ margin: '24px 24px 0' }}>
      <Breadcrumb.Item>
          <Link to={'/home'}>首页</Link>
      </Breadcrumb.Item>
      {breadNames.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {/* { index < breadNames.length - 1 ? <Link to={ breadPath } >{item}</Link> : <span>{item}</span> } */}
          {item}
        </Breadcrumb.Item>
      ))}
      {/* {
       
        breadNames.forEach( item => {
          arr.push(
              <Breadcrumb.Item>
              {item}
            </Breadcrumb.Item>
          )
        })
      }
      {arr} */}
    </Breadcrumb>
  )
}

export default PvBreadcurmb
