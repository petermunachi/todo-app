import { User } from '@prisma/client';
import Button from 'components/shared/Button';
import { setIsDeleteModalOpen, setSelectedUser, WebAppI } from 'ducks';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'redux/store';
import * as S from './StyledComponents';

const UserTable = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const { users } = useAppSelector((state) => state.webApp as WebAppI);

  const handleDeleteButtonClick = (user: User) => {
    dispatch(setSelectedUser(user));
    dispatch(setIsDeleteModalOpen(true));
  };

  return (
    <S.Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>
              <Button
                bgColor="#E7B10A"
                type="button"
                onClick={() => push(`/edit/${user.id}`)}
              >
                edit
              </Button>
            </td>
            <td>
              <Button
                bgColor="red"
                type="button"
                onClick={() => handleDeleteButtonClick(user)}
              >
                delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};

export default UserTable;
