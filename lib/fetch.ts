import fetch from 'node-fetch';

export const getAllPosts = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts?_limit=10')
  );
  const posts = await res.json();
  return posts;
};

export const getAllTasks = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/todos?_limit=10')
  );
  const tasks = await res.json();
  return tasks;
};
