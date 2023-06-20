"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className=" mt-5 grid grid-cols-3 gap-6">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div className=" mt-5 flex flex-col justify-center items-center">
      <form>
        <input
          type="text"
          placeholder="Search for a tag or username"
          className=" h-12 px-3 rounded-md shadow-xl"
          onChange={handleSearchChange}
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </div>
  );
};

export default Feed;
