
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import getAppProvider from './routes/index';

const store = configureStore();
const mountNode = document.getElementById('root');

ReactDOM.render(
  getAppProvider(store), mountNode
);



