import Card from 'components/shared/Card';
import Header from 'components/shared/Header';
import Form from 'components/shared/Form';
import * as S from './StyledComponents';
import { useRouter } from 'next/router';
import { User } from '@prisma/client';
import { userFormFields } from 'utils/helpers';
import axiosApi from 'utils/api';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { setButtonLoaders, WebAppI } from 'ducks';

interface IProps {
  user: User;
}

const EditPage: React.FC<IProps> = ({ user }) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const { buttonLoaders } = useAppSelector((state) => state.webApp as WebAppI);

  const handleFormSubmit = async (data: any) => {
    try {
      dispatch(setButtonLoaders({ ...buttonLoaders, isEditing: true }));

      const res = await axiosApi.patch('user', { user: data, id: user.id });

      if (res.status === 200) {
        toast.success('User updated successfully');
        push('/');
      } else toast.error('Error sending request');

      dispatch(setButtonLoaders({ ...buttonLoaders, isEditing: false }));
    } catch (error: any) {
      dispatch(setButtonLoaders({ ...buttonLoaders, isEditing: false }));
      toast.error(error.message);
      console.error(error);
    }
  };

  const defaultValues = {
    name: user.name,
    username: user.username,
    email: user.email,
    city: user.city,
  };

  return (
    <>
      <Header text="Edit" />
      <S.Container>
        <Card width="30%">
          <S.HeaderContainer>
            <h2>Edit Form</h2>
          </S.HeaderContainer>

          <S.Divider />

          <Form
            isLoading={buttonLoaders.isEditing}
            defaultValues={defaultValues}
            onCancelClick={() => push('/')}
            onSubmit={handleFormSubmit}
            formFields={userFormFields}
          />
        </Card>
      </S.Container>
    </>
  );
};

export default EditPage;
