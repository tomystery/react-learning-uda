const appReducer=(state,action)=>{
    switch(action.type){
        case 'DELETE_FLAVOR':
        return state.filter(obj=>obj.flavor!==action.flavor);
        default:
        return state;
    }
}

const result = appReducer([
    { flavor: 'Chocolate', count: 36 }, 
    { flavor: 'Vanilla', count: 210 }
],
    { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
);

/* 一个appreducer接受两个参数，第一个是这里的数组表示的状态，
第二个参数是action,它的action只是一个普通的js对象 具有type键和一个可负载香草味
表示我们想做的更改。
 */


