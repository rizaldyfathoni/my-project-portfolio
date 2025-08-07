import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16"
    >
      <div
        data-hs-carousel='{"loadingClasses": "opacity-0"}'
        className="relative mt-2"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-full bg-white dark:bg-gray-800 rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {/* =========== CERTIFICATES LIST =========== */}
            {user_info.certificates.map((cert, index) => {
              return (
                <div className="hs-carousel-slide relative" key={index}>
                  <div className="h-full bg-gray-100 p-2 dark:bg-black hover:dark:bg-zinc-900">
                    <div className="flex-row text-zinc-500 dark:text-zinc-300 p-2">
                      <div className="flex gap-2 overflow-x-scroll py-2">
                          {cert.tech.split(",").map((tech, index) => (
                            <span
                              className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
                              key={index}
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                      <div className="font-bold text-white py-6">{cert.title}</div>
                      <img src={cert.img} />
                      <div className="mt-6">{cert.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
        
        {/* =========== CAROUSEL PAGINATION =========== */}
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          {user_info.certificates.map((cert, index) => {
            return (
              <span
                className="hs-carousel-active:bg-red-700 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-red-500 dark:hs-carousel-active:border-red-500"
                key={index}
              ></span>
            );
          })}
        </div>
      </div>
      {user_info.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
            img={project.img}
          />
        );
      })}
    </section>
  );
}

export default Projects;
