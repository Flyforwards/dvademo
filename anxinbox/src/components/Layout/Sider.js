import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import styles from './Sider.css';
import { Layout, Menu, Icon,Switch,Row, Col  } from 'antd';
import config from '../../utils/config.js';
import Test from './Test.js';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Sider, Content,Footer } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    theme: 'dark',
    current: '1',
    colorWhite:"colorWhite",
    flag:false,
  };
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
      flag:!this.state.flag,
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      
    });
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Layout style={{height:"100%"}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className={styles.menuPadding}
          style={{background:(this.state.flag)?"#ffffff":"#404040"}}
        >
         
          <Row style={{width:"100%",lingHeight:"40px",height:"40px",fontSize:"20px",color:!this.state.flag?"#ffffff":"#404040"}}>
            <Col span={!this.state.collapsed?'8':' 24'}  style={{textAlign:"center"}}><img alt={'logo'} src={config.logoSrc} className={styles.logoPic} /></Col>
            <Col span={16}> {!this.state.collapsed?'System':' '}</Col>    
          </Row>
         
          <div className={styles.logo} />
          
           <Menu     
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 200 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >

              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <Menu.Item key="1"><Link to='/'>Option 1</Link></Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>

            </Menu>

          <Switch
            className={styles.switchColor}
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
            <Test />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2017 Created by horsegj
          </Footer>
        </Layout>

      </Layout>
    );
  }
}

export default connect()(SiderDemo);
