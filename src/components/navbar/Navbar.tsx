import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faAngleDown,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { languages } from "../../utils/languages";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [language, setLanguage] = useState<string>(languages[0].name);
  const [showLanguages, setShowLanguages] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const handleLanguageSelect = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setShowLanguages(false);
  };

  return (
    <header className="fixed top-0 right-0 w-full md:w-4/5 bg-body-color shadow-md flex items-center justify-between p-2.5 sm:px-4 md:px-2 lg:px-8 xl:px-4">
      <div className="md:hidden text-xl cursor-pointer" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="relative flex items-center mx-0 border-2 rounded-md w-46 sm:w-28 md:w-1/3 lg:w-46 xl:w-2/5 max-md:mr-14 ">
        <input
          type="text"
          placeholder="Search here..."
          className="border-none rounded-md p-2 bg-bg-button placeholder-gray-500 w-46 sm:w-28 md:w-1/3 lg:w-46 xl:w-full "
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-2 text-black cursor-pointer"
        />
      </div>

      <div className="flex gap-6 sm:gap-8 md:gap-24 lg:gap-36 xl:gap-52 2xl:gap-96 items-center">
        <div className="relative items-center hidden md:flex">
          <div
            onClick={() => setShowLanguages(!showLanguages)}
            className="flex items-center cursor-pointer"
          >
            {language}
            <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
          </div>
          {showLanguages && (
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-10 w-40 max-h-32 overflow-y-auto">
              {languages.map((lang) => (
                <div
                  key={lang.id}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLanguageSelect(lang.name)}
                >
                  {lang.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faSun}
            className="text-yellow-500 -mr-16 mb-4"
          />
          <div className="flex flex-col items-end">
            <p className="text-sm">Good Morning</p>
            <div className="text-xs text-gray-500">
              <span>{formattedDate}</span>
              <span> {formattedTime} </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
