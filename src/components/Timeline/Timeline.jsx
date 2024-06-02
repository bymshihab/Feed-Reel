import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/api";
import Post from "../Post/Post";

const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async (url, setState) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setState(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData(`${API_URL}/posts`, setPosts);
    fetchData(`${API_URL}/users`, setUsers);
  }, []);

  const getUserById = (userId) => {
    return users.find((user) => user.id === userId) || {};
  };

  return (
    <div className="flex flex-col items-center">
      <div class="w-1/2 mx-auto px-4">
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <Post
              key={post.id}
              post={post}
              user={getUserById(post.userId)}
            ></Post>
          ))}
      </div>
    </div>
  );
};

export default Timeline;
