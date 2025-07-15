import SocialLinks from './SocialLinks';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      {/* Simple tech icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg">
            React
          </div>
        </div>
        <div className="absolute top-32 right-20">
          <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg">
            JS
          </div>
        </div>
        <div className="absolute bottom-20 left-20">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg">
            🐍
          </div>
        </div>
        <div className="absolute bottom-32 right-10">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg">
            TS
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ring-4 ring-blue-200">
              AF
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Andy Fernandez
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            Software Engineer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Breaking code, building features! Software engineer passionate about coding, coffee, and road trips. 
            Skilled in Python, React, and Cloud technologies. I also write technical articles and share insights about software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button href="#projects" variant="primary" size="lg">
              View Projects
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
          
          <SocialLinks className="justify-center" />
          
          <div className="mt-8 text-sm text-gray-500">
            <p>📍 Montevideo, Uruguay (UTC -03:00)</p>
          </div>
        </div>
      </div>
    </section>
  );
}