import * as S from './StyledComponents';

interface IProps {
  children: React.ReactNode;
  width: string;
}

const Card: React.FC<IProps> = ({ children, width }) => {
  return <S.CardContainer width={width}>{children}</S.CardContainer>;
};

export default Card;
