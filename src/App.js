import * as React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/UsersList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={UserList} />
    <Resource name='posts' list={ListGuesser} />
    <Resource name='comments' list={ListGuesser} />
    <Resource name='photos' list={ListGuesser} />
    <Resource name='todos' list={ListGuesser} />
  </Admin>
);

export default App;
