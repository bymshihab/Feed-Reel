import React, { useEffect, useState } from "react";
import { FaRegComment, FaRegUserCircle } from "react-icons/fa";
import { API_URL } from "../../utils/api";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const fetchComments = async () => {
    try {
      const res = await fetch(`${API_URL}/comments`);
      const data = await res.json();
      const postComments = data.filter((comment) => comment.postId === postId);
      setComments(postComments);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleComment = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <button
        className="btn border p-1 rounded-lg bg-green-300 w-1/4 md:w-1/4 lg:w-1/12 xl:w-1/12 font-semibold m-2"
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
        <div className="space-y-2 m-3 border p-3 rounded-md ">
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

export default Comments;
