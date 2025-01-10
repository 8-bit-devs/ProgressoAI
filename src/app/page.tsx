import { Button } from "@/components/ui/button";
import { Nav } from "@/features/root/nav-bar";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ZoomParallax from "@/components/ui/zoom-parallax";

export default function Hero() {
  return (
    <>
      <Nav />

      <div className="bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden pt-20 md:pt-36">
          <h1 className="relative z-10 mx-auto mt-1 max-w-6xl text-center text-2xl font-semibold text-black dark:text-white md:text-4xl lg:text-8xl">
            Unleash the full potential of{" "}
            <span className="bg-gradient-to-b from-[#CB92FF] to-[#9333EA] bg-clip-text font-extrabold text-transparent">
              AI
            </span>
          </h1>
          <p className="relative z-10 mx-auto mt-10 max-w-3xl text-center text-base font-semibold text-gray-500 dark:text-neutral-400 md:text-xl">
            Progresso AI is an AI-powered LMS tool that simplifies learning,
            personalizes experiences, and boosts productivity.
          </p>
          <div className="relative z-10 mb-12 mt-10 flex items-center justify-center gap-4">
            <Button
              className="flex items-center gap-2 rounded-full py-6"
              size={"lg"}
            >
              Get started
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-3 w-3 stroke-[1px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
            <Button
              className="flex items-center gap-2 rounded-full py-6"
              size={"lg"}
            >
              Github Repo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
              >
                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
              </svg>
            </Button>
          </div>
          <div>
            <ZoomParallax />
            <div className="flex h-[30vh] w-full items-start justify-center">
              <h1 className="text-center text-4xl capitalize">
                <span className="bg-gradient-to-b from-[#CB92FF] to-[#9333EA] bg-clip-text font-extrabold text-transparent">
                  Empowering the Future of Learning with Progresso AI.
                </span>
              </h1>
            </div>
          </div>
          <footer
            id="footer"
            className="mt-20 hidden w-full px-8 pt-8 sm:block"
          >
            <div className="">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <nav>
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-8 sm:grid-cols-3"
                  >
                    <li>
                      <div className="font-display text-sm font-semibold tracking-wider">
                        Pages
                      </div>
                      <ul className="mt-4 text-sm text-muted-foreground">
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            All Products
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Categories
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="/profile"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="/contact"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-display text-sm font-semibold tracking-wider">
                        Socials
                      </div>
                      <ul className="mt-4 text-sm text-muted-foreground">
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Facebook
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Instagram
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Twitter
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            LinkedIn
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-display text-sm font-semibold tracking-wider">
                        Legal
                      </div>
                      <ul className="mt-4 text-sm text-muted-foreground">
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Privacy Policy
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Terms of Service
                          </Link>
                        </li>
                        <li className="mt-4">
                          <Link
                            href="#"
                            className="transition hover:text-neutral-950 dark:hover:text-white"
                          >
                            Cookie Policy
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div className="flex lg:justify-end">
                  <form className="max-w-sm">
                    <h2 className="font-display text-sm font-semibold tracking-wider">
                      Sign up for our newsletter
                    </h2>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Subscribe to get the latest news, articles, resources and
                      inspiration.
                    </p>
                    <div className="relative mt-6">
                      <input
                        placeholder="Email address"
                        autoComplete="email"
                        aria-label="Email address"
                        className="block w-full rounded-2xl border bg-transparent py-4 pl-6 pr-20 text-base/6 transition"
                        type="email"
                      />
                      <div className="absolute inset-y-1 right-1 flex justify-end">
                        <Button
                          type="submit"
                          aria-label="Submit"
                          className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-white/90"
                        >
                          <ArrowRight size={16} />
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t pt-12">
                <Link href={"/"} className="flex items-center justify-start">
                  <div className="logo flex items-center justify-start gap-1">
                    <Image
                      alt="logo"
                      loading="lazy"
                      width={30}
                      height={30}
                      decoding="async"
                      data-nimg="1"
                      src={
                        "https://kaif-ui.vercel.app/logo/logo-light-theme.svg"
                      }
                      className="size-[2rem] rounded"
                    />
                    <h1 className="text-xl font-semibold">Progresso AI</h1>
                  </div>
                </Link>
                <p className="text-sm text-muted-foreground">
                  © 8-bit Coders 2025
                </p>
              </div>
            </div>
          </footer>
          <div className="h-[5rem] w-full sm:hidden"></div>
        </div>
      </div>
    </>
  );
}
