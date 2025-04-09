// import LinkRow from "./LinkRow";

// export default function ShortenedLinkTable({ links }) {
//   return (
//     <section className="w-full max-w-5xl mx-auto mt-14 overflow-x-auto">
//       <table className="min-w-full text-sm bg-[#16162A] text-white rounded-lg overflow-hidden">
//         <thead>
//           <tr className="bg-[#1E1E3F] text-left">
//             <th className="px-4 py-3">🔗 Short Link</th>
//             <th className="px-4 py-3">🌐 Original URL</th>
//             <th className="px-4 py-3">📷 QR Code</th>
//             <th className="px-4 py-3">👁️ Clicks</th>
//             <th className="px-4 py-3">✅ Status</th>
//             <th className="px-4 py-3">📅 Date</th>
//             <th className="px-4 py-3">📋</th>
//           </tr>
//         </thead>
//         <tbody>
//           {links.map((link, idx) => (
//             <LinkRow key={idx} link={link} />
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// }



import LinkRow from "./LinkRow";

export default function ShortenedLinkTable({ links }) {
  return (
    <section className="w-full max-w-6xl mx-auto mt-14">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm bg-[#16162A] text-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#1E1E3F] text-left">
              <th className="px-4 py-3">🔗 Short Link</th>
              <th className="px-4 py-3">🌐 Original URL</th>
              <th className="px-4 py-3">📷 QR Code</th>
              <th className="px-4 py-3">👁️ Clicks</th>
              <th className="px-4 py-3">✅ Status</th>
              <th className="px-4 py-3">📅 Date</th>
              <th className="px-4 py-3">📋</th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, idx) => (
              <LinkRow key={idx} link={link} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      {/* <div className="md:hidden flex flex-col gap-4">
        {links.map((link, idx) => (
          <div key={idx} className="bg-[#16162A] b border-2 border-amber-400 text-white rounded-lg p-4 shadow">
            <p className="text-sm mb-1"><span className="font-semibold">🔗 Short Link:</span> {link.shortUrl}</p>
            <p className="text-sm mb-1"><span className="font-semibold">🌐 Original URL:</span> {link.originalUrl}</p>
            <p className="text-sm mb-1"><span className="font-semibold">📷 QR Code:</span> [QR]</p>
            <p className="text-sm mb-1"><span className="font-semibold">👁️ Clicks:</span> {link.clicks}</p>
            <p className="text-sm mb-1"><span className="font-semibold">✅ Status:</span> {link.status}</p>
            <p className="text-sm mb-2"><span className="font-semibold">📅 Date:</span> {link.date}</p>
            <div>[📋 Copy Button]</div>
          </div>
        ))}
      </div> */}


<div className="md:hidden flex flex-col gap-4 px-4">
  {links.map((link, idx) => (
    <div
      key={idx}
      className="bg-[#0D0D1A] flex items-center justify-between px-4 py-3 rounded-lg shadow"
    >
      <div className="flex items-center gap-3 overflow-hidden flex-1">
        <p className="text-white text-sm truncate">{link.shortUrl}</p>
        <button className="bg-[#1E1E3F] p-2 rounded-full">
          📋
        </button>
      </div>
      <button className="ml-3 bg-[#1E1E3F] p-2 rounded-full">
        ⬇️
      </button>
    </div>
  ))}
</div>
    </section>
  );
}
