# [MetroHacks](http://metrohacks.co/) [Meteor](https://meteor.com) & [React](http://facebook.github.io/react) Workshop Demonstration

## Setup & Installation
You'll need to have [Meteor installed](https://www.meteor.com/install) on your machine.

```sh
git clone https://github.com/lourd/metrohacks
cd metrohacks
meteor npm install
meteor
```

And then head to `localhost:3000` in your browser to see the running app.

## Playing around

There are 2 variables globally exposed on `window` to interact with the app: `theremin` and `Things`.

### Theremin
With the `theremin` variable you can adjust the audio with methods like `stop`, `setPitchBend`, and `setVolume`. See `client/lib/theremin.js` for the class definition. This ability demonstrates the imperative nature of the API.

### Things
With the `Things` variable you can update the state of the system using `update`. For example:

```js
Things.update({ _id: 'ARBITRARY_ID' }, { clicks: 20 })
```

This ability illustrates the declarative nature of the app. Changing the state, the single document, propogates down to the audio and the text on the page.
