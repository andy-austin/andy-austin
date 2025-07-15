import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Andy Fernandez</h3>
            <p className="text-gray-400">Software Engineer • Montevideo, Uruguay</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks className="mb-4" />
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Andy Fernandez. Built with Next.js
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &ldquo;Breaking code, building features!&rdquo; - Passionate about coding, coffee, and road trips.
          </p>
        </div>
      </div>
    </footer>
  );
}