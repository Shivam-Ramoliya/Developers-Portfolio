import React from "react";

// Portfolio Data Configuration
// Replace the placeholder data with your actual information

export const portfolioData = {
    // Personal Info
    personal: {
        name: "Shivam S. Ramoliya",
        titles: [
            "Full Stack Developer",
            "AI-ML Enthusiast",
            "Problem Solver",
            "Tech Explorer",
        ],
        profileImage: "/Shivam-1.jpg", // Replace with your actual profile image
        aboutImage: "/Shivam-2.jpg", // Replace with your actual about image
        bio: "I'm a passionate developer with deep expertise in modern web technologies and a keen eye for creating elegant, user-friendly applications. With a strong foundation in software engineering principles, I excel at designing scalable architectures, writing maintainable code, and implementing design patterns that stand the test of time. I transform ideas into reality through clean, efficient code and innovative solutions. My approach to problem-solving involves breaking down complex challenges into manageable components, analyzing edge cases, and applying algorithmic thinking to deliver robust solutions. I love tackling intricate technical problems, optimizing performance bottlenecks, and architecting systems that are both powerful and intuitive. Continuously learning new technologies and best practices allows me to stay at the forefront of web development while maintaining a deep commitment to code quality and software craftsmanship.",
    },

    // Statistics
    stats: [
        { value: "50+", label: "Projects" },
        { value: "3+", label: "Years Experience" },
        { value: "30+", label: "Happy Clients" },
    ],

    // Projects
    // Projects
    projects: [
        {
            title: "NewsXpress",
            category: "Web / Mobile",
            description:
                "An AI-powered, personalized news aggregation platform featuring intelligent article summarization via Groq SDK, multi-language translation support, text-to-speech capabilities, and a hybrid ML recommendation engine combining content-based and collaborative filtering. Built with React and Tailwind CSS frontend, Node.js/Express backend with PostgreSQL database, and Python ML models achieving 100% test coverage with Jest and Vitest.",
            image: "/NewsXpress.png",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Python",
                "Tailwind CSS",
                "Groq API",
                "Google Cloud APIs",
                "Firebase Auth",
            ],
            liveUrl: "https://newsxpress-7bjk.onrender.com/",
            githubUrl: "https://github.com/Shivam-Ramoliya/NewsXpress",
        },
        {
            title: "TwinTrails",
            category: "Web / Mobile",
            description:
                "An advanced spatial navigation laboratory enabling real-time comparison between Dead Reckoning (IMU-based inertial navigation) and Visual SLAM (camera-first simultaneous localization and mapping) technologies. Features dual path visualization with grid/map views, obstacle detection with depth-based clustering, GPS integration, sensor fusion algorithms, and glassmorphic UI with OpenStreetMap integration. Supports touch gestures, live camera overlays with FAST corner detection, and real-time performance metrics.",
            image: "/TwinTrails.png",
            technologies: [
                "React",
                "Vite",
                "Tailwind CSS",
                "Leaflet.js",
                "Device APIs",
                "MediaDevices API",
                "Geolocation API",
                "WebGL",
            ],
            liveUrl: "https://twintrails.vercel.app/",
            githubUrl: "https://github.com/Shivam-Ramoliya/TwinTrails",
        },
        {
            title: "TextUtils",
            category: "Web / Mobile",
            description:
                "A powerful React-based text manipulation utility application offering 12+ text transformation features including case conversions (uppercase, lowercase, sentence, capitalized, alternating, inverse), space removal, character filtering (numbers/punctuation removal), text reversal, Base64 encoding/decoding, and text-to-speech synthesis. Includes advanced analytics like vowel/consonant counting, character frequency analysis, word/character summaries, dark/light mode toggle, and seamless copy/clear functionality with a responsive Bootstrap interface.",
            image: "/TextUtils.png",
            technologies: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap 5"],
            liveUrl: "https://textutils-by-shivam.vercel.app/",
            githubUrl: "https://github.com/Shivam-Ramoliya/TextUtils",
        },
        {
            title: "DLS-System",
            category: "Web / Mobile",
            description:
                "An academic project dashboard for the Project DLS-System under the course SC107: Calculus.",
            image: "/DLS-System.png", // New placeholder image
            technologies: ["HTML", "CSS", "JavaScript"], // Inferred from name and skills [cite: 32]
            liveUrl: "https://shivam-ramoliya.github.io/DLS-System-SC107-Project/",
            githubUrl: "https://github.com/Shivam-Ramoliya/DLS-System-SC107-Project",
        },
        {
            title: "No-Capcoders: Club Management System",
            category: "Terminal",
            description:
                "A comprehensive DSA capstone project implementing an efficient club management system using optimal data structures. Designed to manage DA-IICT clubs with O(1) search by ID and O(n) by name/category using hash table-based architecture. Features member management (add/delete/view/search), club administration, role-based access control with password protection, CSV-based persistent storage, and category-based filtering. Demonstrates practical application of hash tables over traditional maps for superior search complexity without unnecessary lexicographical sorting.",
            image: "/noCapCoderz.png",
            technologies: [
                "C++",
                "Data Structures",
                "Hash Tables",
                "CSV File Handling",
            ],
            liveUrl: "https://github.com/Shivam-Ramoliya/noCapCoderz",
            githubUrl: "https://github.com/Shivam-Ramoliya/noCapCoderz",
        },
    ],

    // Skills
    skillCategories: [
        {
            title: "Frontend",
            icon: "💻",
            skills: [
                { name: "React", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "Tailwind CSS", level: 88 },
                { name: "HTML/CSS", level: 95 },
            ],
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Python", level: 80 },
                { name: "Express", level: 85 },
                { name: "MongoDB", level: 78 },
            ],
        },
        {
            title: "Tools & Others",
            icon: "🛠️",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 75 },
                { name: "AWS", level: 70 },
                { name: "Figma", level: 85 },
            ],
        },
    ],

    // Resume
    resume: {
        pdfUrl: "/202301049_Shivam_Ramoliya_2.pdf", // Add your resume PDF to public folder
        experience: [
            {
                position: "Senior Full Stack Developer",
                company: "Tech Company Inc.",
                period: "2022 - Present",
                description:
                    "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices across the team.",
                technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
            },
            {
                position: "Frontend Developer",
                company: "Digital Agency",
                period: "2020 - 2022",
                description:
                    "Developed responsive web applications and implemented modern UI/UX designs. Collaborated with designers to create pixel-perfect interfaces.",
                technologies: ["React", "Vue.js", "Tailwind CSS", "JavaScript"],
            },
            {
                position: "Junior Developer",
                company: "Startup XYZ",
                period: "2019 - 2020",
                description:
                    "Assisted in building web applications and maintained existing codebases. Learned industry best practices and agile methodologies.",
                technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            },
        ],
        education: [
            {
                degree: "Bachelor of Computer Science",
                institution: "University Name",
                period: "2015 - 2019",
                description:
                    "Graduated with honors. Focused on software engineering, algorithms, and web development.",
                gpa: "3.8/4.0",
            },
            {
                degree: "Web Development Bootcamp",
                institution: "Coding Academy",
                period: "2019",
                description:
                    "Intensive 12-week program covering full-stack web development with modern technologies.",
                gpa: null,
            },
        ],
    },

    // Contact
    contact: {
        email: "shivamramoliya2005@gmail.com",
        phone: "+91 79844 06542",
        location: "Jamnagar, Gujarat, India",
        socialLinks: [
            {
                name: "GitHub",
                url: "https://github.com/Shivam-Ramoliya/",
                icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                ),
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ramoliya-shivam-sureshbhai-753265287/",
                icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                ),
            },
            {
                name: "X",
                url: "https://x.com/_s_s_ramolia_07/",
                icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.916 6.75h-3.308l7.73-8.835L.424 2.25h6.7l4.67 6.168L17.67 2.25h.574zm-1.106 17.92h1.828L5.283 4.126H3.32L17.138 20.17z" />
                    </svg>
                ),
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/ss_ramoliya07/",
                icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                ),
            },
        ],
    },
};
