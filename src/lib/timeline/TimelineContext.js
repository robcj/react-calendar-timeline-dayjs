import React from 'react';

// Create context for Timeline to share data with Item components
const TimelineContext = React.createContext({
  getTimelineContext: () => {
    console.warn('TimelineContext used outside of provider');
    return {
      timelineWidth: 0,
      visibleTimeStart: 0,
      visibleTimeEnd: 0,
      canvasTimeStart: 0,
      canvasTimeEnd: 0
    };
  }
});

export default TimelineContext;
