import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "./shared/components/Button";
import { Form } from "./shared/components/Form";
import { Input } from "./shared/components/Input";

const UserFormComponent = styled.div`
  margin: 10px auto;
  flex-direction: column;
  justify-content: center;
  border: 2px solid rgba(0, 168, 150, 1);
  padding: 10px;
  border-radius: 10px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 40px;
    color: #4b4b7c;
    text-align: center;
  }
`;

const UserForm = styled(Form)`
  flex-direction: row;
  input {
    margin-right: 5px;
  }
`;

const ButtonUserForm = styled(Button)`
  flex-direction: row;
  width: 80%;
  font-size: 14px;
`;

const InputID = styled(Input)`
  width: 15%;
  &:hover {
    border: 2px solid #e1e1ed;
  }
`;

export const NewUserForm = ({ onClicked }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    onClicked(data);
  });

  return (
    <UserFormComponent>
      <h1>New user</h1>
      <UserForm onSubmit={onSubmit}>
        <InputID {...register("id")} name="id" id="id" />
        <Input {...register("name")} name="name" id="name" />
        <Input {...register("phone")} name="phone" id="phone" />
        <Input {...register("email")} name="email" id="email" />
        <ButtonUserForm>Add</ButtonUserForm>
      </UserForm>
    </UserFormComponent>
  );
};
