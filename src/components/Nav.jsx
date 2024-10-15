import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../store/ThemeProvider";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { useEffect } from "react";
import clsx from "clsx";

const routes = [
  { name: "Chat", href: "/calm-space/chat", active: false },
  { name: "Meditation", href: "/calm-space/meditation", active: false },
  { name: "Articles", href: "/calm-space/articles", active: false },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [darkTransitionFinished, setDarkTransitionFinished] = useState(false);
  const [lightTransitionFinished, setLightTransitionFinished] = useState(true);
  const [links, setLinks] = useState(routes);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setLinks(
      links.map((link) => {
        if (link.href === location.pathname) {
          link.active = true;
        } else {
          link.active = false;
        }
        return link;
      }),
    );
  }, [links]);

  return (
    <>
      <nav className="w-full h-14 px-4 flex justify-between items-center shadow-xl rounded-full bg-neutral-50 dark:bg-neutral-900 transition duration-100 ease-in-out">
        <span className="px-2 shrink-0 text-lg font-bold border border-teal-400 shadow-md shadow-teal-500/50 rounded-full">
          <a href="/">Calm Space</a>
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-around items-center w-full h-full">
          {links.map((link, index) => (
            <li
              className={clsx(
                "px-2 py-1 flex items-center hover:bg-teal-300 transition ease-in-out duration-150 rounded-full",
                link.active && "bg-teal-300 text-black",
              )}
              key={index}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button
            className={`my-3 p-1 ${
              theme === "dark" ? "text-white" : ""
            } rounded-lg transition duration-100 ease-in`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Transition
              show={lightTransitionFinished && theme === "dark"}
              beforeEnter={() => setDarkTransitionFinished(false)}
              afterLeave={() => setDarkTransitionFinished(true)}
            >
              <Moon
                size={24}
                className="transition duration-100 ease-in-out data-[closed]:opacity-0"
              />
            </Transition>
            <Transition
              show={
                (darkTransitionFinished && theme === "light") ||
                (true
                  ? darkTransitionFinished == false && theme === "light"
                  : false) //extra condition for when theme is light but darkTransitionFinished is false
              }
              beforeEnter={() => setLightTransitionFinished(false)}
              afterLeave={() => setLightTransitionFinished(true)}
            >
              <Sun
                size={24}
                className="transition duration-100 ease-in-out data-[closed]:opacity-0"
              />
            </Transition>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Slide-in Navrail */}
      <Transition
        show={isMobileMenuOpen}
        enter="transition transform ease-out duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition transform ease-in duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="fixed top-0 right-0 w-64 h-full bg-neutral-50 dark:bg-neutral-900 shadow-lg p-4 flex flex-col z-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">
              <a href="/">Calm Space</a>
            </span>
            <button
              className="focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li
                className={clsx(
                  "px-2 py-1 flex items-center hover:bg-teal-300 transition ease-in-out duration-150 rounded-full",
                  link.active && "bg-teal-300 text-black",
                )}
                key={index}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </>
  );
}
