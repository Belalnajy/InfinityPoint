"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

export interface ProfileCardCarouselProps {
  members: TeamMember[];
  variant?: "dark" | "light";
  className?: string;
}

export function ProfileCardCarousel({
  members,
  variant = "dark",
  className,
}: ProfileCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLight = variant === "light";

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % members.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + members.length) % members.length
    );

  const current = members[currentIndex];

  const socialIcons = [
    { icon: Github, url: current.githubUrl, label: "GitHub" },
    { icon: Twitter, url: current.twitterUrl, label: "Twitter" },
    { icon: Linkedin, url: current.linkedinUrl, label: "LinkedIn" },
  ].filter((s) => s.url);

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className="hidden md:flex relative items-center">
        {/* Avatar */}
        <div
          className={cn(
            "w-[420px] h-[420px] rounded-3xl overflow-hidden flex-shrink-0 border",
            isLight
              ? "bg-neutral-200 border-neutral-200 shadow-2xl shadow-neutral-900/10"
              : "bg-neutral-800 border-white/10"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={current.imageUrl}
                alt={current.name}
                width={420}
                height={420}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div
          className={cn(
            "rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1 border",
            isLight
              ? "bg-white border-neutral-100 shadow-neutral-900/10"
              : "bg-neutral-900/90 backdrop-blur-xl border-white/10 shadow-black/40"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-6">
                <h2
                  className={cn(
                    "text-2xl font-bold mb-2",
                    isLight ? "text-neutral-900" : "text-white"
                  )}
                >
                  {current.name}
                </h2>
                <p className="text-sm font-semibold text-primary">
                  {current.title}
                </p>
              </div>

              <p
                className={cn(
                  "text-base leading-relaxed mb-8",
                  isLight ? "text-neutral-600" : "text-white/80"
                )}
              >
                {current.description}
              </p>

              {socialIcons.length > 0 && (
                <div className="flex gap-3">
                  {socialIcons.map(({ icon: IconComponent, url, label }) => (
                    <Link
                      key={label}
                      href={url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 cursor-pointer border",
                        isLight
                          ? "bg-neutral-900 border-neutral-900 hover:bg-primary hover:border-primary"
                          : "bg-white/10 border-white/10 hover:bg-primary hover:border-primary"
                      )}
                      aria-label={label}
                    >
                      <IconComponent
                        className={cn(
                          "w-4 h-4",
                          isLight ? "text-white" : "text-white"
                        )}
                      />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-sm mx-auto text-center">
        {/* Avatar */}
        <div
          className={cn(
            "w-full aspect-square rounded-3xl overflow-hidden mb-6 border",
            isLight
              ? "bg-neutral-200 border-neutral-200 shadow-xl"
              : "bg-neutral-800 border-white/10"
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={current.imageUrl}
                alt={current.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className="px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2
                className={cn(
                  "text-xl font-bold mb-1",
                  isLight ? "text-neutral-900" : "text-white"
                )}
              >
                {current.name}
              </h2>
              <p className="text-sm font-semibold text-primary mb-4">
                {current.title}
              </p>
              <p
                className={cn(
                  "text-sm leading-relaxed mb-6",
                  isLight ? "text-neutral-600" : "text-white/80"
                )}
              >
                {current.description}
              </p>

              {socialIcons.length > 0 && (
                <div className="flex justify-center gap-3">
                  {socialIcons.map(({ icon: IconComponent, url, label }) => (
                    <Link
                      key={label}
                      href={url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer border",
                        isLight
                          ? "bg-neutral-900 border-neutral-900 hover:bg-primary hover:border-primary"
                          : "bg-white/10 border-white/10 hover:bg-primary hover:border-primary"
                      )}
                      aria-label={label}
                    >
                      <IconComponent className="w-4 h-4 text-white" />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={handlePrevious}
          aria-label="Previous member"
          className={cn(
            "w-11 h-11 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer border",
            isLight
              ? "bg-white border-neutral-200 hover:bg-neutral-50 hover:border-primary/30"
              : "bg-white/5 border-white/15 hover:bg-white/10 hover:border-primary/50"
          )}
        >
          <ChevronLeft
            className={cn(
              "w-5 h-5",
              isLight ? "text-neutral-700" : "text-white/70"
            )}
          />
        </button>

        <div className="flex gap-2">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "h-2.5 rounded-full transition-all cursor-pointer",
                i === currentIndex
                  ? "bg-primary w-6"
                  : isLight
                  ? "bg-neutral-300 hover:bg-neutral-400 w-2.5"
                  : "bg-white/25 hover:bg-white/40 w-2.5"
              )}
              aria-label={`Go to member ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next member"
          className={cn(
            "w-11 h-11 rounded-full shadow-md flex items-center justify-center transition-all cursor-pointer border",
            isLight
              ? "bg-white border-neutral-200 hover:bg-neutral-50 hover:border-primary/30"
              : "bg-white/5 border-white/15 hover:bg-white/10 hover:border-primary/50"
          )}
        >
          <ChevronRight
            className={cn(
              "w-5 h-5",
              isLight ? "text-neutral-700" : "text-white/70"
            )}
          />
        </button>
      </div>
    </div>
  );
}
