import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators  from '../../store/actions/article';
import { Table, Button } from 'antd'

/**
 * react-redux+无状态组件
 */
const ArticleList = (props) => {

      let { articlelist, articleLoading, initArticlelist } = props;
      /**
       * 因为没有生命周期，所以函数式组件不能初始化数据，会有bug，如果需要初始化数据，需要用类组件或者hooks
       */
      function onSearch() {
        initArticlelist()
      }

      let columns = [
        {
          title: '名称',
          dataIndex: 'describe',
        },{
            title: '金额',
            dataIndex: 'cash'
        },
        {
          title: '描述',
          dataIndex: 'remark',
        },
        {
          title: '日期',
          dataIndex: 'date',
        },
      ]; 
      return (
        <div>
          <Button type='primary' onClick={onSearch} style={{ marginRight: 8 }}>检索</Button>
          <Table columns={columns} dataSource={articlelist} loading={articleLoading} rowKey="_id" />
        </div>
      );
}
 
const mapStateToProps = (state) => {
    return {
        articleLoading: state.article.loading,
        articlelist: state.article.list
        
    }
  }

const mapDispatchToProps = (dispatch) => {
return {
    initArticlelist() {
        const action = actionCreators.getPosts();
        dispatch(action);
      }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);

