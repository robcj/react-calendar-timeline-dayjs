import React from 'react';

const defaultContextState = {
  subscribeToMouseOver: () => {
    console.warn('"subscribeToMouseOver" default func is being used');
  },
};

const { Consumer, Provider } = React.createContext(defaultContextState);

export const MarkerCanvasProvider = Provider;
export const MarkerCanvasConsumer = Consumer;
