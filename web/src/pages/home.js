import React ,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Head from '../commonent/Head';
import detail from './detail';
import index from './index';
import {Layout,Card,Carousel,Row,Col} from 'antd';
// import Row from "antd/es/grid/row.d";
const {Content,Footer} = Layout;

class home extends Component {

    render(){
        console.log(this.props.path);
        return(
            <Layout style={{height:'100%',width:'100%'}}>
                <Head/>

                    {/*<Carousel autoplay>*/}
                        {/*<div>*/}
                            {/*<img src={require('../images/pic.jpg')} />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                            {/*<img src={require('../images/pic2.jpg')} />*/}
                        {/*</div>*/}
                        {/*<div>*/}
                            {/*<img src={require('../images/pic3.jpg')} />*/}
                        {/*</div>*/}
                    {/*</Carousel>*/}

                <Content style = {{marginTop:60}}>
                    <Row>
                        <Col md={18}>
                            <Switch>
                                <Route exact path='/app' component={index} />
                                <Route  path='/app/detail' component={detail} />

                            </Switch>
                        </Col>

                        <Col>
                            <div>hjfkdjkfaksjdsahfkajsdfhkaskdij</div>
                        </Col>
                    </Row>
                </Content>

                <Footer style={{textAlign: 'center'}}>                        MSPA ©2017-2018 Created by zysoft
                </Footer>
            </Layout>
        )
    }
}


export default home;