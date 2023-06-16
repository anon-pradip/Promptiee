import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
  const { prompt, userId, tag } = await req.json();
  await connectToDB();
};
