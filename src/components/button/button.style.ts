import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 60px;
  width: 100%;
  background-color: #104c82;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #104c82;
  transition: all 0.2s linear;

  .dot {
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? props.theme.colors.primaryReverse
        : props.theme.colors.primary} !important;
  }

  &.small {
    padding: 5px 8px;
    padding-top: 7px;
  }

  &.medium {
    padding: 7px 10px;
    padding-top: 9px;
  }

  &.large {
    padding: 10px 13px;
    padding-top: 12px;
  }


  &.success {
    background-color: ${(props) => props.theme.colors.success};
    border-color: ${(props) => props.theme.colors.success};

    &:hover {
      background-color: ${(props) => props.theme.colors.success};
      border-color: ${(props) => props.theme.colors.success};
    }

    &.outlined {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.success};
    }
  }


  &:hover {
    cursor: pointer;
  }

  &.disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    &.small {
      padding: 3px 6px;
      padding-top: 5px;
    }

    &.medium {
      padding: 5px 8px;
      padding-top: 7px;
    }

    &.large {
      padding: 8px 11px;
      padding-top: 10px;
    }
  }
`;
