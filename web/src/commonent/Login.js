import  '../styles/login.css';

import {Button,Checkbox,Form,Icon,Input} from 'antd';
import React ,{Component} from 'react';

const FormItem = Form.Item;

class LoginForm extends Component{


    render(){

        const {getFieldDecorator} = this.props.form;
        return(
            <Form className = 'login-form'>

                <FormItem>
                    {getFieldDecorator('tel',{
                        rules:[
                            {required:true,message:'电话不能为空'}
                        ]
                    })(
                        <Input prefix={<Icon type = 'user' style ={{color:'#ccc'}} />} placeholder = '电话号码'/>
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('nick',{
                        rules:[
                            {required:true,message:'密码不能为空'}
                        ]
                    })(
                        <Input prefix={<Icon type = 'lock' style ={{color:'#ccc'}} />} placeholder = '密码' type='text'/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember',{
                        valuePropName:'checked',
                        initialValue:true
                    })(
                        <Checkbox>记住账号</Checkbox>
                    )}
                    <Button className="login-form-button" type='primary' htmlType='submit' style = {{width:'100%'}}>登录</Button>
                </FormItem>

            </Form>
        )
    }

}

export default LoginForm = Form.create()(LoginForm);