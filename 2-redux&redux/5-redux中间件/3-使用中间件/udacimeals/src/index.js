import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers'
import { Provider } from 'react-redux'

//导入
import { createStore ,applyMiddleware,compose} from 'redux' //N-首先我们要做的是从react包导入applymiddleware,compose 并在这里进行一系列的组合

/* N-假设我们有一个logger中间件要添加到我们的应用 这样每当分派一个action
我们都会看到logger内的这些信息。 */
const logger=store=>next=>action=>{
    console.group(action.type)
    console.info('dispatching',action)
    let result=next(action)
    console.log('next state',store.getState())
    console.groupEnd(action.type)
    return result
}

const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose


//如果redux_devtools_extension存在于window对象则直接调用它，它的作用是使我们可以直接使用redux工具
const store = createStore(
    reducer, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(
        applyMiddleware(logger)
    )
    /* N-接下来我们不是传入applyMiddleware，而是传入composeEnhancers调用它,然后作为该函数的第一个参
数 传入applyMiddleware然后是logger就像之前一样*/
)

/* N-假如我们有store，我们要向他添加logger作为createStore的第二个参数,
我们调用applyMiddleware并将它传递给logger 。那么现在的问题是，我们如何将
Redux_Devtools_Extension添加给中间件？因为如果你还记得，为了连接开发工具扩展，
我们将它作为第二个参数传递给了createStore。window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
这在redux中非常常，我们将它们组合在一起，我们要做的是在上面这里创建一个新变量
*/
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


//  那么在将来。每当应用渲染的任何组件或应用本身需要访问redux store或派发action时，整个操作都会更加简单
