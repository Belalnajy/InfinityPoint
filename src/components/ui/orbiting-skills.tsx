"use client";
import React, { memo } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiNginx,
  SiVercel,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";
import type { IconType } from "react-icons";

// --- Types ---
interface Skill {
  id: string;
  label: string;
  color: string;
  icon: IconType;
}

interface SkillCategory {
  name: string;
  color: string;
  direction: "left" | "right";
  speed: number;
  skills: Skill[];
}

// --- Core Tech Skills Only ---
const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    color: "#e30613",
    direction: "left",
    speed: 30,
    skills: [
      { id: "python", label: "Python", color: "#3776AB", icon: SiPython },
      { id: "javascript", label: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
      { id: "typescript", label: "TypeScript", color: "#3178C6", icon: SiTypescript },
      { id: "html5", label: "HTML5", color: "#E34F26", icon: SiHtml5 },
      { id: "css3", label: "CSS3", color: "#1572B6", icon: SiCss },
    ],
  },
  {
    name: "Frameworks & Libraries",
    color: "#06B6D4",
    direction: "right",
    speed: 40,
    skills: [
      { id: "django", label: "Django", color: "#092E20", icon: SiDjango },
      { id: "flask", label: "Flask", color: "#FFFFFF", icon: SiFlask },
      { id: "nextjs", label: "Next.js", color: "#FFFFFF", icon: SiNextdotjs },
      { id: "react", label: "React", color: "#61DAFB", icon: SiReact },
      { id: "nodejs", label: "Node.js", color: "#339933", icon: SiNodedotjs },
      { id: "expressjs", label: "Express", color: "#FFFFFF", icon: SiExpress },
      { id: "nestjs", label: "NestJS", color: "#E0234E", icon: SiNestjs },
      { id: "tailwindcss", label: "Tailwind", color: "#06B6D4", icon: SiTailwindcss },
      { id: "bootstrap", label: "Bootstrap", color: "#7952B3", icon: SiBootstrap },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    color: "#9333EA",
    direction: "left",
    speed: 35,
    skills: [
      { id: "docker", label: "Docker", color: "#2496ED", icon: SiDocker },
      { id: "git", label: "Git", color: "#F05032", icon: SiGit },
      { id: "github", label: "GitHub", color: "#FFFFFF", icon: SiGithub },
      { id: "linux", label: "Linux", color: "#FCC624", icon: SiLinux },
      { id: "nginx", label: "Nginx", color: "#009639", icon: SiNginx },
      { id: "vercel", label: "Vercel", color: "#FFFFFF", icon: SiVercel },
    ],
  },
  {
    name: "Databases & APIs",
    color: "#F59E0B",
    direction: "right",
    speed: 32,
    skills: [
      { id: "postgresql", label: "PostgreSQL", color: "#4169E1", icon: SiPostgresql },
      { id: "mysql", label: "MySQL", color: "#4479A1", icon: SiMysql },
      { id: "mongodb", label: "MongoDB", color: "#47A248", icon: SiMongodb },
      { id: "sqlite", label: "SQLite", color: "#003B57", icon: SiSqlite },
      { id: "prisma", label: "Prisma", color: "#5A67D8", icon: SiPrisma },
      { id: "socketio", label: "Socket.io", color: "#FFFFFF", icon: SiSocketdotio },
    ],
  },
];

// --- Single Skill Card ---
const SkillCard = memo(({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;

  return (
    <div
      className="group relative flex-shrink-0 flex items-center gap-3.5 px-5 py-3.5
                 bg-white/[0.04] backdrop-blur-md border border-white/[0.08]
                 rounded-2xl cursor-default select-none
                 transition-all duration-300
                 hover:bg-white/[0.08] hover:border-white/20 hover:scale-105 hover:-translate-y-1
                 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 20px ${skill.color}15, 0 0 25px ${skill.color}12`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-9 h-9 rounded-xl flex items-center justify-center
                   transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${skill.color}15`,
          border: `1px solid ${skill.color}30`,
        }}
      >
        <Icon
          size={20}
          color={skill.color}
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_6px_var(--icon-glow)]"
          style={{ "--icon-glow": `${skill.color}80` } as React.CSSProperties}
        />
      </div>

      {/* Label */}
      <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
        {skill.label}
      </span>
    </div>
  );
});
SkillCard.displayName = "SkillCard";

// --- Marquee Row ---
const MarqueeRow = memo(({ category }: { category: SkillCategory }) => {
  const duplicated = [...category.skills, ...category.skills, ...category.skills, ...category.skills];
  const animationName = category.direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="relative group/row">
      {/* Category header */}
      <div className="flex items-center gap-2.5 mb-3 px-1">
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: category.color,
            boxShadow: `0 0 8px ${category.color}80`,
          }}
        />
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
          {category.name}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        <span className="text-[10px] font-mono text-neutral-600">
          {category.skills.length}
        </span>
      </div>

      {/* Scrolling container — force LTR so translateX works in RTL layouts */}
      <div className="relative overflow-hidden" dir="ltr" style={{ direction: "ltr" }}>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />

        {/* Marquee track */}
        <div
          className="flex gap-3 w-max group-hover/row:[animation-play-state:paused]"
          style={{
            animation: `${animationName} ${category.speed}s linear infinite`,
          }}
        >
          {duplicated.map((skill, i) => (
            <SkillCard key={`${skill.id}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
});
MarqueeRow.displayName = "MarqueeRow";

// --- Stats Bar ---
const StatsBar = memo(() => {
  const totalSkills = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);
  const stats = [
    { value: `${totalSkills}+`, label: "Technologies" },
    { value: `${skillCategories.length}`, label: "Domains" },
    { value: "∞", label: "Possibilities" },
  ];

  return (
    <div className="flex justify-center gap-8 md:gap-16 mt-12 pt-8 border-t border-white/[0.06]">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-gradient-primary">
            {stat.value}
          </div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
});
StatsBar.displayName = "StatsBar";

// --- Main Component ---
export default function OrbitingSkills() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      {skillCategories.map((category) => (
        <MarqueeRow key={category.name} category={category} />
      ))}
      <StatsBar />

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}
