import React, { Component } from 'react';

import Header from './components/Header';
import Post from './components/Post';

import './App.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Ian Carlos',
        avatar: '',
        time: 'Today at 2pm',
        content: 'First Post',
      },
      {
        id: 2,
        name: 'Ian Carlos',
        avatar: '',
        time: 'Today at 2pm',
        content: 'Second Post',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </>
    );
  }
}

export default App;
