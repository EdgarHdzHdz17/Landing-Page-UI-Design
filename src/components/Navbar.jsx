import Logo from "../assets/images/Logo.png";

function NavbarComponent() {
  return (
    <nav className="p-6 flex justify-center sm:w-auto lg:w-auto ">
      <div className="container flex justify-center">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-20 text-2xl">
            <li>
              <a href="#" className="gray">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="gray">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="gray">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="gray">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
