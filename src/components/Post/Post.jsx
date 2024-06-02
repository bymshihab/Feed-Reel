import React from 'react';

const Post = ({post, user}) => {
    return (
        <div>
            <p>By:{user.name} {`userName: ${user.username}`}</p>
            <p>{post.title}</p>
        </div>
    );
};

export default Post;