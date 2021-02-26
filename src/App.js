import * as React from 'react';
import { Admin, ListGuesser, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/UsersList';
import PostList from './components/PostList';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import TodoIcon from '@material-ui/icons/DoneOutline';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name='users' list={UserList} edit={EditGuesser} icon={UserIcon} />
    <Resource name='posts' list={PostList} edit={EditGuesser} icon={PostIcon} />
    <Resource
      name='todos'
      list={ListGuesser}
      edit={EditGuesser}
      icon={TodoIcon}
    />
  </Admin>
);

export default App;
