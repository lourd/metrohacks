import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

let Things = new Mongo.Collection('things')

if ( Meteor.isClient ) {
  // Expose as a global on the client to allow for easy manipulation
  window.Things = Things
}

export default Things

export let specialId = 'ARBITRARY_ID'
