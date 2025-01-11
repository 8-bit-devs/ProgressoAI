"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flashcard } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";

interface FlashCardProps {
  data: Flashcard[];
}

const FlashCard: React.FC<FlashCardProps> = ({ data }) => {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {data.map((card) => (
        <div
          key={card.id}
          className="perspective-1000 h-64 w-full cursor-pointer"
          onClick={() => toggleFlip(card.id)}
        >
          <motion.div
            className="relative h-full w-full"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateY: flipped[card.id] ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }}
            >
              <CardContent className="flex h-full items-center justify-center p-6 bg-background">
                <h3 className="text-xl font-semibold text-center">
                  {card.title}
                </h3>
              </CardContent>
            </Card>

            <Card
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <CardContent className="flex h-full items-center justify-center p-6 bg-background">
                <p className="text-sm overflow-y-auto max-h-full">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default FlashCard;
