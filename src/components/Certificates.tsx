import React from "react";
import { Award, Calendar, ExternalLink, CheckCircle, Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Certificates = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [featuredRef, featuredVisible] = useScrollAnimation();
    const [allCertsRef, allCertsVisible] = useScrollAnimation();
    const [statsRef, statsVisible] = useScrollAnimation();

    const certificates = [
        {
            id: 1,
            title: "Uji Kompetensi Berbasis Industri Bidang Sistem Basis Data",
            issuer: "Sadasa Academy",
            date: "July 2024",
            type: "Certification",
            image: "./certificates/1.png",
            description:
                "Industry-recognized certificate in Database Systems, proving basic skills in managing and using databases.",
            skills: ["React JS", "Hooks", "Context API", "React Router"],
            credentialId: "COC005-OF2-08",
            link: "https://drive.google.com/file/d/12jG2aeQlq-jzxlQAznsW7g_h_BBflpc2/view",
            featured: false,
        },
        {
            id: 2,
            title: "Bootcamp Full-Stack Web Developer: Sewa Mobil",
            issuer: "BuildWithAngga",
            date: "September 2024",
            type: "Course Certificate",
            image: "./certificates/6.png",
            description:
                "A full-stack bootcamp project that developed a car rental application with booking features, car management, and user authentication.",
            skills: ["Laravel", "PHP", "Eloquent ORM", "API Development"],
            credentialId: "c8nGcZCdzi",
            link: "https://drive.google.com/file/d/1M9DnHgQkcbC6ASRj8bxyciPLbVYX5tq1/view",
            featured: false,
        },
        {
            id: 3,
            title: "Laravel 11, Filament, Service Repository Pattern: Web Tiket",
            issuer: "BuildWithAngga",
            date: "October 2024",
            type: "Course Certificate",
            image: "./certificates/7.png",
            description:
                "Developed a ticketing web application using Laravel 11 and Filament with the Service Repository Pattern to separate business logic and maintain clean, structured code.",
            skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures"],
            credentialId: "FuYPFcisJA5",
            link: "https://drive.google.com/file/d/1fdwU4aIVOmniPFOL0AF65sD5uH12egrC/view",
            featured: false,
        },
        {
            id: 4,
            title: "Pemasaran Digital Dengan Kecerdasan Buatan (AI) Untuk Wirausaha Digital Entrepreneurship Academy",
            issuer: "Komdigi",
            date: "May 2025",
            type: "Certification",
            image: "./certificates/2.png",
            description:
                "Completed a Digital Entrepreneurship Academy training on AI-powered digital marketing to enhance online business strategies efficiently and innovatively.",
            skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
            credentialId: "196104261110-45",
            link: "https://drive.google.com/file/d/1hvIxcvYFX8ig8OMIBCDFQ-eCIn_WMtx8/view",
            featured: false,
        },
        {
            id: 5,
            title: "Pemanfaatan Aplikasi Chat Bagi Wirausahawan Pemula Micro Skill",
            issuer: "Komdigi",
            date: "May 2025",
            type: "Certification",
            image: "./certificates/3.png",
            description:
                "Learned how to use chat applications to support communication, marketing, and customer service for early-stage entrepreneurs.",
            skills: ["Git", "GitHub", "Version Control", "Collaboration"],
            credentialId: "2299795850-6372",
            link: "https://drive.google.com/file/d/1fh7PX2SpwciGcNNRyrJzqQewmEX4tcwU/view",
            featured: false,
        },
        {
            id: 6,
            title: "HTML, CSS dan JavaScript: Pemula sampai Mahir",
            issuer: "Udemy",
            date: "July 2024",
            type: "Course Certificate",
            image: "./certificates/4.png",
            description:
                "Mastered foundational to advanced HTML, CSS, and JavaScript skills to build complete web layouts and interactivity.",
            skills: ["MySQL", "Database Design", "Query Optimization", "Administration"],
            credentialId: "MUC-88023e00-64cb-4f9e-9cdc-1e7facb372dd",
            link: "https://drive.google.com/file/d/1BFY3WL62P9hn6r51WeRtwOrVMw6oH_B7/view",
            featured: false,
        },
        {
            id: 6,
            title: "Bootstrap CSS: Pemula sampai Mahir",
            issuer: "Udemy",
            date: "July 2024",
            type: "Course Certificate",
            image: "./certificates/5.png",
            description:
                "Learned Bootstrap from beginner to advanced level to streamline the development of responsive and professional web interfaces.",
            skills: ["MySQL", "Database Design", "Query Optimization", "Administration"],
            credentialId: "UC-9daa12e-58b2-4836-9e95-b23b69578d0",
            link: "https://drive.google.com/file/d/1tRwwLcvm3VOEE7oO6N0hmMlyw_k6-Uhd/view",
            featured: false,
        },
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case "Professional Certificate":
                return "bg-blue-100 text-blue-700 border-blue-200";
            case "Course Certificate":
                return "bg-green-100 text-green-700 border-green-200";
            case "Certification":
                return "bg-purple-100 text-purple-700 border-purple-200";
            default:
                return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    return (
        <section id="certificates" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div
                        ref={headerRef}
                        className={`text-center mb-16 transition-all duration-1000 ease-out ${
                            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Certificates</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Continuous learning and professional development through industry-recognized courses and
                            certifications.
                        </p>
                    </div>

                    {/* All Certificates List */}
                    <div
                        ref={allCertsRef}
                        className={`transition-all duration-1000 ease-out delay-400 ${
                            allCertsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        {/* <h3 className="text-2xl font-bold text-black mb-8 flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              All Certifications
            </h3> */}
                        <div className="grid gap-4">
                            {certificates.map((certificate, index) => (
                                <div
                                    key={certificate.id}
                                    className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                                        {/* Certificate Image */}
                                        <div className="flex-shrink-0">
                                            <img
                                                src={certificate.image}
                                                alt={certificate.title}
                                                className="w-48 h-36 object-cover rounded-lg"
                                            />
                                        </div>

                                        {/* Certificate Info */}
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <h4 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors duration-200">
                                                            {certificate.title}
                                                        </h4>
                                                        {certificate.featured && (
                                                            <Star size={16} className="text-blue-600" />
                                                        )}
                                                    </div>

                                                    <p className="text-gray-600 font-medium mb-2">
                                                        {certificate.issuer}
                                                    </p>
                                                    <p className="text-gray-600 text-sm mb-3">
                                                        {certificate.description}
                                                    </p>

                                                    {/* Skills */}
                                                    {/* <div className="flex flex-wrap gap-2">
                                                        {certificate.skills.map((skill, skillIndex) => (
                                                            <span
                                                                key={skillIndex}
                                                                className="px-2 py-1 bg-white text-gray-700 rounded-md text-xs border border-gray-200"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div> */}
                                                </div>

                                                {/* Certificate Meta */}
                                                <div className="flex flex-col items-end space-y-2">
                                                    <span
                                                        className={`px-3 py-1 rounded-lg text-xs font-medium border ${getTypeColor(
                                                            certificate.type
                                                        )}`}
                                                    >
                                                        {certificate.type}
                                                    </span>

                                                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                                                        <Calendar size={14} />
                                                        <span>{certificate.date}</span>
                                                    </div>

                                                    <a
                                                        href={certificate.link}
                                                        target="_blank"
                                                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                                                    >
                                                        <ExternalLink size={14} />
                                                        <span>View Certificate</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Stats */}
                    {/* <div
                        ref={statsRef}
                        className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ease-out delay-600 ${
                            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="text-center p-6 bg-blue-600 text-white rounded-xl">
                            <div className="text-3xl font-bold mb-2">{certificates.length}</div>
                            <div className="text-blue-100 font-medium">Total Certificates</div>
                        </div>
                        <div className="text-center p-6 bg-black text-white rounded-xl">
                            <div className="text-3xl font-bold mb-2">
                                {certificates.filter((c) => c.featured).length}
                            </div>
                            <div className="text-gray-300 font-medium">Featured</div>
                        </div>
                        <div className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                            <div className="text-3xl font-bold mb-2 text-black">2024</div>
                            <div className="text-gray-600 font-medium">Latest Year</div>
                        </div>
                        <div className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                            <div className="text-3xl font-bold mb-2 text-black">100%</div>
                            <div className="text-gray-600 font-medium">Completion Rate</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
