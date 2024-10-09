const links = [
  { name: "Home", href: "/" },
  { name: "Meditation", href: "/meditation" },
  { name: "Articles", href: "/articles" },
];

export default function Nav() {
  return (
    <nav className="w-full h-10 border rounded-full">
      <ul className="px-4 flex justify-around items-center w-full h-full">
        {links.map((link, index) => (
          <li
            className="px-2 py-1 flex items-center hover:bg-teal-300 transition ease-in-out duration-300 rounded-full"
            key={index}
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
