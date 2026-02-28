export default function About() {
  return (
    <section id="about" className="bg-black-300 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
     <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-500 no-underline">
  About Me
</h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-purple-500 mx-auto mb-10 rounded"></div>

        {/* Content */}
        <div className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
          <p className="mb-6">
            I am a <span className="text-purple-400 font-semibold">Data Science and Engineering student </span> 
            with a strong passion for machine learning, data analytics, and modern web development.
          </p>

          <p className="mb-6">
            I enjoy building real-world applications using technologies such as 
            <span className="text-purple-400 font-semibold"> Python, React, and Machine Learning</span>, 
            focusing on creating scalable and user-friendly solutions.
          </p>

          <p>
            I am continuously learning and exploring new technologies to enhance my skills 
            and leverage data-driven approaches to solve practical, real-world problems.
          </p>
        </div>

      </div>
    </section>
  );
}