import fetch from 'node-fetch';
import { POST } from '../types/Types';

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

export const getAllPostIds = async () => {
  const res = await fetch(
    new URL('https://jsonplaceholder.typicode.com/posts?_limit=10')
  );
  const posts = await res.json();
  return posts.map((post: POST) => {
    return { params: { id: String(post.id) } };
  });
};

export const getPostData = async (id: string) => {
  const res = await fetch(
    new URL(`https://jsonplaceholder.typicode.com/posts/${id}`)
  );
  const post = await res.json();
  return { post };
};
