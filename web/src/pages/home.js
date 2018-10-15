import React ,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Head from '../commonent/Head';
import detail from './detail';
import index from './index';
import edit from './edit';
import {Layout,Card,Carousel,Row,Col} from 'antd';
// import Row from "antd/es/grid/row.d";
const {Content,Footer} = Layout;

class home extends Component {

    render(){
        console.log(this.props.path);
        let PADDING = 10;
        return(
            <Layout style={{width:'100%',backgroundColor:'#e7e7e7',display:'flex',flexDirection:'cloumn'}}>
                <Head/>

                <Content style = {{marginTop:60,display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',paddingLeft:40,paddingRight:80,minHeight:750}}>
                    <div style={{width:'15%',backgroundColor:'#fff',marginTop:30,display:'flex',flexDirection:'column',paddingTop:30,alignItems:'center',paddingLeft:10,paddingRight:10,paddingBottom:30}}>
                        <div><img src={require('../images/photos/12.jpg')} alt="" width={80} height={80} style={{borderRadius:'50%'}}/></div>
                        <div style={{marginTop:30,fontweight:'blod',color:'#666',fontSize:17}}>Lyalleny</div>

                        <div style={{marginTop:50,fontSize:17,color:'#FF6347'}}>天地不仁以万物为刍狗</div>
                        <div style={{marginTop:50,fontSize:15,color:'#FF6347'}}>
                            润物细无声
                        </div>

                        <div style={{marginTop:80,fontSize:13,display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                            <div style={{marginTop:PADDING}}>故天将降大任于是人也,</div>
                            <div style={{marginTop:PADDING}}>必先苦其心志,</div>
                            <div style={{marginTop:PADDING}}>劳其筋骨,</div>
                            <div style={{marginTop:PADDING}}>饿其体肤,</div>
                            <div style={{marginTop:PADDING}}>空乏其身,</div>
                            <div style={{marginTop:PADDING}}>行拂乱其所为,</div>
                            <div style={{marginTop:PADDING}}>所以动心忍性,</div>
                            <div style={{marginTop:PADDING}}>曾益其所不能.</div>
                            <div style={{marginTop:PADDING}}>人恒过,</div>
                            <div style={{marginTop:PADDING}}>然后能改；</div>
                            <div style={{marginTop:PADDING}}>困于心,</div>
                            <div style={{marginTop:PADDING}}>衡于虑,</div>
                            <div style={{marginTop:PADDING}}>而后作；</div>
                            <div style={{marginTop:PADDING}}>征于色,</div>
                            <div style={{marginTop:PADDING}}>发于声,</div>
                            <div style={{marginTop:PADDING}}>而后喻...</div>
                        </div>

                    </div>

                    <div style={{width:'80%',marginTop:30}}>
                        <Switch>
                            <Route exact path='/app' component={index} />
                            <Route  path='/app/detail' component={detail} />
                            <Route  path='/app/edit' component={edit} />

                        </Switch>
                    </div>


                </Content>

                <Footer style={{textAlign: 'center',backgroundColor:'#e7e7e7'}}>                        iBlog Created by Lylleny 2018
                </Footer>
            </Layout>
        )
    }
}


export default home;