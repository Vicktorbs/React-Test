import React, { Component } from 'react';
import Task from './task'
import PropTypes from 'prop-types'

class Tasks extends Component {
    render() {
        return  this.props.tasks.map((e) => <Task key={ e.id } task={ e } deleteTask={this.props.deleteTask} checkDone={this.props.checkDone}/>) 
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;