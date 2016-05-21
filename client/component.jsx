import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import Things, { specialId } from '../shared/things'
import Tone from './tone'

let SimpleComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    // things: React.PropTypes.array.isRequired,
    clicks: React.PropTypes.number.isRequired,
  },

  // getInitialState() {
  //   return {
  //     clicks: 0,
  //   }
  // },

  onUp() {
    Things.update({ _id: specialId }, { clicks: this.props.clicks + 1 })
  },

  onDown() {
    Things.update({ _id: specialId }, { clicks: this.props.clicks - 1 })
  },

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>You've clicked the button {this.props.clicks} times</h2>
        <button onClick={this.onUp}>Up</button>
        <button onClick={this.onDown}>Down</button>
        <Tone pitch={this.props.clicks / 100}/>
      </div>
    )
  },
})

let ComponentWithData = createContainer(() => {
  // Only possible to do `fineOne` and get the same one because we're working
  // under the assumption that there's only 1 document in the database
  let thing = Things.findOne()

  return {
    clicks: thing === undefined ? -1 : thing.clicks
  }
}, SimpleComponent)

export default ComponentWithData
