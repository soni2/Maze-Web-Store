export default function Button({ title, children, type }) {
  return (
    <button
      type={type}
      className="inline-block w-full flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
      title={title}
    >
      {children}
    </button>
  );
}
