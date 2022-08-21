import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/userOperations';
import { getLoadingStatus, getUsers } from 'redux/userSelectors';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { Button } from './Button/Button';
import { UserList } from './UserList/UserList';

export const App = () => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  const loading = useSelector(getLoadingStatus);

  const handleUsers = () => {
    dispatch(fetchUsers());
  };

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      {users.length > 0 ? (
        <>
          <UserList />
          <Button text="Add user" handleClick={handleOpenForm} />
        </>
      ) : (
        <Button text="Fetch Users" handleClick={handleUsers} />
      )}
      {openForm && <AddUserForm closeForm={handleCloseForm} />}
      {loading && <p>Loading...</p>}
    </>
  );
};
