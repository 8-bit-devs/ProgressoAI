import { Flashcard } from "@prisma/client";
import React from "react";

type Props = {
  data: Flashcard[];
};

const FlashCard = ({ data }: Props) => {
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default FlashCard;
