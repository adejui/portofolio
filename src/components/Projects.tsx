import React, { useState } from "react";
import { ExternalLink, Github, Eye, Calendar, Code, Database, Palette } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [headerRef, headerVisible] = useScrollAnimation();
    const [filterRef, filterVisible] = useScrollAnimation();
    const [gridRef, gridVisible] = useScrollAnimation();

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "web development",
            image: "./images/6.png",
            description:
                "A complete e-commerce solution built with a Laravel backend and a JavaScript + Tailwind CSS frontend, featuring user authentication, product management, shopping cart, and payment integration.",
            technologies: ["Laravel", "MySQL", "TailwindCSS", "JavaScript"],
            features: ["User Authentication", "Product Catalog", "Shopping Cart", "Admin Dashboard"],
            timeline: "3 months",
            status: "In Progress",
            links: { live: "#", github: "#" },
        },
        {
            id: 2,
            title: "Platform Online Course",
            category: "web development",
            image: "./images/2.png",
            description:
                "This platform offers online courses in video format. It supports three roles: student, mentor, and admin. Key features include course management, payment system, and a responsive interface.",
            technologies: ["Laravel", "MySQL", "TailwindCSS", "JavaScript"],
            features: ["Course Videos", "Course Management", "Online Payment", "Role-Based Dashboard"],
            timeline: "3 months",
            status: "Completed",
            links: { live: "#", github: "#" },
        },
        {
            id: 3,
            title: "Website Blog CMS",
            category: "web development",
            image: "./images/5.png",
            description:
                "Website blog CMS dengan tampilan modern, fitur manajemen postingan, sistem kategori, dashboard admin, dan autentikasi pengguna. Dirancang untuk pengalaman menulis dan membaca yang nyaman.",
            technologies: ["Laravel", "TailwindCSS", "JavaScript", "MySQL"],
            features: ["Post Management", "Category System", "User Authentication", "Responsive Design"],
            timeline: "1.5 months",
            status: "Completed",
            links: { live: "#", github: "#" },
        },
        {
            id: 4,
            title: "Online Store Website",
            category: "web development",
            image: "./images/7.png",
            description:
                "A modern and responsive online store website with product catalog, shopping cart, checkout process, and admin dashboard. Designed for seamless browsing and easy purchasing experience.",
            technologies: ["Laravel", "Bootstrap", "JavaScript", "MySQL", "Fetch API"],
            features: ["Product Catalog", "Shopping Cart", "Checkout System", "Admin Dashboard"],
            timeline: "1.5 months",
            status: "Completed",
            links: { live: "#", github: "#" },
        },
        {
            id: 5,
            title: "Online Ticket Booking",
            category: "web development",
            image: "./images/1.png",
            description:
                "A travel ticket booking website for intercity routes where users can select destination and pay online. The system simplifies the ticket reservation process without requiring offline visits.",
            technologies: ["Laravel", "TailwindCSS", "JavaScript", "MySQL", "Filament"],
            features: ["Online Payment", "Booking History", "Admin Management", "Ticket Booking Form"],
            timeline: "1.5 months",
            status: "Completed",
            links: { live: "#", github: "#" },
        },
        {
            id: 6,
            title: "Handmade Crafts Community Website",
            category: "web development",
            image: "./images/4.png",
            description:
                "A community-driven platform for handmade crafters to share ideas, discuss techniques, and collaborate on creative projects. The website aims to strengthen artisan networks and spark joint creative opportunities.",
            technologies: ["Laravel", "TailwindCSS", "JavaScript", "MySQL"],
            features: [
                "Discussion Forum for Artisans",
                "Member Profiles",
                "Interactive Product Gallery",
                "Educational Articles & Tutorials",
            ],
            timeline: "1.5 months",
            status: "Completed",
            links: { live: "#", github: "#" },
        },
        {
            id: 7,
            title: "Car Rental",
            category: "web development",
            image: "./images/3.png",
            description:
                "A web-based car rental platform that allows users to search, book, and manage car rentals seamlessly.",
            technologies: ["Laravel", "TailwindCSS", "JavaScript", "MySQL", "Livewire", "Jetstream"],
            features: [
                "Car Search & Filter",
                "Online Booking System",
                "Real-Time Availability Check",
                "Order Management",
            ],
            timeline: "1.5 months",
            status: "Completed",
            links: { live: "#", github: "#" },
        },
        {
            id: 8,
            title: "Fashion E-Commerce",
            category: "UIUX desain",
            image: "./images/9.png",
            description:
                "Designed a fashion store landing page that captures user interest from the first view. Focused on strong product visuals, clear call-to-action, and intuitive navigation.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            features: ["Online Menu", "Reservation Form", "Gallery", "Contact Integration", "SEO Optimized"],
            timeline: "1 month",
            status: "Completed",
            links: { live: "#", github: "#" },
        },
        {
            id: 9,
            title: "Online Course Mobile App UI Design",
            category: "UIUX desain",
            image: "./images/8.png",
            description:
                "Designed a mobile app for easy and intuitive access to online learning content. Focused on user experience with simple navigation, clear progress tracking, and quick access to course videos. The UI is modern, engaging, and optimized for mobile-first users.",
            technologies: ["Laravel", "PHP", "MySQL", "JWT", "Postman"],
            features: ["JWT Authentication", "CRUD Operations", "API Documentation", "Rate Limiting", "Error Handling"],
            timeline: "2 months",
            status: "In Progress",
            links: { live: null, github: "#" },
        },
        {
            id: 10,
            title: "Handicraft Community Landing Page Design",
            category: "UIUX desain",
            image: "./images/10.png",
            description:
                "Designed a landing page for a handmade craft community that connects local artisans with craft enthusiasts. The design emphasizes visual showcases, a clear join call-to-action, and intuitive navigation.",
            technologies: ["Laravel", "React JS", "MySQL", "TailwindCSS"],
            features: ["Content Management", "Project Showcase", "Client Portal", "Analytics", "File Upload"],
            timeline: "2.5 months",
            status: "Completed",
            links: { live: "#", github: "#" },
        },
    ];

    const categories = [
        { id: "all", name: "All Projects", icon: <Eye className="w-4 h-4" /> },
        { id: "web development", name: "Web Development", icon: <Code className="w-4 h-4" /> },
        { id: "UIUX desain", name: "UIUX Desain", icon: <Palette className="w-4 h-4" /> },
        // { id: 'backend', name: 'Backend', icon: <Database className="w-4 h-4" /> }
    ];

    const filteredProjects =
        selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-700 border-green-200";
            case "In Progress":
                return "bg-blue-100 text-blue-700 border-blue-200";
            default:
                return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div
                        ref={headerRef}
                        className={`text-center mb-16 transition-all duration-1000 ease-out ${
                            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Projects</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A showcase of reliable digital solutions I've built using modern technologies and best
                            practices in web development.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div
                        ref={filterRef}
                        className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ease-out delay-200 ${
                            filterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    selectedCategory === category.id
                                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                                        : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm border border-gray-200"
                                }`}
                            >
                                {category.icon}
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div
                        ref={gridRef}
                        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-400 ${
                            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(
                                                project.status
                                            )}`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Project Links Overlay */}
                                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.links.live && (
                                            <a
                                                href={project.links.live}
                                                className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-200"
                                                title="View Live"
                                            >
                                                <ExternalLink size={16} className="text-gray-700" />
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href="https://github.com/adejui?tab=repositories"
                                                target="_blank"
                                                className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors duration-200"
                                                title="View Code"
                                            >
                                                <Github size={16} className="text-gray-700" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 hover:line-clamp-none duration-700">
                                        {project.description}
                                    </p>

                                    {project.category === "web development" && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Key Features */}
                                    {project.category === "web development" && (
                                        <div className="mb-4">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h5>
                                            <ul className="text-xs text-gray-600 space-y-1">
                                                {project.features.slice(0, 4).map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center space-x-2">
                                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Timeline */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                                        {/* <div className="flex items-center space-x-1">
                                            <Calendar size={14} />
                                            <span>{project.timeline}</span>
                                        </div> */}
                                        <span className="text-blue-600 font-medium capitalize">{project.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* GitHub Profile Link */}
                    <div className="text-center mt-12">
                        <a
                            href="https://github.com/adejui?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <Github size={20} />
                            <span>View All on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
