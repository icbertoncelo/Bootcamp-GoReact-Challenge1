import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = (props) => {
  const {
    content, name, avatar, time,
  } = props.data;

  return (
    <div className="post">
      <PostHeader name={name} avatar={avatar} time={time} />
      <p>{content}</p>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
