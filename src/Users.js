import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./state/users/selectors";
import { UserItem } from "./UserItem";
import styled from "styled-components";
import { setNewUser } from "./state/users/actions";
import { ButtonIsAddedUser } from "./ButtonIsAddedUser";
import { Search } from "./Search";
import { NewUserForm } from "./NewUserForm";

const StyledContacts = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
  margin-top: 16px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
`;

const FuncElements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Users = () => {
  const [isAddedUser, setIsAddedUser] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  const onChange = (val) => {
    setValue(val);
  };

  const onClicked = (user) => {
    setIsAddedUser(!isAddedUser);
    dispatch(setNewUser(user));
  };

  const searchUser = users.filter((user) =>
    user.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <StyledContacts>
      <FuncElements>
        <Search value={value} onChange={onChange} />
        <ButtonIsAddedUser isClicked={setIsAddedUser} />
      </FuncElements>
      {isAddedUser && <NewUserForm onClicked={onClicked} />}
      {users &&
        searchUser.map((user) => <UserItem key={user.id} user={user} />)}
    </StyledContacts>
  );
};
