import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Tree} from 'antd';
// import 'antd/dist/antd.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "@qonsoll/react-design/dist/styles/styles.css";
import "@qonsoll/react-design/dist/styles/vars/index.css"
import '@qonsoll/next-landing-components/dist/styles/vars.css'
import Test from "./components/test";







ReactDOM.render(
    <React.StrictMode>
      {/*<App/>*/}
      <Test/>
    </React.StrictMode>,
    document.getElementById('root')
);

