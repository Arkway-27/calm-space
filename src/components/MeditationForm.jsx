import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { label: "Five seconds", value: 5 },
  { label: "Six seconds", value: 6 },
  { label: "Seven seconds", value: 7 },
  { label: "Eight seconds", value: 8 },
];

export default function MeditationForm({ onSelect }) {
  const [option, setOption] = useState("Set Time");
  return (
    <Menu as="div" className="h-12 relative inline-block text-left w-40">
      <div className="h-full">
        <MenuButton className="w-full h-full bg-white px-3 py-2 flex justify-around items-center text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-sm border border-gray-200 dark:bg-neutral-900 dark:border-white/5 dark:text-neutral-300 rounded-2xl transition duration-100 ease-in-out">
          {option}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 h-20 origin-top-right bg-white ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in overflow-y-scroll text-neutral-900 shadow-sm border border-gray-200 dark:bg-neutral-900 dark:border-white/5 dark:text-neutral-300 rounded-2xl transition duration-100 ease-in-out"
      >
        <div className="py-1">
          {menuItems.map((item) => (
            <MenuItem
              key={item.value}
              onClick={() => {
                onSelect(item.value);
                setOption(item.label);
              }}
              className="block px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 "
            >
              <span>{item.label}</span>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
