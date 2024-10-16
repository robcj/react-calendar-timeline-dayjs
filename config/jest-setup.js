import 'regenerator-runtime/runtime'
import { TextEncoder, TextDecoder } from 'util'

Object.assign(global, { TextDecoder, TextEncoder })

const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

global.console.error = (message) => {
  // mostly related to proptypes errors
  // fail test if app code uses console.error
  throw new Error(message)
}

global.console.warn = (message) => {
  throw new Error(message)
}
