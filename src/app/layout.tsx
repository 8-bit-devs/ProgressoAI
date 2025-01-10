import { TooltipProvider } from "@/components/ui/tooltip";
import { geistSans } from "@/features/font";
import { cn } from "@/lib/utils";
import ClientProvider from "@/providers/client-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { getServerSession } from "next-auth";
import { Toaster } from "sonner";
import { authOptions } from "./api/auth/[...nextauth]/auth";
import Chatbot from "@/components/ChatBot";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-background text-primary antialiased",
          geistSans.variable,
          geistSans.className,
        )}
      >
        <ClientProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Toaster />

              {children}
              <Chatbot />
            </TooltipProvider>
          </ThemeProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
