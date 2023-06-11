import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" mt-10 flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl md:text-6xl font-extrabold leading-relaxed]">
        Explore & Exchange
        <br className="max-md:hidden" />
        <span className=" bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 bg-clip-text text-transparent text-4xl md:text-6xl font-extrabold text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className=" mt-2 text-slate-500 leading-loose  text-center">
        Promptiee is an open source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      {/* feed page */}
      <Feed />
    </section>
  );
}
