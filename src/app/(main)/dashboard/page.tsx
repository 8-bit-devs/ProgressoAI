"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";

const courses = [
  { name: "Web Development", progress: 40 },
  { name: "Data Structures", progress: 60 },
  { name: "Machine Learning", progress: 80 },
  { name: "Data Analytics", progress: 50 },
];

const Dashboard = () => {
  return (
    <div className="flex-grow bg-white p-6 text-white">
      <div className="rounded-lg bg-white p-6 text-black shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Track Your Progress</h1>

        <div className="space-y-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-md"
            >
              <h2 className="text-lg font-semibold">{course.name}</h2>
              <p className="mb-2 text-sm text-gray-600">
                Progress: {course.progress}% completed
              </p>
              <Progress
                value={course.progress}
                className="w-full bg-gray-200"
              />
              <p className="mt-2 text-xs text-gray-500">
                {100 - course.progress}% pending
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
