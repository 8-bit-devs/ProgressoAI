import CustomCursor from "@/components/ui/CustomCursor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/features/root/nav-bar";
import {
  ArrowRight,
  Brain,
  MessageSquare,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const accordionData = [
  {
    value: "item-1",
    question: "How does AI personalize my learning?",
    answer:
      "Our AI analyzes your learning style, pace, and preferences to create a customized curriculum that adapts in real-time to your progress and needs.",
  },
  {
    value: "item-2",
    question: "What subjects are available?",
    answer:
      "We offer a wide range of subjects including mathematics, sciences, languages, programming, and more. Our AI-powered platform is constantly expanding its knowledge base.",
  },
  {
    value: "item-3",
    question: "How much does it cost?",
    answer:
      "We offer flexible pricing plans starting with a free tier. Premium features are available through our monthly or annual subscription plans.",
  },
  {
    value: "item-4",
    question: "Can I track my progress?",
    answer:
      "Yes, our platform provides detailed analytics and progress tracking. You can monitor your learning journey, set goals, and receive regular progress reports.",
  },
];

export default function Hero() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
        <Nav />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden px-4 pt-20 sm:px-6 md:pt-40 lg:px-8">
          <h1 className="relative z-10 mx-auto mt-6 max-w-6xl text-center text-2xl font-semibold text-black dark:text-white md:text-4xl lg:text-8xl">
            Empowering Your Learning Journey with AI
          </h1>
          <p className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-base text-neutral-700 dark:text-neutral-400 md:text-xl">
            Tailored Courses, Smarter Insights, Faster Growth
          </p>
          <div className="relative z-10 mt-10 flex items-center justify-center gap-4">
            <Button
              className="flex items-center gap-2 rounded-full py-6"
              size="lg"
            >
              Get started for free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-full py-6"
              size="lg"
            >
              Watch demo
            </Button>
          </div>
          <div className="relative mt-20 rounded-[32px] border border-neutral-200 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1]"></div>
            <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
              <Image
                alt="header"
                loading="lazy"
                width={1920}
                height={1080}
                decoding="async"
                className="rounded-[20px]"
                src="/blocks/mail-dark.webp"
              />
            </div>
          </div>
        </div>

        <section
          className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
          id="features"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Everything you need to excel
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Comprehensive features designed to enhance your learning
              experience
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="AI-Powered Learning"
              description="Personalized learning paths adapted to your pace and style"
              icon={<Brain className="h-6 w-6 text-purple-600" />}
              className="lg:col-span-2"
            />
            <FeatureCard
              title="Progress Tracking"
              description="Real-time insights into your learning journey"
              icon={<Target className="h-6 w-6 text-purple-600" />}
              className="lg:row-span-2"
            />
            <FeatureCard
              title="Interactive Sessions"
              description="Engage with AI tutors for immediate feedback"
              icon={<MessageSquare className="h-6 w-6 text-purple-600" />}
            />
            <FeatureCard
              title="Smart Assessment"
              description="Adaptive testing that grows with you"
              icon={<Zap className="h-6 w-6 text-purple-600" />}
            />
            <FeatureCard
              title="Collaborative Learning"
              description="Connect with peers and learn together"
              icon={<Users className="h-6 w-6 text-purple-600" />}
              className="lg:col-span-2"
            />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Everything you need to know about our AI-powered learning platform
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {accordionData.map((item) => (
              <AccordionItem
                value={item.value}
                key={item.value}
                className="border bg-background/10 px-4 py-1 backdrop-blur-md first:rounded-t-lg last:rounded-b-lg"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="bg-purple-600 py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                  Ready to transform your learning?
                </h2>
                <p className="mb-8 text-lg text-purple-100">
                  Join thousands of learners who are already experiencing the
                  future of education.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-purple-50"
                  >
                    Get started for free
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-purple-600"
                  >
                    Schedule a demo
                  </Button>
                </div>
              </div>
              <div className="relative h-64 w-full max-w-sm lg:h-96">
                <Image
                  src="/placeholder.svg"
                  alt="Learning illustration"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <h3 className="text-sm font-semibold">Product</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      API
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Resources</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 hover:text-purple-600 dark:text-neutral-400"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
                © {new Date().getFullYear()} Progresso AI | All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>

        <CustomCursor color="#9333EA" glow={true} size={20} duration={0.5} />
      </div>
    </>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-xl border border-neutral-200 bg-background bg-white p-6 backdrop-blur-md dark:border-neutral-800 dark:bg-black ${className}`}
    >
      <div className="mb-4 inline-block rounded-lg bg-purple-100 p-2 dark:bg-purple-900/20">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}
