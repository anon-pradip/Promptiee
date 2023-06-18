"use client";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const { data: session } = useSession();

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user?.id,
        }),
      });

      if (response.ok) {
        router.push("/");
        setPost({
          prompt: "",
          tag: "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </div>
  );
};

export default CreatePrompt;
