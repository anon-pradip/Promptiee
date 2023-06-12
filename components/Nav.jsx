"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { signOut, signIn, getProviders, useSession } from "next-auth/react";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const isUser = true;

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);

  return (
    <nav className=" mt-4 flex justify-between items-center">
      <Link href={"/"} className=" flex gap-2  items-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="Main logo"
          height={30}
          width={30}
        />
        <p className=" hidden md:block text-black font-semibold text-xl">
          Promptiee
        </p>
      </Link>

      <div className="hidden sm:flex">
        {isUser ? (
          <div className=" flex justify-center gap-2">
            <Link
              href={"/create-prompt"}
              className=" bg-black border border-black text-white hover:bg-transparent hover:text-black rounded-2xl px-3 py-2"
            >
              Create Post
            </Link>

            <button
              className="
            bg-white 
            border
             border-black
            text-black 
            hover:bg-black 
            hover:text-white rounded-2xl px-3 py-2
            "
              onClick={signOut}
            >
              Sign Out
            </button>

            <Link href={"/profile"}>
              <Image
                src={"/assets/images/logo.svg"}
                height={37}
                width={37}
                alt="Prfile-Pic"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  className=" bg-black border border-black text-white hover:bg-transparent hover:text-black rounded-2xl px-3 py-2"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile navigation */}

      <div className="flex relative sm:hidden">
        {isUser ? (
          <div className=" flex justify-center gap-2">
            <Image
              src={"/assets/images/logo.svg"}
              height={37}
              width={37}
              alt="Prfile-Pic"
              className="rounded-full"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            />
            {toggleDropdown && (
              <div className=" absolute top-10 right-3 bg-white whitespace-nowrap rounded-md flex flex-col justify-center items-center border border-slate-400 space-y-3">
                <Link
                  href={"/profile"}
                  className="bg-slate-50 hover:bg-slate-200 px-2 rounded-t-md text-center w-full "
                >
                  My Profile
                </Link>
                <Link
                  href={"/create-prompt"}
                  className="
                  bg-slate-50 hover:bg-slate-200 px-2 rounded-t-md text-center 
                "
                >
                  Create Post
                </Link>
                <button
                  className="
            bg-white 
            border-t
             border-black
            text-black 
            hover:bg-black 
            hover:text-white px-3 w-full
            "
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={() => signIn(provider.id)}
                  className=" bg-black border border-black text-white hover:bg-transparent hover:text-black rounded-2xl px-3 py-2"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
