import { Course } from "@prisma/client";
import { getRecommendation } from "./action/get-video-recommendation";

type Props = {
  data: Course;
};

export const Chapter = async ({ data }: Props) => {
  const result = await getRecommendation(data.topic);

  return <div>Chapter: {JSON.stringify(result, null, 2)}</div>;
};
