import Button from 'components/shared/Button';
import Modal from 'components/shared/Modal';
import { setButtonLoaders, setIsDeleteModalOpen, WebAppI } from 'ducks';
import { useAppDispatch, useAppSelector } from 'redux/store';
import * as S from './StyledComponents';
import axiosApi from 'utils/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const DeleteModal = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const { selectedUser, buttonLoaders } = useAppSelector(
    (state) => state.webApp as WebAppI
  );

  const handleDeleteUser = async () => {
    try {
      dispatch(setButtonLoaders({ ...buttonLoaders, isDeleting: true }));
      const res = await axiosApi.delete(`user/?id=${selectedUser?.id}`);

      if (res.status === 200) {
        toast.success('User deleted successfully');
        push('/');
      } else toast.error('Error sending request');

      dispatch(setButtonLoaders({ ...buttonLoaders, isDeleting: false }));
    } catch (error: any) {
      toast.error(error.message);
      console.error(error);
      dispatch(setButtonLoaders({ ...buttonLoaders, isDeleting: false }));
    }
  };

  return (
    <Modal>
      <S.Container>
        <h3>Delete</h3>

        <S.Divider />

        <span>Do you want to delete user: {selectedUser?.name}</span>

        <S.Divider />

        <S.ButtonGroup>
          <Button
            bgColor="darkGray"
            type="button"
            onClick={() => dispatch(setIsDeleteModalOpen(false))}
          >
            Cancel
          </Button>
          <Button
            bgColor="chartreuse"
            isLoading={buttonLoaders.isDeleting}
            type="button"
            onClick={handleDeleteUser}
          >
            delete
          </Button>
        </S.ButtonGroup>
      </S.Container>
    </Modal>
  );
};

export default DeleteModal;
