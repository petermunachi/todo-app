import Card from 'components/shared/Card';
import Header from 'components/shared/Header';
import Form from 'components/shared/Form';
import * as S from './StyledComponents';
import axiosApi from 'utils/api';

import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { userFormFields } from 'utils/helpers';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { setButtonLoaders, WebAppI } from 'ducks';

const AddPage = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const { buttonLoaders } = useAppSelector((state) => state.webApp as WebAppI);

  const handleFormSubmit = async (data: any) => {
    try {
      dispatch(setButtonLoaders({ ...buttonLoaders, isAdding: true }));

      const res = await axiosApi.post('user', data);
      if (res.status === 200) {
        toast.success('User added successfully');
        push('/');
      } else toast.error('Error sending request');

      dispatch(setButtonLoaders({ ...buttonLoaders, isAdding: false }));
    } catch (error: any) {
      dispatch(setButtonLoaders({ ...buttonLoaders, isAdding: false }));
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <>
      <Header text="Add" />
      <S.Container>
        <Card width="30%">
          <S.HeaderContainer>
            <h2>Add Form</h2>
          </S.HeaderContainer>

          <S.Divider />

          <Form
            isLoading={buttonLoaders.isAdding}
            onCancelClick={() => push('/')}
            onSubmit={handleFormSubmit}
            formFields={userFormFields}
          />
        </Card>
      </S.Container>
    </>
  );
};

export default AddPage;
