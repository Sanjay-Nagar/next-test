import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Cards",
      link: "/cards",
    },
  ];
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          {links.map(({ link, name }) => (
            <Link href={link} key={link} className="mr-5 hover:text-white">
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
