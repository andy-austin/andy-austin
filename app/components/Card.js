export default function Card({ children, className = "", hover = false }) {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md border border-gray-200 
        ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}