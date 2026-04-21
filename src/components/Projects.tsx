"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import StatusBadge from "./StatusBadge";
import { Reveal } from "./Reveal";
import { Stagger, staggerItem } from "./Stagger";
import { motion } from "framer-motion";

import { content } from "@/content/content";

const projects = content.projects.list;

export default function Projects() {
  return (
    <section id="projects" className="sm:px-4 py-16 md:py-20 md:px-10 max-w-360 mx-auto relative">
      <Reveal delay={0.2}>
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <StatusBadge dotColor="bg-red-500" title="Infrastructure" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.2] tracking-tight">
              <span className="text-gray-900">{content.projects.title}</span>
              <br />
              <span className="text-gray-500">{content.projects.subtitle}</span>
            </h2>
          </div>

          {/* Project Bento Grid */}
          <Stagger delay={0.25} stagger={0.3} duration={0.8}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-gray-200 rounded-[40px] pt-6 pb-4 px-3 bg-white">
              {projects.map((project, index) => {
                const spanClass =
                  index === 0
                    ? "lg:col-span-2"
                    : index === 1
                      ? "lg:col-span-3"
                      : index === 2
                        ? "lg:col-span-3"
                        : "lg:col-span-2";

                return (
                  <motion.div
                    suppressHydrationWarning
                    key={index}
                    variants={staggerItem}
                    custom={1.2}
                    className={`p-3 md:p-5 flex flex-col ${spanClass}`}
                  >
                    {/* Top row: Title */}
                    <div className="flex items-center justify-between mb-4 md:mb-5 pr-1 md:pr-3">
                      <h3 className="text-2xl font-medium text-gray-900 px-3 truncate">
                        {project.name}
                      </h3>
                    </div>

                    {/* Image */}
                    <div className="rounded-[20px] p-2 bg-white/80 border border-gray-200 shadow-lg flex-1 flex flex-col min-h-[300px] md:min-h-[380px]">
                      <div className="rounded-[16px] overflow-hidden bg-black flex-1 relative group cursor-pointer">
                        <Image
                          src={project.image}
                          alt={`${project.name} – ${project.tags.join(", ")}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] scale-105 group-hover:scale-100 opacity-100"
                        />
                      </div>
                    </div>

                    {/* Footer: Tags + View Button */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-2 px-2 py-1 border border-gray-200 rounded-full w-fit bg-gray-200">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-sm font-medium text-gray-700 px-3 py-1 rounded-full whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="group flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-gray-900 transition-all shrink-0 border rounded-lg border-gray-200 py-1 px-2">
                        View
                        <span className="flex items-center justify-center w-5 h-7 transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRightIcon className="w-4 h-4" />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Stagger>
        </div>
      </Reveal>
    </section>
  );
}
