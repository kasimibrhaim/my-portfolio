// import CountryLookup from "./CountryLookup";

import DarkModeToglle from "./DarkModeToggle";

export default function Footer() {
  return (
    <footer className="footer self-end text-sm overflow-hidden text-gray-500  w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0 lg:border-t border-gray-500">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">© 2023 kasim ibrahim</li>
        </ul>

        <ul className="flex items-center space-x-6">
          <li className="link">
            <DarkModeToglle/>
          </li>
        </ul>
      </div>
    </footer>
  );
}

{/* <div className="border-b border-gray-500 px-8 py-3">
<CountryLookup />
</div> */}