import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import { getIsLoading } from "./state/users/selectors";
import { fetchUsers } from "./state/users/thunk";
import { fetchPosts } from "./state/posts/thunk";
import { Users } from "./Users";
import styled from "styled-components";

const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 40px;
  color: #4b4b7c;
  text-align: center;
`;

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header>USERS UI</Header>
      <Users />
    </>
  );
};
