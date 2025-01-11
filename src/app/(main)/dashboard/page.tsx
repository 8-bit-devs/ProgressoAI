import React from "react";
import { Progress } from "@/components/ui/progress";
import { BlurFade } from "@/components/ui/blur";
import { H3, P } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
  { name: "Web Development", progress: 40 },
  { name: "Data Structures", progress: 60 },
  { name: "Machine Learning", progress: 80 },
  { name: "Data Analytics", progress: 50 },
];

const Dashboard = () => {
  return (
    <BlurFade inView>
      <section className="mx-auto max-w-6xl py-8 pt-4 md:px-4 md:pb-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col space-y-2 text-left">
            <H3 className="text-2xl font-bold tracking-tight md:text-3xl">
              Your Dashboard
            </H3>
            <P className="text-muted-foreground">
              Welcome to your dashboard. Here you can access your progress and
              track your progress towards your goals.
            </P>
          </div>

          <Card className="border-none p-0 shadow-none">
            <CardContent className="space-y-6 px-0">
              {courses.map((course, index) => (
                <div key={index} className="relative rounded-lg p-4">
                  <h2 className="text-lg font-semibold">{course.name}</h2>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Progress: {course.progress}% completed
                  </p>
                  <Progress value={course.progress} className="w-full" />
                  <p className="mt-2 text-xs text-muted-foreground">
                    {100 - course.progress}% pending
                  </p>

                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary/10" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </BlurFade>
  );
};

export default Dashboard;
