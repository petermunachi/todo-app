import Button from 'components/shared/Button';
import Card from 'components/shared/Card';
import Header from 'components/shared/Header';
import { WebAppI } from 'ducks';
import { useRouter } from 'next/router';
import { useAppSelector } from 'redux/store';
import DeleteModal from './DeleteModal';
import * as S from './StyledComponents';
import UserTable from './UserTable';

const HomePage = () => {
  const { push } = useRouter();

  const { isDeleteModalOpen } = useAppSelector(
    (state) => state.webApp as WebAppI
  );

  console.log({ isDeleteModalOpen });

  return (
    <>
      <Header text="Home" />
      <S.Container>
        <Card width="70%">
          <S.HeaderContainer>
            <h2>User List</h2>
            <Button
              type="button"
              bgColor="#1414ef"
              onClick={() => push('/add')}
            >
              Add new
            </Button>
          </S.HeaderContainer>

          <S.Divider />

          <S.TableWrapper>
            <UserTable />
          </S.TableWrapper>
        </Card>
        {isDeleteModalOpen && <DeleteModal />}
      </S.Container>
    </>
  );
};

export default HomePage;
