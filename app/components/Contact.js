import Section from './Section';
import Card from './Card';
import Button from './Button';
import SocialLinks from './SocialLinks';

export default function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "afgarabote@gmail.com",
      description: "Available for opportunities",
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      title: "Location",
      value: "Montevideo, Uruguay",
      description: "UTC -03:00",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
      title: "GitHub",
      value: "andy-austin",
      description: "14 repositories, 9 stars",
      icon: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
    },
    {
      title: "LinkedIn",
      value: "afgarabote",
      description: "Software Engineer at Howdy™",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    }
  ];

  return (
    <Section title="Get in Touch" id="contact" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-8">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to discuss a project or just say hello!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              href="mailto:afgarabote@gmail.com" 
              variant="primary" 
              size="lg"
            >
              Send Email
            </Button>
            <Button 
              href="https://linkedin.com/in/afgarabote" 
              variant="outline" 
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </Button>
          </div>
          
          <SocialLinks className="justify-center" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d={info.icon} />
                </svg>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              
              <p className="text-blue-600 font-medium mb-1">
                {info.value}
              </p>
              
              <p className="text-gray-600 text-sm">
                {info.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you&apos;re looking for a software engineer, have a project in mind, 
              or just want to connect, I&apos;d love to hear from you.
            </p>
            <Button 
              href="https://buymeacoffee.com/afgarabote" 
              variant="secondary" 
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              ☕ Buy me a coffee
            </Button>
          </Card>
        </div>
      </div>
    </Section>
  );
}