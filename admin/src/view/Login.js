import React from "react";
import "antd/dist/antd.css";
import "../style/css/login.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {connect} from 'react-redux'  //引入连接器
import { loginUser } from '../store/actions/user';

const Login = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // props.history.push("/index");
    props.loginUser(values,props.history);
  };

  // let { login } = props;


  return (
    <div className="login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        {/* <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/">
            忘记密码
          </a>
        </Form.Item> */}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          或 <a href="/">注册!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

//需要渲染什么数据
// 将store里面的state映射给当前组件，成为组件的props
// 只要 Redux store 发生改变，mapStateToProps 函数就会被调用。该
// 回调函数必须返回一个纯对象，这个对象会与组件的 props 合并
const stateToProps = (state) => {
  return {
      // inputValue: state.inputValue,
      // list: state.list
  }
}

//需要触发什么行为
// 将store.dispatch()方法映射到props上
// const dispatchToProps = (dispatch) => {
//   return {
//     login(values,history) {
//         console.log(values)
//         console.log(history)
//         dispatch(loginUser(values))
//       },
//   }
// }

export default connect(stateToProps,{loginUser})(Login);
