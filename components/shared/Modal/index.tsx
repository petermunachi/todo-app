import * as S from './StyledComponents';

interface IProps {
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ children }) => {
  return (
    <S.ModalWrapper>
      <S.ModalContent>{children}</S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
