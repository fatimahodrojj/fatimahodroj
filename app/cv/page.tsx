"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CVPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-6 print:bg-white print:py-0 print:px-0">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-[2rem] overflow-hidden print:shadow-none print:rounded-none">

                {/* PRINT BUTTON */}
                <div className="p-8 flex justify-between items-center border-b print:hidden">
                    <a href="/" className="text-purple-600 font-bold flex items-center gap-2 hover:underline">
                        ← Back to Portfolio
                    </a>
                    <button
                        onClick={() => window.print()}
                        className="px-6 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-200"
                    >
                        Print / Save as PDF
                    </button>
                </div>

                <div className="p-12 md:p-16 space-y-12 text-gray-800">

                    {/* HEADER */}
                    <header className="text-center space-y-6 border-b-2 border-purple-600 pb-8 relative">
                        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-50">
                            <Image
                                src="/profile.jpg"
                                alt="Fatima Hodroj"
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                        <h1 className="text-5xl font-black tracking-tighter text-gray-900 uppercase">Fatima Hodroj</h1>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-500 uppercase tracking-widest">
                            <span>Beirut, Lebanon</span>
                            <span>+961 71 980 882</span>
                            <a href="mailto:fatimahodroj1@outlook.com" className="text-purple-600">fatimahodroj1@outlook.com</a>
                            <a href="https://linkedin.com/in/fatima-hodroj" className="hover:text-purple-600">linkedin.com/in/fatima-hodroj</a>
                            <a href="https://github.com/fatimahodrojj" className="hover:text-purple-600">github.com/fatimahodrojj</a>
                        </div>
                    </header>

                    {/* OBJECTIVE */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-purple-600 border-b pb-2">Objective</h2>
                        <p className="leading-relaxed font-medium text-gray-600 italic">
                            Results-driven Full-Stack Developer experienced in designing and developing modern web applications using Next.js, React, PostgreSQL, and Prisma ORM. Proven ability to build secure APIs, implement role-based access control, and deliver clean, scalable full-stack solutions.
                        </p>
                    </section>

                    {/* EXPERIENCE */}
                    <section className="space-y-8">
                        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-purple-600 border-b pb-2">Experience</h2>

                        <div className="space-y-8">
                            <ExperienceItem
                                title="Full-Stack Developer (Free Lancing)"
                                company="Future.code"
                                period="Jan 2026 – Present"
                                location="Beirut / Remote"
                                description="Developing full-stack applications with Frontend: React Backend: .NET Web API Database: SQL Server Database setup and connection using Docker."
                            />
                            <ExperienceItem
                                title="Full-Stack Developer Intern"
                                company="TechTalks"
                                period="Jan 2026 – Present"
                                location="Remote / Beirut"
                                description="Continuing full-stack development with Next.js. Working within team workflows using Git and GitHub."
                            />
                            <ExperienceItem
                                title="Full-Stack Developer Intern"
                                company="TechTalks"
                                period="Nov 2025 – Dec 2025"
                                location="Remote / Beirut | WWW.dawalocate.com"
                                points={[
                                    "Built responsive front-end interfaces using Next.js and React, consuming backend APIs for dynamic data rendering.",
                                    "Designed and managed relational database schemas using Prisma ORM with PostgreSQL.",
                                    "Integrated front-end components with Prisma-powered backend APIs to handle authentication, role-based access, and CRUD operations.",
                                    "Implemented enum-based business logic (user status, inventory status, donation workflows) across front-end and backend layers.",
                                    "Optimized data access using Prisma indexes, relational constraints, and efficient query patterns."
                                ]}
                            />
                            <ExperienceItem
                                title="Intern"
                                company="OGERO Telecom"
                                period="Aug 2025 – Oct 2025"
                                location="Beirut, Lebanon"
                                points={[
                                    "Developed secure backend services using Java Spring Boot and PostgreSQL.",
                                    "Implemented JWT-based authentication and API documentation with Swagger.",
                                    "Tested and debugged APIs using Postman."
                                ]}
                            />
                        </div>
                    </section>

                    {/* PROJECTS */}
                    <section className="space-y-8">
                        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-purple-600 border-b pb-2">Projects</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <ProjectItem
                                name="DawaLocate"
                                desc="Built a medication management platform with patient search, pharmacy dashboards, inventory control, and admin approval workflows using Next.js, Prisma, and PostgreSQL."
                            />
                            <ProjectItem
                                name="Wish Cart"
                                desc="Developed a full-stack e-commerce web app with product browsing, cart functionality, and checkout flow using Next.js, React, and a database-backed backend."
                            />
                            <ProjectItem
                                name="OGERO Backend API"
                                desc="Developed a secure Spring Boot REST API with PostgreSQL integration and authentication."
                            />
                            <ProjectItem
                                name="Geometric Calculator"
                                desc="Created a full-stack application for geometric calculations with dynamic inputs and results."
                            />
                            <ProjectItem
                                name="WeatherNow"
                                desc="Developed a responsive weather application using HTML, CSS, and JavaScript."
                            />
                        </div>
                    </section>

                    {/* SKILLS */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-purple-600 border-b pb-2">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            <SkillGroup label="Languages" items="Java, JavaScript, Python, C#, SQL" />
                            <SkillGroup label="Frontend" items="HTML, CSS, JavaScript (DOM), React.js, Next.js, Responsive Design" />
                            <SkillGroup label="Backend" items="Next.js API Routes, RESTful APIs, Authentication, RBAC" />
                            <SkillGroup label="Databases & ORM" items="PostgreSQL, Prisma ORM, Schema Design, Relations" />
                            <SkillGroup label="Tools & Workflow" items="Git, GitHub, Jira, Postman, Swagger, Figma, VS Code" />
                            <SkillGroup label="Security Awareness" items="JWT, API Security, Input Validation, Ethical Hacking" />
                        </div>
                    </section>

                    {/* CERTIFICATIONS */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-purple-600 border-b pb-2">Certifications</h2>
                        <ul className="space-y-2 list-disc list-inside text-gray-600 font-medium">
                            <li>Think Smart, Click Safe – AI Futures & Phishing Awareness Day — AOU</li>
                            <li>Inside the Mind of an Ethical Hacker — Semicolon</li>
                            <li>Artificial Intelligence Fundamentals — IBM</li>
                            <li>Mastering MySQL — Udemy</li>
                            <li>NGINX Masterclass — Udemy</li>
                        </ul>
                    </section>

                    {/* EDUCATION */}
                    <section className="space-y-4 pb-12">
                        <h2 className="text-lg font-black uppercase tracking-[0.3em] text-purple-600 border-b pb-2">Education</h2>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-black">Arab Open University (AOU)</h3>
                                <p className="font-bold text-gray-900">B.Sc. in Computer Science</p>
                                <p className="text-sm font-semibold text-gray-500">Relevant Coursework: OOP, Data Structures, Algorithms, Software Engineering, Databases, Web Dev</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-black text-purple-600">Expected 2027</p>
                                <p className="text-xs font-bold text-gray-400">Beirut, Lebanon</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <footer className="mt-12 text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] print:hidden">
                Fatima Hodroj • CV Rendered with Next.js
            </footer>
        </main>
    );
}

function ExperienceItem({ title, company, period, location, description, points }: any) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-black text-gray-900">{title}</h3>
                    <p className="text-purple-600 font-black flex items-center gap-2">
                        {company} <span className="text-gray-300">|</span> <span className="text-gray-400 text-xs tracking-widest uppercase">{location}</span>
                    </p>
                </div>
                <span className="text-sm font-black text-gray-400 whitespace-nowrap">{period}</span>
            </div>
            {description && <p className="text-gray-600 font-medium leading-relaxed">{description}</p>}
            {points && (
                <ul className="list-disc list-inside space-y-1">
                    {points.map((p: string, i: number) => (
                        <li key={`point-${i}`} className="text-gray-600 font-medium leading-relaxed indent-[-1.5rem] pl-6 text-sm">
                            {p}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function ProjectItem({ name, desc }: any) {
    return (
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-lg font-black mb-2 text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed">{desc}</p>
        </div>
    );
}

function SkillGroup({ label, items }: any) {
    return (
        <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-1">{label}</h4>
            <p className="font-bold text-gray-900">{items}</p>
        </div>
    );
}
