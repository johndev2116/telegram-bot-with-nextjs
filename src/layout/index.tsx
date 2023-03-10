import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SideBar from "../components/SideBar";

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const LayOut: React.FC<Props> = ({ children }) => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <div className="flex">
      <SideBar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <div className="flex w-full">
        <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
          .
        </div>
        <div className="h-max flex-1 overflow-x-hidden overflow-auto flex flex-wrap p-2">
          <div className="w-full sm:flex p-2 items-end">
            <div className="sm:flex-grow flex justify-between">
              <div className="">
                <div className="flex items-center">
                  <div className="text-3xl font-bold  text-white">
                    Hello There
                  </div>
                  <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
                    <div className="ml-2 font-bold text-yellow-400">
                      WellCome
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="ml-2">October 26</div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  signOut({ callbackUrl: "/signin" });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </button>
              <button
                className="block sm:hidden"
                onClick={() => onSetShowSidebar(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayOut;
