export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "TypeScript", "Javascript"],
    },
    {
      title: "Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "Scikit-learn", "TensorFlow"],
    },
    {
      title: "Web Development",
      skills: ["React.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Data Tools",
      skills: ["Pandas", "NumPy", "Matplotlib", "Power BI"],
    },
  ];

  return (
    <section id="skills" className="bg-black-300 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
           <span className="text-purple-500">Technical Skills</span>
        </h2>

        <div className="w-24 h-1 bg-purple-500 mx-auto mb-12 rounded"></div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2 text-gray-300 text-sm">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-gray-800 px-3 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}