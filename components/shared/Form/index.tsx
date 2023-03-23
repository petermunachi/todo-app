import { useForm } from 'react-hook-form';
import Button from '../Button';
import * as S from './StyledComponents';

interface FormFieldI {
  label: string;
  inputType: string;
}

interface IProps {
  isLoading: boolean;
  defaultValues?: Record<string, string>;
  formFields: FormFieldI[];
  onCancelClick: () => void;
  onSubmit: (data: any) => void;
}

const Form: React.FC<IProps> = ({
  formFields,
  onSubmit,
  defaultValues,
  isLoading,
  onCancelClick,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultValues },
  });

  const removeWhitespace = (text: string) => text.replace(/\s/g, '');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((data, index) => {
        const value = data.label.toLowerCase();
        return (
          <div key={index}>
            {errors[value] && (
              <S.FormInputError>
                {String(errors[value]?.message)}
              </S.FormInputError>
            )}
            <S.FormGroup>
              <S.Label htmlFor={removeWhitespace(value)}>{data.label}:</S.Label>
              <S.Input
                type={data.inputType}
                id={removeWhitespace(value)}
                {...register(value, { required: `${data.label} is required` })}
                aria-invalid={errors[value] ? 'true' : 'false'}
              />
            </S.FormGroup>
          </div>
        );
      })}
      <S.ButtonGroup>
        <Button
          bgColor="white"
          borderColor="red"
          color="red"
          type="button"
          onClick={onCancelClick}
        >
          Cancel
        </Button>
        <Button bgColor="green" isLoading={isLoading} type="submit">
          Submit
        </Button>
      </S.ButtonGroup>
    </form>
  );
};

export default Form;
