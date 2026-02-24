"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    name: "Onboardly",
    description:
      "A comprehensive, full-stack onboarding management system built with Next.js, featuring secure API integrations and automated workflow management for seamless team transitions.",
    tags: ["Next.js", "React", "Full-Stack", "Workflows"],
  },
  {
    name: "DawaLocate",
    description:
      "Full-stack medication management platform with patient search, pharmacy dashboards, inventory control, and admin approval workflows using Next.js, Prisma, and PostgreSQL.",
    link: "https://www.dawalocate.com",
    tags: ["Next.js", "Prisma", "PostgreSQL", "RBAC"],
  },
  {
    name: "Wish Cart",
    description:
      "Full-stack e-commerce web app with product browsing, cart functionality, and checkout flow using Next.js, React, and a database-backed backend.",
    tags: ["Next.js", "React", "E-commerce"],
  },
  {
    name: "OGERO Backend API",
    description:
      "Secure Spring Boot REST API with PostgreSQL integration and authentication.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
  },
  {
    name: "Geometric Calculator",
    description:
      "Full-stack application for geometric calculations with dynamic inputs and results.",
    tags: ["React", "Full-Stack"],
  },
  {
    name: "WeatherNow",
    description:
      "Responsive weather application using HTML, CSS, and JavaScript.",
    tags: ["JavaScript", "CSS", "Frontend"],
  },
];

const experiences = [
  {
    period: "Jan 2026 – Present",
    title: "Full-Stack Developer (Freelance)",
    company: "Future.code",
    location: "Beirut / Remote",
    description: "Developing full-stack applications with Frontend: React Backend: .NET Web API Database: SQL Server Database setup and connection using Docker.",
  },
  {
    period: "Jan 2026 – Present",
    title: "Intern – TechTalks (Full-Stack Developer)",
    company: "TechTalks",
    location: "Remote / Beirut",
    description: "Continuing full-stack development with Next.js. Working within team workflows using Git and GitHub.",
  },
  {
    period: "Nov 2025 – Dec 2025",
    title: "Intern — TechTalks (Full-Stack Developer)",
    company: "TechTalks",
    location: "Remote / Beirut | www.dawalocate.com",
    points: [
      "Built responsive front-end interfaces using Next.js and React, consuming backend APIs for dynamic data rendering.",
      "Designed and managed relational database schemas using Prisma ORM with PostgreSQL.",
      "Integrated front-end components with Prisma-powered backend APIs to handle authentication, role-based access, and CRUD operations.",
      "Implemented enum-based business logic across front-end and backend layers.",
      "Optimized data access using Prisma indexes, relational constraints, and efficient query patterns."
    ]
  },
  {
    period: "Aug 2025 – Oct 2025",
    title: "Intern — OGERO Telecom",
    company: "OGERO Telecom",
    location: "Beirut, Lebanon",
    points: [
      "Developed secure backend services using Java Spring Boot and PostgreSQL.",
      "Implemented JWT-based authentication and API documentation with Swagger.",
      "Tested and debugged APIs using Postman."
    ]
  },
];

const skills = {
  languages: ["Java", "JavaScript", "Python", "C#", "SQL"],
  frontend: ["HTML", "CSS", "JavaScript (DOM)", "React.js", "Next.js", "Responsive Design"],
  backend: ["Next.js API", "RESTful APIs", "Authentication", "RBAC", ".NET", "Spring Boot"],
  databases: ["PostgreSQL", "Prisma ORM", "SQL Server", "Schema Design"],
  tools: ["Git", "GitHub", "Jira", "Postman", "Swagger", "Figma", "Docker"],
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
};

const ShootingStar = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ top: "-10%", left: "110%", opacity: 0 }}
      animate={{
        top: ["-10%", "110%"],
        left: ["110%", "-10%"],
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 10 + 5,
        ease: "linear"
      }}
      className="absolute w-[3px] h-[3px] bg-purple-500 rounded-full shadow-[0_0_20px_4px_rgba(168,85,247,0.6)]"
    >
      <div className="absolute top-0 left-0 w-[150px] h-[3px] bg-gradient-to-r from-purple-500 to-transparent -rotate-45 origin-left" />
    </motion.div>
  );
};

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#f5f3ff_0%,#ffffff_100%)]">

      {/* Redesigned Shooting Stars */}
      <ShootingStar delay={2} />
      <ShootingStar delay={7} />
      <ShootingStar delay={12} />
      <ShootingStar delay={15} />

      {/* Floating Emojis */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[5%] text-[10rem] md:text-[14rem] opacity-[0.03] select-none"
      >
        💻
      </motion.div>
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[10%] text-[12rem] md:text-[16rem] opacity-[0.03] select-none"
      >
        🚀
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] opacity-[0.02] select-none"
      >
        ⚛️
      </motion.div>

      {/* Animated Shapes */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-[10%] w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-30"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 left-[10%] w-[30rem] h-[30rem] bg-indigo-100 rounded-full blur-[120px] opacity-40"
      />
    </div>
  );
};

const MagneticButton = ({ children, className, href }: { children: React.ReactNode, className: string, href: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

const TechMarquee = () => {
  return (
    <div className="py-20 bg-gray-50/50 border-y border-gray-100 overflow-hidden relative">
      <motion.div
        animate={{ x: [0, -1500] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 text-4xl md:text-8xl font-black text-gray-100 uppercase italic tracking-tighter"
      >
        <span>there is also a way to start again • there is also a way to start again • there is also a way to start again • there is also a way to start again</span>
      </motion.div>
    </div>
  );
};

const FloatingCodeTerminal = () => {
  const codeSnippet = `const developer = {
  name: "Fatima Hodroj",
  role: "Full-Stack Engineer",
  skills: ["Next.js", "Prisma", "SQL"],
  status: "Coding beyond limits..."
};

function build(future) {
  return future.map(idea => 
    innovate(idea)
  );
}`;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(codeSnippet.substring(0, i));
      i++;
      if (i > codeSnippet.length) {
        setTimeout(() => { i = 0; }, 2000);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute -bottom-16 -left-16 md:-left-32 w-80 bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-2xl z-20 font-mono text-[10px] hidden md:block"
    >
      <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      <pre className="text-purple-300">
        <code>{displayText}<span className="animate-pulse">|</span></code>
      </pre>
    </motion.div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("/profile.jpg");

  return (
    <main ref={containerRef} className="bg-white text-gray-900 scroll-smooth selection:bg-purple-100 selection:text-purple-600">
      <BackgroundElements />

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-white/40 backdrop-blur-2xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-4 md:py-7">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:space-x-16 text-[10px] md:text-xs font-black uppercase tracking-widest md:tracking-[0.4em] text-gray-500">
            <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-purple-600 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32 pb-16 md:pt-24 px-6 relative">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center px-5 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 font-black text-[10px] uppercase tracking-[0.2em]"
              >
                Full-Stack Developer
              </motion.div>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter">
                Crafting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">Software</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl font-medium">
              Empowering brands with <span className="text-gray-900">Next.js</span>,
              <span className="text-gray-900"> secure APIs</span>, and
              <span className="text-gray-900"> high-performance</span> architectures.
            </p>

            <div className="flex flex-wrap gap-6 mt-4">
              <MagneticButton
                href="#projects"
                className="px-12 py-6 bg-purple-600 text-white rounded-[2rem] font-black text-sm tracking-widest shadow-[0_20px_40px_-12px_rgba(124,58,237,0.3)] hover:bg-purple-700 transition duration-300 flex items-center justify-center min-w-[200px]"
              >
                EXPLORE ME
              </MagneticButton>
              <motion.a
                whileHover={{ scale: 1.05, y: -4, borderColor: "#9333ea", color: "#9333ea" }}
                whileTap={{ scale: 0.95 }}
                href="/cv"
                className="px-12 py-6 border-2 border-gray-100 text-gray-900 rounded-[2rem] font-black text-sm tracking-widest transition duration-300"
              >
                DOWNLOAD CV
              </motion.a>
            </div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
            className="flex justify-center relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-full blur-[100px] -z-10 opacity-60" />
            <div className="relative w-full max-w-[18rem] md:max-w-md h-[25rem] md:h-[35rem] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] border-[12px] md:border-[16px] border-white group bg-gray-50">
              <Image
                src="/profile.jpg"
                alt="Fatima Hodroj"
                fill
                className="object-cover transition-all duration-[1.5s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            <FloatingCodeTerminal />
          </motion.div>
        </div>
      </section>

      <TechMarquee />

      {/* PROJECTS */}
      <section id="projects" className="py-24 md:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16 md:mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-purple-600 mb-6">Portfolio</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter">Selected Projects</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={`project-${p.name}-${i}`}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-gray-50 hover:border-purple-100 hover:shadow-[0_40px_80px_-20px_rgba(124,58,237,0.1)] transition-all duration-700"
              >
                <div className="absolute top-8 right-8 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                  <span className="text-xl">↗</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 mt-4 group-hover:text-purple-600 transition-colors duration-500">{p.name}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12 font-medium">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags?.map((tag, tagIdx) => (
                    <span key={`tag-${p.name}-${tag}-${tagIdx}`} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-gray-50 text-gray-400 rounded-xl group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 md:py-48 bg-gray-950 text-white rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-12 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeInUp} className="mb-20 md:mb-32">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-purple-400 mb-8">Capabilities</h2>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter">Tech Stack</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-16">
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={`skill-cat-${category}`}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6 md:space-y-10"
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">{category}</h3>
                <div className="space-y-3 md:space-y-5">
                  {items.map(skill => (
                    <motion.div
                      key={`${category}-${skill}`}
                      whileHover={{ x: 8 }}
                      className="text-lg md:text-xl font-bold text-gray-400 hover:text-white transition duration-500 flex items-center gap-4 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_12px_rgba(168,85,247,0.6)] group-hover:scale-150 transition-transform" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 md:py-48">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20 md:mb-32 text-center">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-purple-600 mb-8">Career</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tight">Experience</h3>
          </motion.div>

          <div className="space-y-10">
            {experiences.map((e, i) => (
              <motion.div
                key={`exp-${e.company}-${e.title}-${i}`}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group relative grid md:grid-cols-[1.2fr_2fr] gap-8 md:gap-12 p-8 md:p-16 bg-white rounded-[2.5rem] md:rounded-[4rem] border border-gray-50 hover:border-purple-100 hover:shadow-[0_60px_100px_-30px_rgba(124,58,237,0.12)] transition-all duration-700"
              >
                <div className="space-y-4">
                  <span className="text-xs font-black text-purple-600 uppercase tracking-widest">{e.period}</span>
                  <h3 className="text-2xl md:text-3xl font-black group-hover:text-purple-600 transition-colors duration-500">{e.company}</h3>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400 rounded-lg">{e.location}</div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xl md:text-2xl font-black group-hover:translate-x-2 transition-transform duration-500">{e.title}</h4>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">{e.description}</p>
                  {e.points && (
                    <ul className="list-disc list-inside space-y-2">
                      {e.points.map((p: string, idx: number) => (
                        <li key={`point-${i}-${idx}`} className="text-gray-600 font-medium leading-relaxed indent-[-1.5rem] pl-6 text-xs md:text-sm">
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-48 px-4 md:px-6">
        <motion.div
          {...fadeInUp}
          className="max-w-6xl mx-auto p-10 md:p-32 bg-gray-950 rounded-[3rem] md:rounded-[5rem] text-white text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/10 to-transparent pointer-events-none" />
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-8xl font-black mb-12 md:mb-16 italic tracking-tighter leading-none"
          >
            LET'S BUILD <br />
            BEYOND LIMITS.
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12 relative z-10">
            <motion.a
              whileHover={{ scale: 1.05, y: -6 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:fatimahodroj1@outlook.com"
              className="px-12 py-6 md:px-16 md:py-8 bg-purple-600 text-white rounded-[2rem] md:rounded-[2.5rem] font-black text-lg md:text-xl tracking-widest hover:bg-purple-700 transition shadow-[0_24px_48px_-12px_rgba(124,58,237,0.4)]"
            >
              CONTACT ME
            </motion.a>
            <div className="flex gap-8 md:gap-12">
              <a href="https://linkedin.com/in/fatima-hodroj" target="_blank" className="font-black text-[10px] md:text-xs tracking-[0.3em] text-gray-500 hover:text-white transition border-b-2 border-gray-800 hover:border-white pb-2">LINKEDIN</a>
              <a href="https://github.com/fatimahodrojj" target="_blank" className="font-black text-[10px] md:text-xs tracking-[0.3em] text-gray-500 hover:text-white transition border-b-2 border-gray-800 hover:border-white pb-2">GITHUB</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 md:py-24 text-center">
        <p className="text-gray-300 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em] px-4">
          © {new Date().getFullYear()} FATIMA HODROJ • DESIGNED WITH PASSION
        </p>
      </footer>
    </main>
  );
}