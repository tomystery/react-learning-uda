/*
 * @Description: 
 * @Author: ranyang
 * @Date: 2020-04-26 21:54:37
 * @LastEditTime: 2020-04-26 22:01:11
 * @FilePath: /12-uda/03-react-learning-uda/2-react&redux/2-redux的核心/2创建action/udacimeals-again/src/reducers/index.js
 */
import {ADD_RECIPE,REMOVE_FROM_CALENDAR} from '../actions'

const initialCalendarState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null,
      },
      monday: {
        breakfast: null,
        lunch: null,
        dinner: null,
      },
      tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
      },
      wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
      },
      thursday: {
        breakfast: null,
        lunch: null,
        dinner: null,
      },
      friday: {
        breakfast: null,
        lunch: null,
        dinner: null,
      },
      saturday: {
        breakfast: null,
        lunch: null,
        dinner: null,
      },
}

function calendar(state = initialCalendarState,action){
    const {day,recipe,meal} = action
    switch(action.type){
        case ADD_RECIPE:
            return{
                ...state,
                [day]:{
                    ...state[day],
                    [meal]:recipe.label,
                }
            }
        case REMOVE_FROM_CALENDAR:
            return{
                ...state,
                [day]:{
                    ...state[day],
                    [meal]:null,
                }
            }
        default:
            state
    }
}

export default calendar