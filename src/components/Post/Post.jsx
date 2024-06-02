import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Comments from "../Comments/Comments";

const Post = ({ post, user }) => {
  const { title, body } = post;

  return (
    <div className="border-2 rounded-lg m-5 ">
      <div className="flex justify-start items-center p-2 bg-gray-100 gap-2 ">
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

      <Comments postId={post.id} />
    </div>
  );
};

export default Post;
