import React, { useState, useEffect } from "react";

const certificates = [
  "https://res.cloudinary.com/dtowr3dnd/image/upload/v1758217938/download_2_evfkoo.png",
  "https://res.cloudinary.com/dtowr3dnd/image/upload/v1758217938/download_1_scivo2.png",
];

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-[120px] space-y-16  sm:py-24 lg:py-[120px] space-y-8 sm:space-y-12 lg:space-y-16">
      {/* Profile Section */}
      <section className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 blur-lg opacity-40"></div>
          <img
            src="https://res.cloudinary.com/dtowr3dnd/image/upload/v1758277704/Gemini_Generated_Image_tezamotezamoteza_1_lr6jan.jpg"
            alt="Profile"
            className="relative w-96 h-96 md:w-72 md:h-72 rounded-full shadow card bg-base-200 -2xl border-4 border-white object-[50%_25%]"
          />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold">Navapon Nanakorn</h1>
          <p className="mt-3  max-w-xl mx-auto">
            Software Engineering graduate with experience in software QA and project management. Skilled in analyzing sales, product, and software data, gathering customer requirements and feedback, and identifying business opportunities. Knowledgeable in SDLC and experienced in Agile and Scrum methodologies. Passionate about developing software, creating innovative solutions in collaborative environments, and continuously learning and growing.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="p-3  rounded-xl shadow card bg-base-150  ">
        <div className="flex gap-4">
          <div className="w-full space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          </div>
          {/* <div className="w-1/4 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Timeline</h2>
          </div> */}
        </div>
        <div className="flex gap-4">
          <div className="w-full space-y-4">
            <div className="p-5  rounded-xl shadow card bg-base-200  ">
              <h3 className="text-lg font-bold">
                Project Mananger - Charoen Pokphand Foods Public Company Limited
              </h3>
              <span className="text-sm ">Jan 2024 - June 2025 (1 year 6 months)</span>
              <div className="divider"></div>
              <div className="mt-2">
                <p>
                  I would like to highlight my role as a Project Manager and QA
                  in the technology domain. I initiated projects aimed at
                  improving business processes by designing applications that
                  enable employees to work more efficiently and conveniently. I
                  led the development of two main projects:
                </p>

                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    SQM – An application to manage problematic orders between
                    customers and factories. Customers can provide feedback and
                    submit claims. The system ranks factories based on the
                    number of issues, allowing our team to intervene and resolve
                    problems for underperforming factories.
                  </li>
                  <li>
                    IQC – An application for employees to monitor pork quality,
                    starting from live pigs through to processed meat. The
                    system also reports quality results back to the supplying
                    farms, ensuring better oversight and quality control
                    throughout the production process.
                  </li>
                </ul>
              </div>

              <br />
              <h3 className="font-medium">Job Responsibilities</h3>
              <br />
              <div className="flex w-full flex-col lg:flex-row gap-4">
                {/* Left */}
                <div className="card bg-base-300 rounded-box p-6 flex-1">
                  <h2 className="text-center font-semibold">Business</h2>
                  <div className="divider"></div>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Improved efficiency and reduced costs across the supply
                      chain, enhancing quality, performance, and profitability.
                    </li>
                    <li>
                      Incorporated customer feedback to improve product quality
                      and satisfaction.
                    </li>
                    <li>
                      Analyzed sales and operational performance using Excel,
                      leveraging PivotTables for actionable insights.
                    </li>
                    <li>
                      Identified customer needs and delivered tailored solutions
                      to drive revenue growth.
                    </li>
                    <li>
                      Optimized manufacturing processes and integrated
                      technology to increase organizational productivity.
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="divider lg:divider-horizontal"></div>

                {/* Right */}
                <div className="card bg-base-300 rounded-box p-6 flex-1">
                  <h2 className="text-center font-semibold">Technology</h2>
                  <div className="divider"></div>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Initiated projects and gathered customer requirements to
                      define scope and deliverables.
                    </li>
                    <li>
                      Developed test cases based on business requirements within
                      Agile sprints.
                    </li>
                    <li>
                      Performed unit, functional, regression, integration, and
                      end-to-end testing (manual & automated with Cypress).
                    </li>
                    <li>
                      Logged and tracked defects using JIRA throughout the
                      testing lifecycle.
                    </li>
                    <li>
                      Prepared test data and documentation, including Test
                      Plans, Scripts, UAT, and Deployment Notes.
                    </li>
                    <li>
                      Deployed code from development to production environments.
                    </li>
                    <li>
                      Coordinated with developers to resolve issues and verified
                      fixes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl shadow card bg-base-200 ">
              <h3 className="text-lg font-bold">
                Quality Assurance Engineer - Ngernturbo Co. Ltd.
              </h3>
              <span className="text-sm ">Aug 2023 - Nov 2023 (4 months)</span>
              <div className="divider"></div>
              <p className="mt-2 ">
                My duties as an Agile worker include reviewing and managing
                projects from the time I get requirements until I deploy the
                product for use.
              </p>
              <br />
              <h3 className="font-medium">Job Responsibilities</h3>
              <p className="mt-2 ">
                • developed test cases based on business requirements within
                Agile sprints. <br />
                • Performed unit, functional, component, regression,
                integration, and end-to-end (white-box) testing.
                <br />
                • Logged and tracked defects using JIRA throughout the testing
                lifecycle.
                <br />
                • Prepared test data and documentation, including Test Plans,
                Test Scripts, UAT documents, and • Deployment Notes.
                <br />
                • Coordinated with developers to resolve issues and verified
                fixes.
                <br />• Deployed code from development to production
                environments
              </p>
            </div>

            <div className="p-5  rounded-xl shadow card bg-base-200 ">
              <h3 className="text-lg font-bold">
                Quality Assurance Engineer Internship - N squared ecommerce
              </h3>
              <span className="text-sm "> Jan 2023 - June 2023 (6 months)</span>
              <div className="divider"></div>
              <p className="mt-2 ">
                Working in an agile format to facilitate easier collaboration
                among different teams and enable swift problem-solving through
                open discussions and collaborative suggestions.
              </p>
              <br />
              <h3 className="font-medium">Job Responsibilities</h3>
              <p className="mt-2 ">
                • developed test cases based on business requirements within
                Agile sprints. <br />
                • Performed unit, functional, component, regression,
                integration, and end-to-end (white-box) testing.
                <br />
                • Logged and tracked defects using JIRA throughout the testing
                lifecycle.
                <br />
                • Prepared test data and documentation, including Test Plans,
                Test Scripts, UAT documents, and • Deployment Notes.
                <br />
                • Coordinated with developers to resolve issues and verified
                fixes.
                <br />
              </p>
            </div>
          </div>

          {/* left side */}
          {/* <div className="w-1/4 space-y-4">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">01/2023</time>
                  <div className="text-lg font-black">Internship</div>
                  Started an internship as a Quality Assurance Software intern.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">06/2023</time>
                  <div className="text-lg font-black">
                    Graduated from university.
                  </div>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">09/2023</time>
                  <div className="text-lg font-black">First Job</div>
                  Hired for a full-time position as a QA Software.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end md:mb-10">
                  <time className="font-mono italic">01/2024</time>
                  <div className="text-lg font-black">Second Job</div>
                  Transitioned to a new role as a Project Manager.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">Now</time>
                  <div className="text-lg font-black">Find new jobs</div>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-3">
          <div className="p-5 rounded-xl shadow card bg-base-200 ">
            <h3 className="text-lg font-bold">Thammasat University</h3>
            <div className="flex justify-between items-center">
              <span className="text-sm ">Software Engineering GPA: 3.28</span>
              <span className="text-sm ">(2019 - 2023)</span>
            </div>
            <span className="text-sm ">
              {" "}
              • Learning strike(2nd year student): We want to build a website
              where we can communicate and gather to read books, study, or help
              one another with different areas of learning.
            </span>
            <br />
            <span className="text-sm ">
              • CMMTT(2nd year student): We want to build a website where users
              can come together to report the spread of COVID-19 in order to
              help users avoid those areas.
            </span>
            <br />
            <span className="text-sm ">
              • CALOBITE(3rd year student): We want to create a website that
              calculates the energy content of various fast food items, allowing
              consumers to choose menu options that align with their desired
              energy intake.
            </span>
          </div>
        </div>
      </section>

      {/* tool&framework */}
      <section className="p-6 rounded-xl shadow-md card bg-base-150">
        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {["JavaScript", "Python", "Java", "SQL", "HTML & CSS"].map(
            (lang, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium shadow-sm hover:bg-red-200 transition"
              >
                {lang}
              </span>
            )
          )}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Tools & Frameworks</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "React",
            "TailwindCSS",
            "Node.js",
            "Express",
            "MongoDB",
            "MySQL",
            "Git/GitHub",
            "Postman",
            "Cypress",
            "Jira",
          ].map((tool, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition"
            >
              {tool}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
          <li>State Management: Redux Toolkit, Zustand</li>
          <li>API Design: REST APIs</li>
          <li>Software Development Life Cycle (Agile, Waterfall)</li>
          <li>Scrum methodology</li>
          <li>Testing practices: BDD, TDD</li>
          <li>CI/CD & Collaboration</li>
        </ul>
      </section>

      {/* Currently Learning & Interests */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Currently Learning & Interests
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Next.js", "TypeScript", "DEVOPS", "Cloud Service"].map((topic, i) => (
            <div
              key={i}
              className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center text-gray-900 dark:text-gray-100"
            >
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* cert */}
      <section>
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Certificates
          </h2>

          <div
            className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg"
            style={{ paddingTop: "75%" }}
          >
            {certificates.map((cert, index) => (
              <img
                key={index}
                src={cert}
                alt={`Certificate ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Optional: Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {certificates.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
