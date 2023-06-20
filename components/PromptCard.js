import Image from "next/image";
import React, { useState } from "react";

const PromptCard = ({
  post,
  handleTagClick,
  handleEditclick,
  handleDeleteClick,
}) => {
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  console.log(post);
  return (
    <div className="bg-slate-100 border shadow-xl rounded-md p-2">
      {/* image, username and email */}
      <div className=" flex justify-start items-start gap-4">
        <Image
          src={post.creator.image}
          alt="user_image"
          height={40}
          width={40}
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        <div className=" flex flex-col justify-center items-start">
          <p className="break-words font-semibold">{post.creator.username}</p>
          <p className="break-all">{post.creator.email}</p>
        </div>
        <div className="cursor-pointer" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copy_icon"
            height={12}
            width={12}
          />
        </div>
      </div>
      <p className="text-slate-700 my-2 ">{post.prompt}</p>
      <p className=" text-sm text-blue-500 cursor-pointer">{post.tag}</p>
    </div>
  );
};

export default PromptCard;
