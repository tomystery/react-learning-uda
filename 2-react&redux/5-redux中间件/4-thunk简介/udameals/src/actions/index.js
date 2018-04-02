export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

/* 创建这样常量的目的是为了专门传递给reducer函数，这样就不用在所有地方进行字符串比较了，相反我们可以使用常量
 */

export function addRecipe({ day, recipe, meal }) {
    return {
        type: ADD_RECIPE,
        recipe,
        day,
        meal
    }
}

export function removeFromCalendar({day,meal}){
    return {
        type:REMOVE_FROM_CALENDAR,
        day,
        meal
    }
}

/* 现在的问题是：接下来该做什么？现在我们只介绍了创建对象(action) 并在函数(action creator) 
中封装这些对象。我们依然需要回答两个问题。首先，Redux 如何知道调用这些 action creator 
应该修改应用的状态？其次，我们如何根据这些 action 指定应用的状态应该如何改变？这两个问题就引出了
 Redux 中的 reducer */


 /*  现在我们有两个state,我们需要构建reducer来指定 ，我们的状态将如何根据这些action
 而改变，首先 我们创建一个新的文件夹，并将其称为reducers,*/