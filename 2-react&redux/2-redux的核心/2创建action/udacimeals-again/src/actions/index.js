/*
 * @Description: 
 * @Author: ranyang
 * @Date: 2020-04-26 17:53:18
 * @LastEditTime: 2020-04-26 17:56:21
 * @FilePath: /12-uda/03-react-learning-uda/2-react&redux/2-redux的核心/2创建action/udacimeals-again/src/actions/index.js
 */
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe ({day,recipe,meal}){
    return {
        type:ADD_RECIPE,
        recipe,
        day,
        meal,
    }
}

export function removeFromCalendar({day,meal}){
    return {
        type:REMOVE_FROM_CALENDAR,
        day,
        meal
    }
}