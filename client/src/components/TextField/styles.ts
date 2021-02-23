import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from '.';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

type InputProps = {
  hasIcon?: boolean;
} & IconPositionProps;

const inputModifiers = {
  withIcon: (
    theme: DefaultTheme,
    iconPosition: IconPositionProps['iconPosition']
  ) => css`
    padding-${iconPosition!}: ${theme.spacings.xsmall};
  `,
};

export const Input = styled.input<InputProps>`
  ${({ theme, hasIcon, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ${hasIcon && inputModifiers.withIcon(theme, iconPosition!)};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2.rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2rem;
    }
  `}
`;

export const Wrapper = styled.div``;
