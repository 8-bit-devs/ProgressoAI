"use client";

import { useUser } from "@/hooks/use-user";
import React from "react";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
    </div>
  );
};

export default Dashboard;
