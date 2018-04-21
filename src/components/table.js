import React from 'react'
import { Modal,Table, Button } from 'antd';
class table extends React.Component{
	constructor(props) {
		super(props);
		this.deleteSource = this.deleteSource.bind(this);
		this.columns = [{
			title: 'Name',
			dataIndex: 'name',
		  }, {
			title: 'Age',
			dataIndex: 'age',
		  }, {
			title: 'Address',
			dataIndex: 'address',
		  }, {
			title: '操作',
			dataIndex: 'operation',
			key: 'operation',
			render:(text,record,index)=>{
				return 	<Button type="primary" onClick={() => this.deleteSource(record.key)}>删除</Button>
			}
		  }];
		  this.state = {
			selectedRowKeys: [],  // Check here to configure the default column
			loading: false,
			visible:false
		  };
		this.state.data = [];
		  for (let i = 0; i < 46; i++) {
			this.state.data.push({
			  key: i,
			  name: `Edward King ${i}`,
			  age: 32,
			  address: `London, Park Lane no. ${i}`,
			});
		  }
		this.delIndex = 0;
	}
	
	
	  start = () => {
		this.setState({ loading: true });
		// ajax request after empty completing
		setTimeout(() => {
		  this.setState({
			selectedRowKeys: [],
			loading: false,
		  });
		}, 1000);
	  };
	  deleteSource(index){
		this.delIndex = index;
		  this.showModal();
	  }
	  onSelectChange = (selectedRowKeys) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({ selectedRowKeys });
	  }
	  showModal = () => {
		  
		this.setState({
		  visible: true,
		});
	  }
	  handleOk = (e) => {
		console.log(this.delIndex);
		let list = this.state.data;
		list.splice(list.findIndex(item=>item.key==this.delIndex),1);
		this.setState({
			data:list,
		  visible: false,
		});
	  }
	  handleCancel = (e) => {;
		this.setState({
		  visible: false,
		});
	  }
	render(){
		const { loading, selectedRowKeys } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		  };
		const hasSelected = selectedRowKeys.length > 0;
		return (
			<div>
				
			<div style={{ marginBottom: 16 }}>
			<Button type="primary" onClick={this.start}
				disabled={!hasSelected} loading={loading}
			>Reload</Button>
			<span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
			</div>
			<Modal title="询问" visible={this.state.visible}
					okText="确认" cancelText="取消" onOk={this.handleOk} onCancel={this.handleCancel}
					>
				<p>您确定要删除该一行吗</p>
				</Modal>
			<Table  rowSelection={rowSelection} columns={this.columns} dataSource={this.state.data} />
		</div>
		)
	}

}

  export default table;