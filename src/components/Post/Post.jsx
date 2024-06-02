import React from "react";

const Post = ({ post, user }) => {
    const {title, body}=post
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By: {user.name}</p>
      
    </div>
  );
};

export default Post;
