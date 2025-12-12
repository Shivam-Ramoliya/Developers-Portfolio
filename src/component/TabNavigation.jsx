import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TabNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const tabs = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Skills", path: "/skills" },
        { name: "Resume", path: "/resume" },
        { name: "Contact", path: "/contact" },
    ];

    const isActiveTab = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/30 dark:bg-slate-900/30 border-b border-white/20 dark:border-slate-700/30 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                        }}
                        className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500 whitespace-nowrap shrink-0"
                    >
                        Shivam S. Ramoliya
                    </a>

                    {/* Tab Navigation - Pushed to right */}
                    <div className="flex overflow-x-auto hide-scrollbar ml-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.path}
                                onClick={() => navigate(tab.path)}
                                className={`px-4 md:px-6 py-2 whitespace-nowrap font-medium transition-all duration-300 border-b-2 ${isActiveTab(tab.path)
                                        ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                                        : "border-transparent text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                                    }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scrollbar hide styles */}
            <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </nav>
    );
};

export default TabNavigation;
