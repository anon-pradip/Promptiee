import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className=" flex flex-col mt-10 justify-center items-center">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 text-transparent bg-clip-text">
        {type} Post
      </h1>
      <h2 className=" max-w-2xl text-lg mt-5 text-slate-600">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI powered platform.
      </h2>

      <form className=" mt-10" onSubmit={handleSubmit}>
        <label htmlFor="prompt" className="block mb-2 font-bold">
          Your AI prompt
        </label>
        <textarea
          id="prompt"
          cols={50}
          rows={6}
          className="resize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your prompt..."
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        ></textarea>

        <label htmlFor="tag" className="block mt-5 mb-2 font-bold">
          Tag(#webdevelopment, #product, #idea)
        </label>
        <input
          className="resize block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="#tag"
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
        />
        <div className=" mt-4 w-full flex justify-end gap-5 items-center">
          <Link
            href={"/"}
            className="px-3 py-1 border border-slate-500 rounded-md"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-3 py-1 bg-blue-800 text-white rounded-md"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
