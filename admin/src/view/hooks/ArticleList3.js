import React, { useState, useEffect } from "react";
import http from "../../config/http";
import apiUrl from "../../config/apiUrl";
import { Table } from "antd";

const ArticleList = (props) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  //得到文章列表
  const getList = () => {
    setLoading(true);
    http
      .get(apiUrl + "/api/profile")
      .then((res) => {
        setLoading(false);
        setList(res.data);
      })
      .catch((error) => {
        console.log("axios 获取数据失败" + error);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  let columns = [
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
  return (
    <div>
      <Table
        columns={columns}
        dataSource={list}
        loading={loading}
        rowKey="_id"
      />
    </div>
  );
};

export default ArticleList;
