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
    <section className="bg-[#f5f5f5] sm:px-4 py-20 md:py-28 md:px-7">
      <div className="max-w-8xl mx-auto">
        {/* Section Header — Centered */}
        <div className="text-center mb-14">
          {/* Label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
            <span className="text-md font-medium text-gray-700">Projects</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.2] tracking-tight">
            <span className="text-gray-900">Here&apos;s what</span>
            <br />
            <span className="text-gray-500">the momentum looks like.</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 rounded-[65px] pt-6  pb-4 px-3 bg-white ">
          {projects.map((project, index) => (
            <div key={index} className="p-5 flex flex-col">
              {/* Top row: Title + View button */}
              <div className="flex items-center justify-between mb-5 pr-3">
                <h3 className="text-2xl font-medium text-gray-900 px-3">
                  {project.name}
                </h3>
                <button className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  View
                  <span className="flex items-center justify-center w-10 h-7 border border-gray-300 rounded-full bg-gray-100">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 px-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-[28px] p-2 bg-white/80 border border-gray-200 shadow-lg">
                <div className="rounded-[24px] overflow-hidden aspect-16/13 bg-black">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1600 ease-[cubic-bezier(0.22,1,0.36,1)] scale-110 hover:scale-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
