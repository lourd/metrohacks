import React from 'react'

let HelloWorld = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
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
      </div>
    )
  },
})

export default HelloWorld
