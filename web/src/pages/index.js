import '../styles/style/animate.css';
import React ,{Component} from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import {Layout,Card} from 'antd';
import Http from '../utils/Http';

const {Content,Footer} = Layout;
class index extends Component {

    constructor(props){
        super(props);
        this.state = {
            lists:[]
        }
    }

    componentDidMount(){
        console.log('ddfdsfsd');
        Http.Get('/api/getArticles?pageSize=10&pageNum=1',(re)=>{
            console.log(re);
            this.setState({
                lists:re.data
            })

        },(er)=>{
            console.log(er);

        })
    }

     randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
    render(){

        console.log(this.state.lists)
        var                             photo = `../images/photos/${this.randomNum(1, 20)}.jpg`;
        var  src ="'"+photo+"'";

        console.log(src);
        return(
            <Layout style={{padding:20}}>
                <Content style = {{justifyContent:'center',alignItems:'center',paddingLeft:20,paddingRight:20}}>

                    {this.state.lists.map((item,index)=>{
                        return(
                            <Card key={item.id}
                                className="item"
                                 style={{
                                     animation: `fadeInUp 1s ease ${index * 0.1}s 1 normal forwards running`,
                                     marginTop:10,
                                     padding:10,
                                 }}
                            >
                               <div className="top" style={{flexDirection:'row',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                                   <img src={require('../images/photos/12.jpg')} width={60} height={60}></img>
                                   <div style={{marginLeft:20}}>
                                       <div>{item.title}</div>
                                       <div>作者：{item.author}   <span style={{marginLeft:15}}>{item.date} </span></div>
                                   </div>
                               </div>
                                <div className="content" style={{marginTop:30}}>{item.desc}</div>
                                <div className="end" style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center',marginTop:30}}>
                                    <Link to={'/app/detail?id=' + item.id}>
                                        <text>阅读全文     </text>

                                        <img src={require('../images/arrow.png')} width={20} height={20}></img>

                                    </Link>
                                </div>
                            </Card>
                        )
                    })}
                </Content>

            </Layout>
        )
    }
}


export default index;