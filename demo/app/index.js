import './styles.scss';

import React from 'react';

import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const demos = {
  main: require('./demo-main').default,
  performance: require('./demo-performance').default,
  treeGroups: require('./demo-tree-groups').default,
  linkedTimelines: require('./demo-linked-timelines').default,
  elementResize: require('./demo-element-resize').default,
  renderers: require('./demo-renderers').default,
  verticalClasses: require('./demo-vertical-classes').default,
  customItems: require('./demo-custom-items').default,
  customHeaders: require('./demo-headers').default,
  customInfoLabel: require('./demo-custom-info-label').default,
  controledSelect: require('./demo-controlled-select').default,
  controlledScrolling: require('./demo-controlled-scrolling').default,
};

// A simple component that shows the pathname of the current location
function Menu() {
  const location = useLocation();
  let pathname = (location || {}).pathname;

  if (!pathname || pathname === '/') {
    pathname = `/${Object.keys(demos)[0]}`;
  }

  return (
    <div className={`demo-row${pathname.indexOf('sticky') >= 0 ? ' sticky' : ''}`}>
      Choose the demo:
      {Object.keys(demos).map(key => (
        <Link key={key} className={pathname === `/${key}` ? 'selected' : ''} to={`/${key}`}>
          {key}
        </Link>
      ))}
    </div>
  );
}

function App() {
  const DefaultDemo = demos.main;

  return (
    <Router>
      <div>
        <Menu />
        <div className="demo-demo">
          <Routes>
            <Route path="/" exact element={<DefaultDemo />} />
            {Object.entries(demos).map(([key, Demo]) => (
              <Route key={key} path={`/${key}`} element={<Demo />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
