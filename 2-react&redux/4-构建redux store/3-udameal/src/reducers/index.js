import {combineReducers} from 'redux'

//导入两个常量
import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDAR
} from '../actions'

/* 正如前面所讲，reducer将指定我们store的结构,我们要做的是将初始状态粘贴到这里，
第一次调用reducer时，当前的状态值为undefined.那么我们将初始状态设为这里的这个对象
我们来创建reducer函数
 */

function food(state = {}, action) {
    /* now-他将一些状态作为输入 初始状态设为空，并接受一个action ,食物reducer将
    负责为我们处理食谱*/
    switch (action.type) {
        case ADD_RECIPE:
            const { recipe } = action //从action抓取食谱
            return {
                ...state,//返回一个全新的对象，并且无论当前状态是什么，我们都将它赋值给state
                [recipe.label]: recipe //此特定食谱为抓取的食谱
            }
        default:
            return state
    }
}
/* now-接下来发生的是，我们收到或每当分派add_recipe action时，我们不仅要修改日历状态
还要通过这里的逻辑来修改store的food部分，我们有了日历状态 并在导出日历，但是对于食物应该如何处理呢？
你看我们从reducer导出了日历，然后在index.js文件中import reducer from './reducers'
也就是日历，然后将它传递给store,所以我们要找到一种方式来结合calendar reducer与food reducer */


const initialCalendarState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null
    }
}


//reducer function如果状态未设置，我们就将它设为这里定义的初始日历状态.我们从此函数返回的状态将作为store的新状态
function calendar(state = initialCalendarState, action) {
    const { day, recipe, meal } = action

    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                [day]: {
                    ...state[day],//使用对象扩展语法返回与之前的相同状态，但我们想做的是修改具体的星期天数
                    [meal]: recipe.label,
                }
                //所有的状态保持不变，特定天除外
            }
        case REMOVE_FROM_CALENDAR:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null,
                }
            }
        //如果上面两个情况都没满足
        default:
            return state
    }
}
// export default calendar  换成到处combineReducers
export default combineReducers({
    /* 我们把两个reducer都传递给他，即食物和日历reducer, 接下来要做的是
    在app.js文件中，因为我们要将两个结合，而不在是获取日历 对吧？*/
    food,
    calendar,
})