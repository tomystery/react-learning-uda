import React, { Component } from 'react'
import { addRecipe } from '../actions'
import '../App.css';

class App extends Component {

  state = {
    calendar: null
  }

  componentDidMount() {
    const { store } = this.props //从props获取store

    store.subscribe(() => {//然后我们想订阅react store中发生的任何变化
      this.setState(() => ({//然后在发生变化时，我们想做的是调用setState
        calendar: store.getState() //当store发生变化时，我们想让日历等于store.gstState返回给我们东西
      }))
    })
  }

  submitFood = () => {
    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      },
    }))

    this.input.value = ''

  }

  render() {
    return (
      <div>
        <input type='text' ref={(input) => this.input = input} placeholder="Monday's Breakfast" />
        <button onClick={this.submitFood.bind(this)}>Submit</button>

        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
