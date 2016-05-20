import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'

import Component from './component'

Meteor.startup(() => {
  render(<Component name="Gordon"/>, document.getElementById('app'))
})
