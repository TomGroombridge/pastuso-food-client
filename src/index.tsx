import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './Components/Routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
