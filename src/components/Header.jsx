// import { Button } from "./Button";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function Header() {
//   const [isDark, setIsDark] = useState(true);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//     // implement dark/light logic if needed
//   };

//   return (
//     <header className="w-full flex justify-between items-center px-6 py-4 bg-transparent">
//       <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]">
//         Linkly<sup className="text-xs">®</sup>
//       </div>
//       <div className="flex items-center space-x-4">
//         <Button variant="ghost" className="text-white hover:text-gray-300">
//           <Link to="/login">🔐 Login →</Link>
//         </Button>
//         <Button className="bg-[#3A3AFF] text-white hover:bg-blue-700 px-4 py-2 rounded-full">
//           <Link to="/register">📝 Register Now</Link>
//         </Button>
//       </div>
//     </header>
//   );
// }




import { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full px-4 md:px-6 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]">
        Atom<sup className="text-xs">®</sup>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost">
          <Link to="/login">🔐 Login →</Link>
        </Button>
        <Button className="bg-[#3A3AFF] text-white hover:bg-blue-700">
          <Link to="/register">📝 Register Now</Link>
        </Button>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-3xl text-white focus:outline-none"
      >
        {menuOpen ? "❌" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-3 w-60 rounded-lg bg-[#1E1E2F] text-white shadow-lg border border-gray-700 flex flex-col divide-y divide-gray-700 p-2">
          <button
            className="w-full text-left py-3 px-4 hover:bg-[#2A2A40] rounded"
            onClick={closeMenu}
          >
            <Link to="/login">🔐 Login →</Link>
          </button>
          <button
            className="w-full text-left py-3 px-4 hover:bg-[#2A2A40] rounded"
            onClick={closeMenu}
          >
            <Link to="/register">📝 Register Now</Link>
          </button>
        </div>
      )}
    </header>
  );
}
