export default function Nav() {
  return (
    <nav className="w-full h-16 bg-blue-500 text-white">
      <ul className="flex justify-between items-center w-full h-full">
        <li className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            Home
          </a>
        </li>
        <li className="flex items-center">
          <a href="/meditation" className="text-2xl font-bold">
            Meditation
          </a>
        </li>
        <li className="flex items-center">
          <a href="/articles" className="text-2xl font-bold">
            Articles
          </a>
        </li>
      </ul>
    </nav>
  );
}
