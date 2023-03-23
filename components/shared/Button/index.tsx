import { ThreeDots } from 'react-loader-spinner';
import * as S from './StyledComponents';

interface IProps {
  children: React.ReactNode;
  bgColor: string;
  type: 'button' | 'submit';
  onClick?: () => void;
  borderColor?: string;
  color?: string;
  isLoading?: boolean;
}

const Button: React.FC<IProps> = ({
  children,
  type,
  color,
  borderColor,
  bgColor,
  isLoading,
  onClick,
}) => {
  const defaultColor = color ? color : 'white';
  const defaultBorderColor = borderColor ? borderColor : bgColor;

  return (
    <S.ButtonContainer
      bgColor={bgColor}
      color={defaultColor}
      borderColor={defaultBorderColor}
      type={type}
      onClick={onClick}
    >
      {isLoading ? (
        <ThreeDots
          height="20"
          width="30"
          radius="9"
          color="white"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <>{children}</>
      )}
    </S.ButtonContainer>
  );
};

export default Button;
