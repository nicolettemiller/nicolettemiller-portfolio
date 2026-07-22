import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nicolette Miller — Full Stack Engineer",
  description:
    "Full Stack Software Engineer building thoughtful healthcare applications at UCSF.",
};

const skills = [
  "Python", "Flask", "JavaScript", "TypeScript",
  "D3.js", "Ruby on Rails", "PostgreSQL", "MySQL",
  "Docker", "Nginx", "Git", "Unix/Linux",
  "RESTful APIs", "EHR Integration", "Data Visualization",
  "UX Research", "Human-Centered Design", "Agile/Scrum",
];

const projects = [
  {
    name: "BRIDGE",
    description:
      "Clinician-facing full stack web application integrated with UCSF's EHR system, supporting real-time patient monitoring across six departments.",
    tags: ["Python", "Flask", "D3.js", "PostgreSQL", "Docker"],
    type: "UCSF · Production",
  },
  {
    name: "Open MS Bioscreen",
    description:
      "Patient-facing application for self-reported health metrics, enabling longitudinal tracking for multiple sclerosis research.",
    tags: ["Ruby on Rails", "PostgreSQL", "JavaScript"],
    type: "UCSF · Production",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F4] text-[#1C1C1E]">

      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="font-serif text-lg text-[#1C1C1E]">Nicolette Miller</span>
        <div className="flex gap-6 text-sm text-[#6B5B5B]">
          <a href="#work" className="hover:text-[#2D6B6B] transition-colors">Work</a>
          <a href="#skills" className="hover:text-[#2D6B6B] transition-colors">Skills</a>
          <a href="mailto:ncltmiller@gmail.com" className="hover:text-[#2D6B6B] transition-colors">Contact</a>
          <a
            href="/Nicolette_Miller_Resume.pdf"
            className="hover:text-[#2D6B6B] transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <Image
          src="/headshot.jpeg"
          alt="Nicolette Miller"
          width={200}
          height={200}
          className="rounded-full mb-8 object-cover ring-4 ring-[#7D2B3B]"
          style={{ width: 200, height: 200 }}
        />

        <p className="text-sm uppercase tracking-widest text-[#7D2B3B] mb-6">
          Full Stack Software Engineer
        </p>
        <h1 className="font-serif text-5xl leading-relaxed mb-8 text-[#1C1C1E]">
          I build software that helps people.
        </h1>
        <p className="text-lg text-[#6B5B5B] leading-relaxed">
          Six years at UCSF building clinician-facing and patient-facing healthcare
          applications — from EHR integrations to interactive data visualizations.
          I care about the people on the other side of the screen.
        </p>
        <div className="flex gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/nicolette-miller-67a843132/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#1C1C1E] border border-[#1C1C1E] px-5 py-2.5 rounded-full hover:bg-[#1C1C1E] hover:text-[#FAF7F4] transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nicolettemiller"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#1C1C1E] border border-[#1C1C1E] px-5 py-2.5 rounded-full hover:bg-[#1C1C1E] hover:text-[#FAF7F4] transition-all"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-[#E0D5CC]" />
      </div>

      {/* Work */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-[#7D2B3B] mb-10">Work</p>

        {/* UCSF Role */}
        <div className="mb-16">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="font-serif text-3xl text-[#1C1C1E]">Application Engineer III</h2>
              <p className="text-[#6B5B5B] mt-1">UCSF Weill Institute for Neurosciences · Bove Lab</p>
            </div>
            <span className="text-sm text-[#6B5B5B] whitespace-nowrap ml-4">2020 – Present</span>
          </div>
          <p className="text-[#1C1C1E] leading-relaxed mt-4">
            Promoted from Engineer II based on technical execution and full application ownership.
            Lead 3–5 concurrent projects end-to-end — from user research with clinicians and patients
            through design, development, deployment, and maintenance in a production healthcare environment.
            Co-author on multiple peer-reviewed publications.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-[#E0D5CC] rounded-3xl p-6 hover:border-[#2D6B6B] transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-xl text-[#1C1C1E]">{project.name}</h3>
                <span className="text-xs text-[#6B5B5B] bg-[#E8DDD5] px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              <p className="text-[#6B5B5B] leading-relaxed text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#1C1C1E] bg-[#E8DDD5] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-[#E0D5CC]" />
      </div>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-[#7D2B3B] mb-10">Skills</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm text-[#1C1C1E] border border-[#E0D5CC] px-4 py-2 rounded-full hover:border-[#2D6B6B] hover:text-[#2D6B6B] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-[#E0D5CC]" />
      </div>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-[#7D2B3B] mb-6">Get in touch</p>
        <h2 className="font-serif text-4xl text-[#1C1C1E] mb-6">
          Let's work together.
        </h2>
        <p className="text-[#6B5B5B] leading-relaxed mb-8 max-w-md">
          I'm currently open to new opportunities — full stack engineering roles,
          healthtech, and mission-driven teams.
        </p>
        <a
          href="mailto:ncltmiller@gmail.com"
          className="inline-block text-sm bg-[#7D2B3B] text-white px-6 py-3 rounded-full hover:bg-[#6B2233] transition-colors"
        >
          ncltmiller@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 border-t border-[#E0D5CC]">
        <p className="text-sm text-[#6B5B5B]">
          © 2026 Nicolette Miller · Built with Next.js & deployed on Vercel
        </p>
      </footer>

    </main>
  );
}