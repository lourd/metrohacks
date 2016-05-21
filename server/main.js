import Things, { specialId } from '../shared/things'

let thingCount = Things.find().count()

if ( thingCount === 0 ) {
  Things.insert({
    _id: specialId,
    clicks: 0,
  })
  console.log('Set up the single document')
}
