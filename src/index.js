import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import App from './App';
import Hooks from './components/Hooks';
import Classes from './components/Classes';
import BaseLayout from './components/layout/BaseLayout';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducerTemplate';

// initializing redux store
// requires a reducer.  Second argument is for redux dev-tools extension.
let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//provider connects react to redux.  Must pass redux instance to provider via "store" prop.
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <BaseLayout>
                    <Switch>
                        <Route exact path='/' component={App} />
                        <Route path='/hooks' component={Hooks} />
                        <Route path='/classes' component={Classes} />
                    </Switch>
                </BaseLayout>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
