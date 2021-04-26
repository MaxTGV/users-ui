import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import remove from "./img/remove.svg";
import update from "./img/update.svg";
import { Posts } from "./Posts";
import { setUsers } from "./state/users/actions";
import { getUsers } from "./state/users/selectors";
import { UpdateUserItem } from "./UpdateUserItem";

const StyledUserItem = styled.div`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #e1e1ed;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const UserData = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 40px;
    color: #4b4b7c;
  }
`;
const UserImage = styled.div`
  cursor: pointer;
`;

export const UserItem = ({ user }) => {
  const [isViewPosts, setIsViewPosts] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const { id, name, phone, email } = user;

  const removeUser = (id) => {
    const newUsersList = users.filter((user) => user.id !== id);
    dispatch(setUsers(newUsersList));
  };

  return (
    <>
      <StyledUserItem>
        <UserData onClick={() => setIsViewPosts(!isViewPosts)}>
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </UserData>
        <UserImage>
          <img
            src={update}
            alt="update"
            onClick={() => setIsSelected(!isSelected)}
          />
          <img src={remove} alt="remove" onClick={() => removeUser(id)} />
        </UserImage>
      </StyledUserItem>
      {isViewPosts && <Posts userID={id} />}
      {isSelected && <UpdateUserItem user={user} isSelected={setIsSelected} />}
    </>
  );
};
