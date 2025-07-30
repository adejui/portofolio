import React from "react";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Footer = () => {
    const [footerRef, footerVisible] = useScrollAnimation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer
            ref={footerRef}
            className={`bg-black text-white py-12 relative transition-all duration-1000 ease-out ${
                footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Brand */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Ade Jui Nurrochim</h3>
                            {/* <p className="text-gray-300 mb-4 leading-relaxed">
                                Web Developer creating reliable digital solutions in dynamic environments. Adaptable,
                                flexible, and always ready for the next challenge.
                            </p> */}
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/adejui"
                                    className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                    title="GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ade-jui-nurrochim-24524a331/"
                                    className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                    title="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                                    title="Email"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() =>
                                            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                                    >
                                        About Me
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                                    >
                                        Projects
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                                    >
                                        Skills
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById("certificates")
                                                ?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                                    >
                                        Certificates
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <div className="space-y-2 text-gray-300">
                                <p>📧 adejui2711@gmail.com</p>
                                <p>📱 085740096548</p>
                                <p>📍 Yogyakarta, Indonesia</p>
                                {/* <p className="text-blue-400 text-sm mt-3">✅ Available for new opportunities</p> */}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    {/* <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-1 text-gray-300 mb-4 md:mb-0">
                            <span>Built with</span>
                            <Heart size={16} className="text-blue-600" />
                            <span>using React & TailwindCSS</span>
                        </div>

                        <div className="text-gray-400 text-sm text-center md:text-right">
                            <p>&copy; {currentYear} John Developer. All rights reserved.</p>
                            <p className="text-xs mt-1">Web Developer | Ready to Create Solutions</p>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                title="Back to Top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;
