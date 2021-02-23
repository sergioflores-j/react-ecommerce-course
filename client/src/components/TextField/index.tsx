import { useState, InputHTMLAttributes } from 'react';

import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  label?: string;
  labelFor?: string;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  iconPosition = 'left',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          {...props}
          hasIcon={!!icon}
          iconPosition={iconPosition}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextField;
