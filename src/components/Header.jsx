import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import User from "../assets/User.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import Sidebar from "./Sidebar";

const Header = () => {
  // username and position
  const userName = "Evano";
  const userPosition = "Admin";

  //   onclick event
  function functionItem() {
    console.log("btn clicked");
  }

  return (
    <>
      <header className="py-3 md:px-0 px-3">
        <div className="header-all flex flex-wrap justify-between">
          <div className="hd-icon text-2xl flex justify-start items-center md:gap-5 gap-3">
            
            <div className="breadcrumb font-semibold">
              <Breadcrumb>
                <BreadcrumbList className={"md:text-[18px] text-[20px]"}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <div className="search md:block hidden md:flex flex justify-evenly md:w-1/4 items-center gap-0 bg-white  rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mic-icon lucide-mic"
            >
              <path d="M12 19v3" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <rect x="9" y="2" width="6" height="13" rx="3" />
            </svg>
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search"
              className="outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a6a6a6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </div>

          <div className="user flex flex-wrap justify-start items-center md:gap-10 gap-5">
            <div className="relative w-fit">
              {/* Bell Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bell"
              >
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
              </svg>

              {/* Badge Count */}
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                3
              </span>
            </div>

            <div className="user-det flex justify-start items-center md:gap-3 gap-2 md:pr-3 pr-0">
              <img src={User} alt="" className="rounded-3xl" />
              <div className="user-det">
                <p className="font-bold">{userName}</p>
                <p className="font-semibold text-[13px]">{userPosition}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className={"outline-none"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down-icon lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={"border-none relative right-3 top-3"}
                >
                  <DropdownMenuItem>My Profile</DropdownMenuItem>
                  <DropdownMenuItem>Log Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
