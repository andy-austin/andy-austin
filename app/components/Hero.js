import SocialLinks from './SocialLinks';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
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