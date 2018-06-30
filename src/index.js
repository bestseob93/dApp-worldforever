import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'react-circular-progressbar/dist/styles.css';

import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
