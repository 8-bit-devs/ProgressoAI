import { db } from "@/db";
import { Chapter } from "@/features/chapter/chapter";
import { Course } from "@prisma/client";

type Props = {
  params: Promise<{ id: string; chapterId: string }>;
};

const ChapterPage = async ({ params }: Props) => {
  const { id } = await params;

  const data = await db.course.findUnique({
    where: { id },
    include: { chapters: true },
  });

  return <Chapter data={data as Course} />;
};

export default ChapterPage;
