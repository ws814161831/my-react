import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators  from '../../store/actions/article';
import { Table } from 'antd'

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        // this.props.dispatch({
        //   type: 'cards/queryList',
        // });
        this.props.initArticlelist()
      }

      columns = [
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
      render() {
        const { articlelist, articleLoading } = this.props;
      
        return (
          <div>
            <Table columns={this.columns} dataSource={articlelist} loading={articleLoading} rowKey="_id" />
          </div>
        );
      }
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

