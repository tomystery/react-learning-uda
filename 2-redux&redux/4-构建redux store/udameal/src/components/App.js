import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'
import { capitalize } from '../utils/helper'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o' //图标
import Modal from 'react-modal'  //导入刚安装的模态框。
import ArrowRightIcon from 'react-loading'
import Loading from 'react-loading'
import { fetchRecipe, fetchRecipes } from '../utils/api'
import FoodList from './FoodList'
//导入 就能看到派发action时应用是什么样的
//N


class App extends Component {

  state = {
    foodModalOpen: false,
    meal: null,
    day: null,
    food: null
    /* 现在我们需要对组件使用不同的方法，前两个用于打开和关闭模态框，最后一个用于
    从API抓取一些食谱， */
  }
  /* doThing=()=>{
    this.props.dispatch(addRecipe({})) //传递给组件dispatch属性,这个实际上来自props

    //我们派发addRecipe,然后向它传递任意特定属性，因为我们在接收dispatch
   
  } */

  openFoodModal = ({ meal, day }) => {
    this.setState(() => ({
      foodModalOpen: true,
      meal,
      day,
    }))
  }
  closeFoodModal = () => {
    this.setState(() => ({
      foodModalOpen: false,
      meal: null,
      day: null,
      food: null,

    }))
  }

  searchFood = (e) => {
    if (!this.input.value) {
      return
    }

    e.preventDefault()

    this.setState(() => ({ loadingFood: true }))

    fetchRecipes(this.input.value)
      .then((food) => this.setState(() => ({
        food,
        loadingFood: false,
      })))
  }

  render() {
    const { foodModalOpen, loadingFood, food } = this.state
    const { calendar, remove, selectRecipe } = this.props
    console.log(calendar);
    const mealOrder = ['breakfast', 'lunch', 'dinner'] //餐饮菜单变量
    /* N  你会注意到我们这里有一个dispatch,如果你需要在组件内派发一个action
    你需要做的是连接该组件 然后你就能调用dispatch了，但在这个例子中我们不只是想
    派发action,事实上我们不想在视频上这么做，我们想做的是将app组件连接到redux store以获得
    我们redux store中存在的日历状态，这就要引入mapStateToProps的话题。
     */
    return (
      <div className='container'>

        <ul className='meal-types'>
          {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))}
        </ul>

        <div className='calendar'>
          <div className='days'>
            {calendar.map(({ day }) => <h3 key={day} className='subheader'>{capitalize(day)}</h3>)}
          </div>
          <div className='icon-grid'>
            {calendar.map(({ day, meals }) => (
              <ul key={day}>
                {mealOrder.map((meal) => (
                  <li key={meal} className='meal'>
                    {meals[meal]
                      ? <div className='food-item'>
                        <img src={meals[meal].image} alt={meals[meal].label} />
                        <button onClick={() => remove({ meal, day })}>Clear</button>
                      </div>
                      : <button onClick={() => this.openFoodModal({ meal, day })} className='icon-btn'>
                        <CalendarIcon size={30} />
                      </button>}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Modal className='modal' overlayClassName='overlay' isOpen={foodModalOpen}
          onRequestClose={this.closeFoodModal} contentLabel='Modal'>
          <div>
            {loadingFood === true ? <Loading delay={200} type='spin' color='#222' className='loading' />
              : <div className='search-container'>
                <h3 className='subheader'> find a meal for {capitalize(this.state.day)}{this.state.meal}.</h3>
                <div className='search'>
                  <input className='food-input' type='text' placeholder='Search Foods' ref={(input) => this.input = input} />
                  <button className='icon-btn' onClick={this.searchFood}>
                    <ArrowRightIcon size={30} />
                  </button>

                </div>
                {food !== null && (
                  <FoodList food={food} onSelect={(recipe) => {
                    selectRecipe({ recipe, day: this.state.day, meal: this.state.meal })
                    this.closeFoodModal()
                  }} />
                )}
              </div>}
          </div>

        </Modal>
      </div>
    )
  }
}



/* 创建mapStateToProps函数，此函数要做的是将我们的redux状态映射到组件props
那么此组件将接收我们的状态叫做日历 */

function mapStateToProps({ food, calendar }) {//将日历和食物作为一个对象来获取，
  /* 现在，只要我们将mapStateToProps作为第一个参数传递给connect
  那么无论我们在该函数中返回什么，都会传递给我们组件， */
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      //我们在此返回一个对象 它具有我提到的day属性
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null

        return meals
      }, {}) //现在我们想获得所有的餐饭，它会向我们返回此对象的所有键，然后调用reduce，
      //我们希望的是将所有这些归纳为单个对象。
    })),
  }
}

/* 他的作用是将dispatch方法映射到特定的props,现在我们的组件props上将有下面的这俩个属性，然后当这些函数调用时，它们将自动为我们派发
再次说明这是另一种可选方法，如果你不想用可以不用 这里我们基本上将action creator 包裹在mapDispatchToProps的dispatch内 以使我们的组件更简洁一些*/
function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}


//导出并调用了他，他会向我们返回一个全新的函数 我们可以将组件作为参数
//传入
export default connect(
  mapStateToProps, mapDispatchToProps
)(App)
