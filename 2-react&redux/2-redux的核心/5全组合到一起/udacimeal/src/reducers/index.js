//导入两个常量
import {
    ADD_RECIPE,
    REMOVE_FROM_CALENDAR
} from '../actions'

/* 正如前面所讲，reducer将指定我们store的结构,我们要做的是将初始状态粘贴到这里，
第一次调用reducer时，当前的状态值为undefined.那么我们将初始状态设为这里的这个对象
我们来创建reducer函数
 */



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
export default calendar