import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './js/components/container/App';
import CreateToDo from './js/components/container/CreateToDo';
import EditToDo from './js/components/container/EditToDo';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={CreateToDo}/>
        <Route path="editToDo" component={EditToDo} />
    </Route>
);
