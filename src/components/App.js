import React, { Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import {
    Provider
} from 'react-redux'
import store from './../store/index'

const List = React.lazy(() => import('./List'));
const Header = React.lazy(() => import('./Header'));
const AddTasks = React.lazy(() => import('./AddTasks'));

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header />

                    <Switch>
                        <Route exact  path="/">
                            <List />
                        </Route>
                        <Route exact path="/create">
                            <AddTasks />
                        </Route>
                        <Route exact path="/edit/:id">
                            <AddTasks />
                        </Route>
                    </Switch>
                </Suspense>
            </Provider>
        </Router>
    );
}

export default App;
