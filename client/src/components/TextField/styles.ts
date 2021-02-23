import styled, { css, DefaultTheme } from 'styled-components';

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
};

const inputModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall};
  `,
};

export const Input = styled.input<InputProps>`
  ${({ theme, hasIcon }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ${hasIcon && inputModifiers.withIcon(theme)};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2.rem;
    color: ${theme.colors.gray};

    & > svg {
      width: 2rem;
    }
  `}
`;

export const Wrapper = styled.div``;
