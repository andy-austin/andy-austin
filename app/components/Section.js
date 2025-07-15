export default function Section({ title, children, className = "", id }) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}