import styled from "styled-components";
import { Button } from "./shared/components/Button";

const ButtonIsAdded = styled(Button)`
  width: 30%;
  font-size: 14px;
`;

export const ButtonIsAddedUser = ({ isClicked }) => {
  return (
    <ButtonIsAdded onClick={() => isClicked(true)}>Add user</ButtonIsAdded>
  );
};
