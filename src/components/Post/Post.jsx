import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { API_URL } from "../../utils/api";

const Post = ({ post, user }) => {
  const { title, body, id } = post;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const fetchComments = async () => {
    try {
      const res = await fetch(`${API_URL}/comments`);
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
    <div className="border-2 rounded-lg m-5">
      <div className="flex justify-start items-center p-2 bg-gray-100 gap-2">
        <div className=" text-4xl">
          <FaRegUserCircle />
        </div>
        <div className="">
          <p className="text-xl">{user.name}</p>
        </div>
      </div>

      <div className="mx-14 space-y-2 mt-3">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-base">{body}</p>
      </div>

      <button
        className="btn border p-1 rounded-lg bg-green-300 w-1/12 font-semibold m-2"
        onClick={handleComment}
      >
        <div className="flex justify-center items-center gap-2">
          <div>
            <FaRegComment className="text-2xl" />
          </div>
          <div>{comments.length}</div>
        </div>
      </button>

      {showComments && (
        <div className="mx-14 space-y-2 m-3 border p-3 rounded-md">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="border p-1">
                <div className="flex justify-start items-center  gap-2">
                  <div className=" text-2xl">
                    <FaRegUserCircle />
                  </div>
                  <div className="">
                    <p className="text-lg font-semibold">{comment.name}</p>
                  </div>
                </div>
                <p>{comment.body}</p>
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
