import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Post = ({ post, user }) => {
  const { title, body, id } = post;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState([false]);

  const fetchComments = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      const data = await res.json();
      const postComments = data.filter((comment) => comment.postId === id);
      setComments(postComments);
      console.log(postComments);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  const handleComment = () => {
    setShowComments(!showComments);
  };

  return (
    <div className=" border-2 ">
      <div className="flex justify-start items-center border-2 gap-2">
        <div className=" border-2 text-4xl">
          <FaRegUserCircle />
        </div>
        <div className="border-2">
          <p className="text-xl">{user.name}</p>
        </div>
      </div>

      <div className="mx-14 space-y-2 mt-3">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-base">{body}</p>
      </div>

      <button
        className="btn border-2 bg-green-300 w-full font-semibold"
        onClick={handleComment}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && (
        <div className="mx-14 space-y-2 mt-3">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.body}</p>
                <p>By: {comment.name}</p>
              </div>
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
