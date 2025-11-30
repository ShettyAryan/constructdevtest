"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import Image from "next/image";
import React from "react";
import { useMobileContext } from "@/lib/MobileContext";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/assets/aryan.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/assets/aryan.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/aryan.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/aryan.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/aryan.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/aryan.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/10 bg-gray-50/1 hover:bg-gray-50/5",
        "dark:border-gray-950/10 dark:bg-gray-950/10 dark:hover:bg-gray-950/15"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="img" src={img} loading="lazy" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

 function Testimonials() {
  const { isMobile } = useMobileContext();
  
  return (
    <div
      id="testimonials"
      className="w-full flex flex-col gap-6 mt-12 p-4 rounded-lg border-2 border-[#1a1a1a] bg-black"
    >
      {/* Title Bar */}
      <div className="w-full bg-[#1a1a1a] p-6 rounded-xl border border-[#222]">
        <h2 className="text-white text-2xl md:text-4xl font-medium tracking-tight">
          OUR <span className="text-[#1b4bce]">TESTIMONIALS</span>
        </h2>
      </div>

      {/* Marquee Reviews */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#1a1a1a] p-6 rounded-xl border border-[#222]">
        {isMobile ? (
          // Static display on mobile - no animations
          <>
            <div className="flex flex-col gap-4 w-full">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </div>
          </>
        ) : (
          // Animated marquee on desktop
          <>
            <Marquee pauseOnHover className="[--duration:25s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:25s] mt-2">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </>
        )}

        {/* Gradient Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[18%] bg-linear-to-r from-[#1a1a1a]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[18%] bg-linear-to-l from-[#1a1a1a]"></div>
      </div>
    </div>
  );
}

export default React.memo(Testimonials);