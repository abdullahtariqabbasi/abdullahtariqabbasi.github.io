"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/content";
import ProjectModal from "./ProjectModal";

type Filter = "all" | "ai" | "web";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "ai", label: "AI & ML" },
  { id: "web", label: "Web Platforms" },
];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const visible = projects.filter((p) => filter === "all" || p.type === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="reveal flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="section-eyebrow">
              <span className="h-px w-8 bg-brand-400" />
              02 — Selected Work
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Products I&apos;ve{" "}
              <span className="text-gradient">designed &amp; shipped.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            A blend of live web platforms and applied AI research — each solving
            a real-world problem.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const count =
              f.id === "all"
                ? projects.length
                : projects.filter((p) => p.type === f.id).length;
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-brand-400/50 bg-brand-500/15 text-brand-200"
                    : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/25 hover:text-slate-200"
                }`}
              >
                {f.label}
                <span
                  className={`font-mono text-[11px] ${
                    isActive ? "text-brand-300" : "text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              onOpen={() => setActive(p)}
              delay={i * 60}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
  delay,
}: {
  project: Project;
  onOpen: () => void;
  delay: number;
}) {
  // Video projects use their poster frame; web projects use the first gallery image.
  const thumb = project.poster ?? project.images?.[0] ?? "";

  return (
    <article
      className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25"
      data-reveal-delay={delay}
    >
      {/* Thumbnail */}
      <button
        onClick={onOpen}
        className="relative block aspect-[16/10] w-full overflow-hidden"
        aria-label={`Open ${project.name} details`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb}
          alt={`${project.name} preview`}
          className="h-full w-full object-cover object-top opacity-90 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

        {/* top-left badges */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {project.live && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-ink-950/70 px-2.5 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
              </span>
              LIVE
            </span>
          )}
          {project.type === "ai" && (
            <span className="inline-flex items-center gap-1 rounded-full border border-brand-400/40 bg-ink-950/70 px-2.5 py-1 text-[11px] font-semibold text-brand-300 backdrop-blur">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              VIDEO
            </span>
          )}
        </div>

        {/* expand hint */}
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
      </button>

      {/* Body */}
      <div className="relative p-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-300">
          {project.category}
        </div>
        <h3 className="mt-2 font-display text-xl font-bold text-white">
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm text-slate-400">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="chip text-[11px]">
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="chip text-[11px]">+{project.stack.length - 4}</span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
          >
            {project.type === "ai" ? "Watch demo" : "View case study"}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-200"
            >
              Visit live
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
