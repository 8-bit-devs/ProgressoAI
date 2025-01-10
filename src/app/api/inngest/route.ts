import { inngest } from "@/features/inngest/client";
import { triggerFlashcards } from "@/features/inngest/function";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [triggerFlashcards],
});
