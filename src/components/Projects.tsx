import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Atlas Technologies",
    tags: ["UX Design", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    name: "Finlytics",
    tags: ["UI Design", "Branding"],
    image:
      "https://images.unsplash.com/photo-1621947081720-86970823b77a?w=800&q=80",
  },
  {
    name: "Orbital Bank",
    tags: ["Fintech", "UX Design", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    name: "Echo Analytics",
    tags: ["UI Design", "Motion Design"],
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f5f5f5] sm:px-4 py-20 md:py-28">
      <div className="max-w-8xl mx-auto">
        {/* Section Header — Centered */}
        <div className="text-center mb-14">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
            <span className="text-sm font-medium text-gray-700">Projects</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.2] tracking-tight">
            <span className="text-gray-900">Here&apos;s what</span>
            <br />
            <span className="text-gray-400">the momentum looks like.</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col"
            >
              {/* Top row: Title + View button */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.name}
                </h3>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  View
                  <span className="flex items-center justify-center w-7 h-7 border border-gray-200 rounded-full">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
