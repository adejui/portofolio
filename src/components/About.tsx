import React from "react";
import { Lightbulb, Target, Users, Zap, Code, Database, Palette, GitBranch } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [leftRef, leftVisible] = useScrollAnimation();
    const [rightRef, rightVisible] = useScrollAnimation();

    const characteristics = [
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Adaptable",
            description:
                "Quick to adjust to new technologies, frameworks, and changing project requirements in dynamic environments.",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Flexible",
            description:
                "Comfortable working across different tech stacks and adapting development approaches based on project needs.",
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Solution-Focused",
            description: "Dedicated to creating reliable digital solutions that solve real-world problems effectively.",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Collaborative",
            description:
                "Strong team player with excellent communication skills and ability to work in cross-functional teams.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div
                        ref={headerRef}
                        className={`text-center mb-16 transition-all duration-1000 ease-out ${
                            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">About Me</h2>
                        {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A passionate web developer who thrives in dynamic environments and is committed to
                            delivering reliable digital solutions.
                        </p> */}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column - Bio & Story */}
                        <div
                            ref={leftRef}
                            className={`transition-all duration-1000 ease-out delay-200 ${
                                leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            <div className="mb-12">
                                {/* <h3 className="text-2xl font-bold text-black mb-6">My Journey</h3> */}
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        An active <strong>Information Systems</strong> student with a strong interest in
                                        <strong> Web Development</strong> and <strong>Data</strong>. Has completed
                                        various academic projects and online training programs that strengthened
                                        technical, data analysis, and collaboration skills. Experienced in using modern
                                        technologies to build web applications and highly motivated to continuously grow
                                        in the digital field.
                                    </p>
                                    <p>
                                        Adaptable, quick to learn new technologies, and communicates effectively in
                                        different settings. Open to new challenges and always striving to develop within
                                        a professional environment. Ready to contribute meaningfully to both team-based
                                        and individual projects.
                                    </p>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="text-lg font-semibold text-black mb-4">Education</h4>
                                <div className="space-y-4">
                                    <div>
                                        <h5 className="font-semibold text-gray-800">Bachelor of Information Systems</h5>
                                        <p className="text-gray-600">Universitas Bina Sarana Informatika</p>
                                        <p className="text-gray-600">2023 - Now</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <span className="text-sm text-gray-600">Current IPK:</span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold">
                                                3.98/4.00
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-gray-200">
                                        <h6 className="font-medium text-gray-700 mb-2">Relevant Coursework:</h6>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                                Database Concepts
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                                Database Applications
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                                Web Programming I
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                                Web Programming II
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                                Web Programming III
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                                UI/UX Design
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                                Data Science Algorithms
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                               Statistics
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                               Fundamentals of Data Analysis
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                               Business Intelligence 
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Characteristics */}
                        <div
                            ref={rightRef}
                            className={`transition-all duration-1000 ease-out delay-400 ${
                                rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            <h3 className="text-2xl font-bold text-black mb-8">Soft Skills & Characteristics</h3>

                            <div className="grid gap-6">
                                {[
                                    {
                                        icon: <Lightbulb className="w-8 h-8" />,
                                        title: "Adaptable",
                                        description:
                                            "Quick to adjust to new technologies, frameworks, and changing project requirements in dynamic environments.",
                                    },
                                    {
                                        icon: <Zap className="w-8 h-8" />,
                                        title: "Problem Solving",
                                        description:
                                            "Strong analytical thinking and ability to break down complex problems into manageable solutions.",
                                    },
                                    {
                                        icon: <Target className="w-8 h-8" />,
                                        title: "Detail-Oriented",
                                        description:
                                            "Meticulous attention to detail ensuring high-quality code and user experience in every project.",
                                    },
                                    {
                                        icon: <Users className="w-8 h-8" />,
                                        title: "Team Collaboration",
                                        description:
                                            "Excellent communication skills and ability to work effectively in cross-functional teams.",
                                    },
                                ].map((char, index) => (
                                    <div
                                        key={index}
                                        className="p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-100"
                                    >
                                        <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                                            {char.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold text-black mb-2">{char.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{char.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Additional Soft Skills */}
                            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
                                <h4 className="text-xl font-semibold mb-4">Additional Soft Skills</h4>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Time Management</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Critical Thinking</span>
                                    </div>
                                    {/* <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Leadership</span>
                                    </div> */}
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Communication</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Creativity</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Continuous Learning</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-blue-600 text-white rounded-xl">
                                    <div className="text-2xl font-bold mb-1">10+</div>
                                    <div className="text-blue-100 text-sm">Technologies</div>
                                </div>
                                <div className="text-center p-4 bg-black text-white rounded-xl">
                                    <div className="text-2xl font-bold mb-1">7+</div>
                                    <div className="text-gray-300 text-sm">Projects Completed</div>
                                </div>
                                {/* <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                                    <div className="text-2xl font-bold mb-1 text-black">2024</div>
                                    <div className="text-gray-600 text-sm">Expected Graduate</div>
                                </div>
                                <div className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                                    <div className="text-2xl font-bold mb-1 text-black">8+</div>
                                    <div className="text-gray-600 text-sm">Technologies</div>
                                </div> */}
                            </div>

                            {/* Current Focus */}
                            {/* <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white">
                                <h4 className="text-xl font-semibold mb-4">Current Focus</h4>
                                <div className="space-y-2 text-sm">
                                    <p>🚀 Building modern web applications with React & Laravel</p>
                                    <p>📚 Completing final year Information Systems studies</p>
                                    <p>🔧 Mastering full-stack development best practices</p>
                                    <p>💼 Seeking internship and entry-level opportunities</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
