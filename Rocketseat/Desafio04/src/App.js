import React from 'react';
import GlobalStyles from './styles/global';

import TopBar from './components/topBar';
import PostsList from './components/postsList';

function App() {
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <PostsList />
    </>
  );
}


export default App;