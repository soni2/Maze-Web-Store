export default function Button({ title, children, type }) {
  return (
    <button
      type={type}
      className="w-full bg-slate-700 py-2 hover:bg-slate-600"
      title={title}
    >
      {children}
    </button>
  );
}
