import * as React from 'react';
import { Admin, ListGuesser, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/UsersList';
import PostList from './components/PostList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={UserList} edit={EditGuesser} />
    <Resource name='posts' list={PostList} edit={EditGuesser} />
    <Resource name='todos' list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default App;
