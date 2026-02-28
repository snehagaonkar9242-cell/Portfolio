export default function Projects() {
  const projects = [
    {
      title: "Life Insurance Prediction",
      description:
        "Built a machine learning model to predict whether a customer will purchase life insurance.",
      tech: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      title: "Brain Tumor Detection and segmentation",
      description:
        "Developed a deep learning U-Nee++ and CNN model to detect brain tumors from MRI images.",
      tech: ["Python", "TensorFlow", "CNN"],
    },
    {
      title: "E-Commerce Web Application",
      description:
        "Designed a responsive e-commerce frontend with modern UI.",
      tech: ["React", "TypeScript", "Tailwind U-Nee++"],
    },
  ];

  return (
    <section id="projects" className="bg-black-300 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-purple-500">My Projects</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-xs px-3 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}