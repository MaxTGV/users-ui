import { useSelector } from "react-redux";
import styled from "styled-components";
import { getPosts } from "./state/posts/selectors";

const StyledUpdateData = styled.div`
  width: 100%;
  margin: 0px auto;
  flex-direction: column;
  justify-content: center;
  border: 2px dotted #e3170a;
  padding: 10px;
  border-radius: 10px;
  li {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #4b4b7c;
    text-align: left;
  }
`;

export const Posts = ({ userID }) => {
  const posts = useSelector(getPosts);
  console.log(userID);
  // eslint-disable-next-line eqeqeq
  const filterPosts = posts.filter((post) => post.userId == userID);
  console.log(filterPosts);

  return (
    <StyledUpdateData>
      {filterPosts.map((post) => <li key={post.id}>{post.title}</li>)}
    </StyledUpdateData>
  );
};
