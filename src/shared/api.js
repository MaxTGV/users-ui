const server = process.env.REACT_APP_BACKEND_URL;

export const getUsers = () => {
  return fetch(`${server}/users`).then((res) => res.json());
};

export const getPosts = () => {
  return fetch(`${server}/posts`).then((res) => res.json());
};
