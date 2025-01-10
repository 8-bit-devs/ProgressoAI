import { Chapter } from "@/features/chapter/chapter";
import React from "react";

type Props = {
  params: Promise<{ chapterId: string }>;
};

const ChapterPage = async ({ params }: Props) => {
  const { chapterId } = await params;
  return <Chapter id={chapterId} />;
};

export default ChapterPage;
