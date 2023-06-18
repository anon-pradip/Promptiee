import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
  const { prompt, userId, tag } = await req.json();
  try {
    await connectToDB();
    const newPrompt = await new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(newPrompt, { status: 201 });
  } catch (error) {
    return new Response("Failed to create Prompt!", { status: 500 });
  }
};
