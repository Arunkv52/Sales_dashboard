import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Feather icons

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-layout-dashboard"
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
      
    },
    {
      name: "Sales",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-hand-coins"
        >
          <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
          <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
          <path d="m2 16 6 6" />
          <circle cx="16" cy="9" r="2.9" />
          <circle cx="6" cy="5" r="3" />
        </svg>
      ),
    },
    {
      name: "Invoice",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-handshake"
        >
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`sidebar hidden md:block bg-[#4285F4] rounded-r-[5px] shadow-[10px_3px_30px_-25px_rgba(0,_0,_0,_0.8)] h-dvh py-6 transition-all duration-300 ${
        isCollapsed ? "w-[100px] px-4" : "w-[250px] px-6"
      }`}
    >
      {/* Sidebar header */}
      <div className="sidebar-logo pb-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-[30px]" />
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white text-2xl hover:cursor-pointer"
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="sidebar-items text-white">
        <nav>
          <ul className="flex flex-col gap-y-8">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-[18px] font-bold cursor-pointer"
              >
                {item.icon}
                {!isCollapsed && <span>{item.name}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
