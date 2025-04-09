// import { Button } from "./Button";
// import { Link } from "react-router-dom";

// export function UrlForm() {
//   return (
//     <section className="flex flex-col items-center justify-center mt-12 px-4">
//       <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
//         Shorten Your Loooong Links :)
//       </h1>
//       <p className="text-gray-400 text-center mt-3 max-w-2xl">
//         atom is an efficient and easy-to-use URL shortening service that streamlines your online experience.
//       </p>

//       <div className="mt-8 w-full max-w-2xl flex items-center bg-[#1E1E2F] rounded-full px-4 py-2 shadow-md">
//         <input
//           type="text"
//           placeholder="🔗 Enter the link here"
//           className="flex-grow bg-transparent text-white placeholder-gray-400 outline-none px-2"
//         />
//         <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 shadow">
//           ✂️ Shorten Now!
//         </Button>
//       </div>

//       <div className="flex items-center gap-2 mt-4">
//         <label className="flex items-center gap-2 text-sm text-gray-400">
//           <input type="checkbox" checked readOnly className="accent-blue-500" />
//           Auto Paste from Clipboard
//         </label>
//       </div>

//       <p className="text-sm text-gray-500 mt-3">
//         You can create <span className="text-pink-500 font-bold">05</span> more links.{" "}
//         <Link to="/register" className="text-blue-500 underline">Register</Link> to enjoy Unlimited usage
//       </p>
//     </section>
//   );
// }








import { Button } from "./Button";
import { Link } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

export function UrlForm() {
  return (
    <section className="flex flex-col items-center justify-center mt-8 px-4 sm:mt-12">
      {/* Responsive Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
        Shorten Your Loooong Links :)
      </h1>
      {/* Responsive Subtitle */}
      <p className="text-gray-400 text-center mt-3 max-w-2xl text-sm sm:text-base">
        Atom is an efficient and easy-to-use URL shortening service that streamlines your online experience.
      </p>

      {/* Responsive Input and Button Container */}
      <div className="mt-6 sm:mt-8 w-full max-w-2xl flex items-center bg-[#1E1E2F] rounded-full px-4 py-2 shadow-md">
        <input
          type="text"
          placeholder="🔗 Enter the link here"
          className="flex-grow bg-transparent text-white placeholder-gray-400 outline-none px-2 py-2 text-sm sm:text-base"
        />
        {/* Mobile Icon Button / Desktop Text Button */}
        <Button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 sm:p-3 shadow">
          {/* Show Icon on Mobile, Text on Larger Screens */}
          <span className="hidden sm:inline">✂️ Shorten Now!</span>
          <span className="sm:hidden">
          <IoArrowForwardCircle />
          </span>
        </Button>
      </div>

      {/* Responsive Checkbox Label */}
      <div className="flex items-center gap-2 mt-4 text-sm sm:text-base">
        <label className="flex items-center gap-2 text-gray-400">
          <input type="checkbox" checked readOnly className="accent-blue-500" />
          Auto Paste from Clipboard
        </label>
      </div>

      {/* Responsive Footer Text */}
      <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center">
        You can create <span className="text-pink-500 font-bold">05</span> more links.{" "}
        <Link to="/register" className="text-blue-500 underline">
          Register
        </Link>{" "}
        to enjoy unlimited usage.
      </p>
    </section>
  );
}