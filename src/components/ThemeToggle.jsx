export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <div className="fixed bottom-5 right-5">
      <button
        onClick={toggleTheme}
        className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-full shadow"
        title="Toggle Theme"
      >
        {isDark ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}
