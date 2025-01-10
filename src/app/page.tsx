import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Footer,
  FooterColumn,
  FooterContent,
  FooterBottom,
} from "@/components/ui/footer";
import Glow from "@/components/ui/glow";
import {
  Item,
  ItemDescription,
  ItemIcon,
  ItemTitle,
} from "@/components/ui/item";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Section } from "@/components/ui/section";
import Logo from "@/features/global/logo";
import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl bg-background text-foreground">
      <Section className="fade-bottom relative overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                New version of Launch UI is out!
              </span>
            </Badge>
            <h1 className="animate-appear relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Give your big idea the website it deserves
            </h1>
            <p className="text-md animate-appear relative z-10 max-w-[550px] font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
              Landing page components built with React, Shadcn/ui and Tailwind
              that will make your website feel premium.
            </p>
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
                <Button variant="default" size="lg" asChild>
                  <Link href="/signin">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="relative pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup type="responsive">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1735752430707-28b5048814e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt="Launch UI app screenshot"
                    width={1248}
                    height={765}
                  />
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] sm:h-[256px]"></div>
      </Section>

      <Section>
        <div className="max-w-container relative mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <ScanFaceIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Accessibility first
              </ItemTitle>
              <ItemDescription>
                Fully WCAG 2.0 compliant, made with best a11y practices
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <MonitorSmartphoneIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Responsive design
              </ItemTitle>
              <ItemDescription>
                Looks and works great on any device and screen size
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <EclipseIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Light and dark mode
              </ItemTitle>
              <ItemDescription>
                Seamless switching between color schemes, 6 themes included
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <BlocksIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Easy to customize
              </ItemTitle>
              <ItemDescription>
                Flexible options to match your product or brand
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <FastForwardIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Top-level performance
              </ItemTitle>
              <ItemDescription>
                Made for lightning-fast load times and smooth interactions
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <RocketIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Production ready
              </ItemTitle>
              <ItemDescription>
                Thoroughly tested and launch-prepared
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <LanguagesIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                Made for localisation
              </ItemTitle>
              <ItemDescription>
                Easy to implement support for multiple languages and regions
              </ItemDescription>
            </Item>
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <SquarePenIcon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                CMS friendly
              </ItemTitle>
              <ItemDescription>
                Built to work with your any headless content management system
              </ItemDescription>
            </Item>
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-8">
          <h2 className="text-center text-3xl font-semibold sm:text-5xl">
            Questions and Answers
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why building a great landing page is critical for your business?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                  In today&apos;s AI-driven world, standing out is harder than
                  ever. While anyone can build a product, a professional landing
                  page makes the difference between success and failure.
                </p>
                <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                  Launch UI helps you ship faster without compromising on
                  quality.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why use Launch UI instead of a no-code tool?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[600px] text-muted-foreground">
                  No-code tools lock you into their ecosystem with recurring
                  fees and limited control. They often come with performance
                  issues and make it difficult to integrate with your product.
                </p>
                <p className="mb-4 max-w-[600px] text-muted-foreground">
                  You can&apos;t even change your hosting provider and basic
                  things like web analytics come as extra costs and paid
                  add-ons.
                </p>
                <p className="mb-4 max-w-[600px] text-muted-foreground">
                  What might seem like a convenient solution today could paint
                  you into a corner tomorrow, limiting your ability to scale and
                  adapt. Launch UI gives you full control of your code while
                  maintaining professional quality.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How Launch UI is different from other components libraries and
                templates?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  Launch UI stands out with premium design quality and
                  delightful touches of custom animations and illustrations.
                </p>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  All components are carefully crafted to help position your
                  product as a professional tool, avoiding the generic template
                  look.
                </p>
                <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                  Unlike many libraries that rely on outdated CSS practices and
                  old dependencies, Launch UI is built with modern technologies
                  and best practices in mind.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Why exactly does it mean that &quot;The code is yours&quot;?
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  The basic version of Launch UI is open-source and free
                  forever, under a do-whatever-you-want license.
                </p>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  The pro version that contains more components and options is a
                  one-time purchase that gives you lifetime access to all
                  current and future content. Use it for unlimited personal and
                  commercial projects - no recurring fees or restrictions.
                </p>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  For complete details about licensing and usage rights, check
                  out{" "}
                  <Link href="/pricing" className="text-primary underline">
                    the pricing page
                  </Link>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Are Figma files included?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  Yes! The complete Launch UI template is available for free on
                  the{" "}
                  <Link
                    href="https://www.figma.com/community/file/1420131743903900629/launch-ui-landing-page-components-ui-kit"
                    className="text-primary underline"
                  >
                    Figma community
                  </Link>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Can I get a discount?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  Actually, yes! I&apos;m looking for beta testers and great
                  examples of Launch UI in action to feature on the website.
                  Here&apos;s the deal: you provide feedback to help me improve
                  the product, and in return, you get a huge discount plus a
                  solid backlink for your product.
                </p>
                <p className="mb-4 max-w-[580px] text-muted-foreground">
                  If this interests you, don&apos;t hesitate to{" "}
                  <Link
                    href={"mailto:abc@xyz.com"}
                    className="text-primary underline"
                  >
                    reach out by email
                  </Link>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>
      <Section className="group relative overflow-hidden">
        <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
          <h2 className="text-3xl font-semibold sm:text-5xl">Start building</h2>
          <Button variant="default" size="lg" asChild>
            <Link href="/signin">Get Started</Link>
          </Button>
        </div>
        <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
          <Glow variant="bottom" />
        </div>
      </Section>
      <footer className="w-full bg-background px-4">
        <div className="max-w-container mx-auto">
          <Footer>
            <FooterContent>
              <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
                <div className="flex items-center gap-2">
                  <Logo />
                  <h3 className="text-xl font-bold">Launch UI</h3>
                </div>
              </FooterColumn>

              <FooterColumn>
                <h3 className="text-md pt-1 font-semibold">Contact</h3>
                <Link href={"#"} className="text-sm text-muted-foreground">
                  Discord
                </Link>
                <Link href={"#"} className="text-sm text-muted-foreground">
                  Twitter
                </Link>
                <Link href={"#"} className="text-sm text-muted-foreground">
                  Github
                </Link>
              </FooterColumn>
            </FooterContent>
            <FooterBottom>
              <div>
                &c; {new Date().getFullYear()} | 8 Bit Coders. All rights
                reserved
              </div>
              <div className="flex items-center gap-4">
                <ModeToggle />
              </div>
            </FooterBottom>
          </Footer>
        </div>
      </footer>
    </main>
  );
}
