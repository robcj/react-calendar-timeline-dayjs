import './styles.scss';

import React, { Component } from 'react';

import { HashRouter as Router, Route, Link, useLocation, Routes } from 'react-router';

import DemoMain from './demo-main';
import DemoPerformance from './demo-performance';
import DemoTreeGroups from './demo-tree-groups';
import DemoLinkedTimelines from './demo-linked-timelines';
import DemoElementResize from './demo-element-resize';
import DemoRenderers from './demo-renderers';
import DemoVerticalClasses from './demo-vertical-classes';
import DemoCustomItems from './demo-custom-items';
import DemoCustomHeaders from './demo-headers';
import DemoCustomInfoLabel from './demo-custom-info-label';
import DemoControledSelect from './demo-controlled-select';
import DemoControlledScrolling from './demo-controlled-scrolling';

const demos = {
  main: DemoMain,
  performance: DemoPerformance,
  treeGroups: DemoTreeGroups,
  linkedTimelines: DemoLinkedTimelines,
  elementResize: DemoElementResize,
  renderers: DemoRenderers,
  verticalClasses: DemoVerticalClasses,
  customItems: DemoCustomItems,
  customHeaders: DemoCustomHeaders,
  customInfoLabel: DemoCustomInfoLabel,
  controledSelect: DemoControledSelect,
  controlledScrolling: DemoControlledScrolling,
};

// A simple component that shows the pathname of the current location
function Menu() {
  const location = useLocation();
  let pathname = location.pathname;

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

class App extends Component {
  render() {
    const firstDemoKey = Object.keys(demos)[0];
    const FirstDemo = demos[firstDemoKey];

    return (
      <Router>
        <div>
          <Menu />
          <div className="demo-demo">
            <Routes>
              <Route path="/" element={<FirstDemo />} />
              {Object.keys(demos).map(key => {
                const DemoComponent = demos[key];
                return <Route key={key} path={`/${key}`} element={<DemoComponent />} />;
              })}
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
