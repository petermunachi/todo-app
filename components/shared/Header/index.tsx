import * as S from './StyledComponents';

interface IProps {
  text: string;
}

const Header: React.FC<IProps> = ({ text }) => {
  return <S.HeaderText>{text}</S.HeaderText>;
};

export default Header;
