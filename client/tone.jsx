import React from 'react'
import theremin from './lib/theremin'

let Tone = React.createClass({
  propTypes: {
    pitch: React.PropTypes.number.isRequired,
  },

  componentWillMount() {
    theremin.play()
    theremin.setPitchBend(this.props.pitch)
  },

  componentWillUnmount() {
    theremin.stop()
  },

  componentWillReceiveProps(nextProps) {
    if ( nextProps.pitch !== this.props.pitch ) {
      theremin.setPitchBend(nextProps.pitch)
    }
  },

  render() {
    return null
  },
})

export default Tone
