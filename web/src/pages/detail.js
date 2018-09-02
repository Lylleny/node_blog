import  '../styles/style/markdown.css';

import React ,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import {parseQueryString} from '../utils/utils';
import Http from '../utils/Http';
import {Layout} from 'antd';
const {Content} = Layout;

class detail extends Component {
    constructor(props){
        super(props);
        this.state={
            content:''
        }
    }
    componentDidMount() {
        const query = parseQueryString();

        Http.Get('/api/getArticle?id='+query.id,(re)=>{
            console.log(re)
            this.setState({
                content:re.data.content
            })
        },(err)=>{
            console.log(err)
        })

    }

    render(){
        return(
            <Layout style={{padding:20}}>
                <Content style = {{backgroundColor:'#fff',padding:20}}>
                    <div>
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: this.state.content }} />

                    </div>

                </Content>
            </Layout>

        )
    }
}


export default detail;
