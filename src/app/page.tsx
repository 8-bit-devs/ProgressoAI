import { BlurFade } from "@/components/ui/blur";
import { Button } from "@/components/ui/button";
import { inter } from "@/features/font";
import { Nav } from "@/features/root/nav-bar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center lg:px-8">
        <div className="mx-8 mt-3 h-full w-full rounded-3xl">
          <main className="mx-auto h-full max-w-6xl px-4 pb-3 pt-12 md:py-12">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 w-full text-center">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                  Progress AI
                </h1>

                <p
                  className={cn(
                    "mx-auto mb-8 max-w-lg text-lg font-normal text-muted-foreground md:text-xl",
                    inter.variable,
                  )}
                >
                  Progress AI is a platform that allows you to track your
                  progress in your learning journey.
                </p>

                <Button
                  className="rounded-2xl border border-primary/80 px-8 py-4 font-medium shadow-inner"
                  asChild
                >
                  <Link href="/signin">Get started for free</Link>
                </Button>
              </div>
            </BlurFade>
          </main>
        </div>
      </div>
    </div>
  );
}
