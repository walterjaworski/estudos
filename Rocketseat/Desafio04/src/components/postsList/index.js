import React from 'react';
import Post from '../post/index';

import { PostsContainer } from './styles';

export default function postsList() {
  return (
    <>
      <PostsContainer>
        <Post />
        <Post />
      </PostsContainer>
    </>
  );
}
