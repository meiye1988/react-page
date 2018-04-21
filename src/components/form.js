import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button,DatePicker, TimePicker,Radio } from 'antd';
//英文改为中文
import enUS from 'antd/lib/locale-provider/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn')
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sexVal:2,
			confirmDirty: false,
			formData:'',
		}
	}
  handleSubmit=(e)=>{
	e.preventDefault();
	this.props.form.validateFields((err, values) => {
		if (!err) {
		  console.log('Received values of form: ', values);
		  var setFormDatas = `
				用户名：${values.userName}<br>
				密码：${values.passWord}<br>
				生日：${values.birthday.format('YYYY-MM-DD')}<br>
				性别：${values.sex==1?'男':'女'}<br>
				家：${values.home}
		  `
		}
		this.setState({'formData':setFormDatas});
	  });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
	};
	const selectLayout = formItemLayout;
	selectLayout.wrapperCol = {
		xs: { span: 24 },
        sm: { span: 4 },
	}
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
		<React.Fragment>
		<Form onSubmit={this.handleSubmit}>
			<FormItem label="用户名" {...formItemLayout}>
				{getFieldDecorator('userName',{
					rules:[{required:true,message:"请输入用户名"}],
				})(
				<Input prefix={<Icon type="user" style={{fontSize:13}} />} placeholder="用户名" />
				)}
			</FormItem>
			<FormItem label="密码" {...formItemLayout}>
				{getFieldDecorator('passWord',{
					rules:[{required:true,message:"请输入密码"}],
				})(
				<Input type="password" prefix={<Icon type="lock" style={{fontSize:13}} />} placeholder="密码" />
				)}
			</FormItem>
			<FormItem label="生日" {...formItemLayout}>
				{getFieldDecorator('birthday',{
					rules:[{required:true,message:"请输入生日"}],
				})(
					<DatePicker placeholder="" />
				)}
			</FormItem>
			<FormItem label="性别" {...formItemLayout}>	
				{getFieldDecorator('sex',{'initialValue':2})(
					<RadioGroup >
						<Radio value={1}>男</Radio>
						<Radio value={2}>女</Radio>
					</RadioGroup>
				)}
			</FormItem>
			<FormItem label="位置" {...selectLayout}>	
				{getFieldDecorator('home',{'initialValue':'南京'})(
					<Select placeholder="">
					<Option value="南京">南京</Option>
					<Option value="北京">北京</Option>
					</Select>
				)}
			</FormItem>
			<FormItem
			wrapperCol={{sm:{ span: 8, offset: 6 },xs:{span:8,offset:24}}}
			>
				<Button type="primary" htmlType="submit">
					提交
				</Button>
			</FormItem>
        </Form>
		<Row>
			<Col sm={6} xs={24} style={{textAlign:"right"}}>提交信息:</Col>
			<Col sm={8} xs={24}>
				<div dangerouslySetInnerHTML={{__html: this.state.formData?this.state.formData:''}}></div> 
			</Col>
		</Row>
		</React.Fragment>
    );
  }
}
const forms = Form.create()(form);

export default forms;