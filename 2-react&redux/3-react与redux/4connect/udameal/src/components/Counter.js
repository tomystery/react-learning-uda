import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

//Acton creator
const increaseAction = { type: 'increase' }




function mapStateToProps(state) {
    return {
        value: state.count
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(Counter)



