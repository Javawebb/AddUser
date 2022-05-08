import { NavLink, Route, Routes } from 'react-router-dom';
import { AddUser } from './pages/AddUser';
import { UsersList } from './pages/UsersList';


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Add User</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users List</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<AddUser/>}/>
        <Route path='/users' element={<UsersList/>}/>
      </Routes>
    </div>
  );
}

export default App;
