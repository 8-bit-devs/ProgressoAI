import React from "react";

type Props = {
  id: string;
};

export const Chapter = ({ id }: Props) => {
  return <div>Chapter: {id}</div>;
};
