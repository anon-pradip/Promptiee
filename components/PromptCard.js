import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const PromptCard = ({
  post,
  handleTagClick,
  handleEditclick,
  handleDeleteClick,
}) => {
  const [copied, setCopied] = useState("");
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="bg-slate-100 border shadow-xl rounded-md p-2 max-w-max">
      {/* image, username and email */}
      <div className=" flex justify-start items-start gap-4">
        <Image
          src={post.creator?.image}
          alt="user_image"
          height={40}
          width={40}
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        <div className=" flex flex-col justify-center items-start">
          <p className="break-all font-semibold">{post?.creator?.username}</p>
          <p className="break-all text-slate-500">{post?.creator?.email}</p>
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
      <p className="text-slate-700 my-2 break-all">{post.prompt}</p>
      <p className=" text-sm text-blue-500 cursor-pointer break-all">
        {post.tag}
      </p>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className=" mt-4 flex justify-between items-center">
          <p
            className="px-3 py-1 rounded-md border border-slate-400"
            onClick={handleEditclick}
          >
            Edit
          </p>
          <p
            className="px-3 py-1 rounded-md border border-slate-400 bg-red-600 text-white"
            onClick={handleDeleteClick}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
