import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import Things from '../shared/things'

let SimpleComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    things: React.PropTypes.array.isRequired,
  },

  getInitialState() {
    return {
      clicks: 0,
    }
  },

  onClick() {
    this.setState({
      clicks: this.state.clicks + 1,
    })
  },

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>You've clicked the button {this.state.clicks} times</h2>
        <button onClick={this.onClick}>Button</button>
        {this.props.things.map(thing => (
          <pre key={thing._id}>
            {JSON.stringify(thing, null, 2)}
          </pre>
        ))}
      </div>
    )
  },
})

let ComponentWithData = createContainer(({ params }) => {
  return {
    things: Things.find().fetch(),
  }
}, SimpleComponent)

export default ComponentWithData
