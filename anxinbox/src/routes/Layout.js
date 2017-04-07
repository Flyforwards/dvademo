import React from 'react';
import { connect } from 'dva';
import Sider from '../components/Layout/Sider.js';
import styles from './Layout.css';

function Layout({children}) {
  return (
    <div className={styles.normal} >
   		<Sider />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Layout);
