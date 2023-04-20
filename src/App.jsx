// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostsList from './postLists';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <PostsList />
      </div>
    </Provider>
  );
};

export default App;
