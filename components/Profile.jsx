import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <>
      <div className=" mt-10">
        <p className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-yellow-300 to-green-300 text-6xl font-bold py-6">
          {name} Profile
        </p>
        <p className=" text-xl text-slate-600">{desc}</p>
      </div>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
        {data.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </>
  );
};

export default Profile;
