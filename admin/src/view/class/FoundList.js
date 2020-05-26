import React, { Component } from "react";
import { Table } from "antd";
import http from "../../config/http";
import apiUrl from "../../config/apiUrl";

class FoundList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: false,
    };
  }
  componentDidMount() {
    http
      .get(apiUrl + "/api/profile")
      .then((res) => {
        console.log(res.data);
        this.setState({
          list: res.data,
        });
      })
      .catch((error) => {
        console.log("axios 获取数据失败" + error);
      });
  }
  columns = [
    {
      title: "名称",
      dataIndex: "describe",
    },
    {
      title: "金额",
      dataIndex: "cash",
    },
    {
      title: "描述",
      dataIndex: "remark",
    },
    {
      title: "日期",
      dataIndex: "date",
    },
  ];
  render() {
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={this.state.list}
          loading={this.state.loading}
          rowKey="_id"
        />
      </div>
    );
  }
}

export default FoundList;