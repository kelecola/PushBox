class State {
  constructor(state) {
    this.state = state
  }
}

class PlainState extends State {
  constructor() {
    super()
    this.isPlain = true
  }
}

class BoxState extends State {
  constructor() {
    super()
    this.isBox = true
  }
}

class PersonState extends State {
  constructor() {
    super()
    this.isPerson = true
  }
}

const PLAIN_STATE = 0
const BOX_STATE = 1
const PERSON_STATE = 2

const setState = state => {
  if (state === PLAIN_STATE) return new PlainState()
  if (state === BOX_STATE) return new BoxState()
  if (state === PERSON_STATE) return new PersonState()
}

export { setState, PLAIN_STATE, BOX_STATE, PERSON_STATE }
