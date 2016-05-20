import React from 'react'

let HelloWorld = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },

  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  },
})

export default HelloWorld
