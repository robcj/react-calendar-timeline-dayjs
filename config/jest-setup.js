import 'regenerator-runtime/runtime';
import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

Object.assign(global, { TextDecoder, TextEncoder });

global.console.error = message => {
  // mostly related to proptypes errors
  // fail test if app code uses console.error
  throw new Error(message);
};

global.console.warn = message => {
  throw new Error(message);
};
