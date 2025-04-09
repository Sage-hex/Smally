import CopyButton from "./CopyButton";

export default function LinkRow({ link }) {
  return (
    <tr className="border-t border-gray-700 hover:bg-[#1B1B30] transition-all">
      <td className="px-4 py-3">{link.shortUrl}</td>
      <td className="px-4 py-3 truncate max-w-xs">{link.originalUrl}</td>
      <td className="px-4 py-3 text-center">📷</td>
      <td className="px-4 py-3">{link.clicks}</td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 rounded-full text-xs font-semibold 
          ${link.status === "Active" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {link.status}
        </span>
      </td>
      <td className="px-4 py-3">{link.date}</td>
      <td className="px-4 py-3">
        <CopyButton textToCopy={link.shortUrl} />
      </td>
    </tr>
  );
}
