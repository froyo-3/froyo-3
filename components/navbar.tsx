import { useState } from 'react';
import Image from 'next/image';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="font-roboto flex-row text-center sm:flex-row sm:text-left justify-between py-2 px-3 shadow sm:items-center w-full rounded-b-xl border-b-2 border-x">
      <div className="flex items-center">
        <a href="https://zirpluu.ml" className="mr-3">
          <Image className="rounded-full" quality={1} width={50} height={50} src="/z.png" alt="Logo" />
        </a>
        <div className="hidden sm:flex-grow sm:flex justify-center text-xl">
          <div className="font-bold p-2 flex items-center">
            <a href="#" className="mr-3">Link 1</a>
            <a href="#" className="mr-3">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="sm:hidden ml-auto">
          <button
            type="button"
            className="text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-2 mx-10 py-2 px-3 bg-black shadow rounded-b-xl border-t-2 border-x absolute right-0 left-0 mx-auto sm:hidden">
          <div className="flex flex-col items-center">
            <a className="block py-1" href="#link1">
              Link 1
            </a>
            <a className="block py-1" href="#link2">
              Link 2
            </a>
            <a className="block py-1" href="#link3">
              Link 3
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export { Navigation };
