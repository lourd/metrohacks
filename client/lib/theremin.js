import './audio-context-monkey-patch'

class Theremin {
  constructor(audioContext) {
  	let oscillatorNode = audioContext.createOscillator()
    oscillatorNode.start(0)

  	this.oscillatorNode = oscillatorNode
  	this.gainNode = audioContext.createGain()
  	this.pitchBase = 50
  	this.pitchBend = 0
  	this.pitchRange = 2000
  	this.volume = 0.5
  	this.maxVolume = 1
  	this.frequency = this.pitchBase
    this.isConnected = false
  }

	play() {
    if ( !this.isConnected ) {
      this.oscillatorNode.connect(this.gainNode)
      this.isConnected = true
    }
  }

  stop() {
    if ( this.isConnected ) {
      this.oscillatorNode.disconnect(this.gainNode)
      this.isConnected = false
    }
	}

  setType(type) {
    this.oscillatorNode.type = type
  }

	setPitchBend(v) {
		this.pitchBend = v
		this.frequency = this.pitchBase + this.pitchBend * this.pitchRange
		this.oscillatorNode.frequency.value = this.frequency
	}

	setVolume(v) {
		this.volume = this.maxVolume * v
		this.gainNode.gain.value = this.volume
	}

	connect(output) {
		this.gainNode.connect(output)
	}
}

export function createTheremin () {
  let audioContext = new AudioContext()
  let theremin = new Theremin(audioContext)
  theremin.connect(audioContext.destination)
  return theremin
}

let theremin = createTheremin()

// Expose global for easy manipulation
window.theremin = theremin

export default theremin
