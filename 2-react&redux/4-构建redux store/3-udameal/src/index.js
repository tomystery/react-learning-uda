import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers'
import { Provider } from 'react-redux'

//导入
import { createStore } from 'redux'



//如果redux_devtools_extension存在于window对象则直接调用它，它的作用是使我们可以直接使用redux工具
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

/* 有两种方式可以更改redux store的状态，第一种是添加一个新食谱，第二种是从日历删除一个
食物项，因此我们在应用中有两个不同的action(动作)，这意味着我们要创建
两个不同的常量， */

/* 
我们将store传递给应用组件 现在应用将接收store作为props 
*/


//  N 那么在将来。每当应用渲染的任何组件或应用本身需要访问redux store或派发action时，整个操作都会更加简单
