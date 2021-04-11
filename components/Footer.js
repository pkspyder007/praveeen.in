import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
        <p className="text-sm text-center tracking-loose text-gray-200 sm:text-left ">
          <span className="mr-1">©</span> {new Date().getFullYear()}
          <span className="font-semibold ml-2">Praveen Kumar</span>
        </p>
        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <a className="ml-4 text-white hover:text-blue-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-white hover:text-blue-900">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a className="ml-4 text-white hover:text-gray-500">
            <FaGithub className="w-5 h-5" />
          </a>
        </span>
      </div>
    </div>
  );
}
