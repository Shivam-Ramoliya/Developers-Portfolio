import React, { useState } from "react";

const Resume = ({ resumePdfUrl, experience, education }) => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="resume" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-sky-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            My professional journey and qualifications
          </p>

          {/* Download Resume Button */}
          <a
            href={resumePdfUrl}
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-sky-500 to-emerald-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-linear-to-r from-sky-500 to-emerald-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "education"
                ? "bg-linear-to-r from-sky-500 to-emerald-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
            }`}
          >
            Education
          </button>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "experience" && (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-32 pb-8 group">
                  {/* Timeline Line */}
                  <div className="absolute left-4 md:left-16 top-0 h-full w-0.5 bg-linear-to-b from-sky-500 to-emerald-500"></div>

                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-14 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-800 group-hover:scale-150 transition-transform duration-300"></div>

                  {/* Date Badge */}
                  <div className="absolute left-8 md:left-0 top-0 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1 rounded-full">
                    {exp.period}
                  </div>

                  {/* Content Card */}
                  <div className="mt-8 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium mb-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      {exp.company}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 md:pl-32 pb-8 group">
                  {/* Timeline Line */}
                  <div className="absolute left-4 md:left-16 top-0 h-full w-0.5 bg-linear-to-b from-sky-500 to-emerald-500"></div>

                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-14 top-0 w-4 h-4 bg-sky-500 rounded-full border-4 border-white dark:border-slate-800 group-hover:scale-150 transition-transform duration-300"></div>

                  {/* Date Badge */}
                  <div className="absolute left-8 md:left-0 top-0 text-sm font-semibold text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/30 px-4 py-1 rounded-full">
                    {edu.period}
                  </div>

                  {/* Content Card */}
                  <div className="mt-8 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium mb-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                      {edu.institution}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                    {edu.gpa && (
                      <p className="mt-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
