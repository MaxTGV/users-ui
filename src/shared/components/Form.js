import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    display: none;
  }
`;

export const Form = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};
