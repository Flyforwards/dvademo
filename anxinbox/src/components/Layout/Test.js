import React,{PropTypes} from 'react';
import { Menu, Icon } from 'antd'
import { connect } from 'dva';
import { Link } from 'dva/router'
import { menu } from '../../utils/menu.js'
import styles from './Test.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Test extends React.Component {
	
    render(){ 
		var showArry = ['hello1', 'hello2', 'hello3']; 

		return ( 
			<ul>
				{ 
					showArry.map(function (item) { 

						return 	<li key={item}>{item}</li>;
								
					}) 
				} 
			</ul>
		); 
	
	}
}	


export default connect()(Test);

