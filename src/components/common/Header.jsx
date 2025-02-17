import logo from '../../assets/svg/logo.svg'
const Header = () => {
  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600" style={{background:"linear-gradient(to bottom,#071c22 100%,#071c22 100%)"}}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-8">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#ba1268]">NS Conference</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              style={{background:'linear-gradient(to bottom,#10cfbd 0%,#10cfbd 100%)'}}
              type="button"
              className="text-white font-medium rounded-lg px-8 py-2 text-center text-lg cursor-pointer"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:hover:text-[#ba1268] md:p-0" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ba1268] md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transp`arent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ba1268] md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ba1268] md:p-0 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
