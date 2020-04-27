/*
 * @Description: 
 * @Author: ranyang
 * @Date: 2020-04-20 09:42:00
 * @LastEditTime: 2020-04-27 10:43:13
 * @FilePath: /12-uda/03-react-learning-uda/2-react&redux/2-redux的核心/4创建redux store/udacimeal/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//导入
import {createStore} from 'redux';
import reducer from './reducers'

const store = createStore(reducer);
console.log(store);//查看store上有那些属性


//如果redux_devtools_extension存在于window对象则直接调用它，它的作用是使我们可以直接使用redux工具
// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/* 有两种方式可以更改redux store的状态，第一种是添加一个新食谱，第二种是从日历删除一个
食物项，因此我们在应用中有两个不同的action(动作)，这意味着我们要创建
两个不同的常量， */